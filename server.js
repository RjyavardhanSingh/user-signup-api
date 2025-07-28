import express from 'express';
import userRoutes from './routes/userRoutes.js';

const app = express();

app.use(express.json());
app.use('/api/users', userRoutes);

app.get('/', (req, res) => {
    res.send('Welcome to the User Signup API');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
