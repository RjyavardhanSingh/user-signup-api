import {Router} from 'express';
import {registerUser} from '../controllers/userController.js';
import {validateUser} from '../middlewares/validateUser';

const router = Router();

router.post('/register', validateUser, registerUser);

export default router;
