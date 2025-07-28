import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import bcrypt from "bcrypt";
import { v4 as uuidv4 } from "uuid";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DB_FILE = path.join(__dirname, "../database.json");

const loadUsers = () => {
  return fs.existsSync(DB_FILE) ? JSON.parse(fs.readFileSync(DB_FILE)) : [];
};

const saveUsers = (users) => {
  fs.writeFileSync(DB_FILE, JSON.stringify(users, null, 2));
};

export const registerUser = (req, res) => {
  const { username, email, password } = req.body;

  const users = loadUsers();

  if (users.find((user) => user.email === email)) {
    return res.status(400).json({ message: "Email already registered" });
  }

  const hashedPassword = bcrypt.hash(password, 10);

  const newUser = {
    id: uuidv4(),
    username,
    email,
    password: hashedPassword,
  };

  users.push(newUser);
  saveUsers(users);
  res.status(201).json({
    message: "User registered successfully",
    userId: newUser.id,
  });
};
