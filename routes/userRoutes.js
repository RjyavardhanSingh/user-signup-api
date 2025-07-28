import {Router} from 'express';
import {registerUser} from '../controllers/userController.js';
import {validateUser} from '../middlewares/userMiddleware.js';

const router = Router();

router.post('/register', validateUser, registerUser);

export default router;
