import express from 'express';
import cors from 'cors';
import { auth } from '../middlewares/auth';
import {
  signUpController,
  signInController,
  taskController,
  emailController,
} from '../controllers';

const router = express.Router();

router.use(cors());
router.use(express.json());

router.post('/register', signUpController.signUpUser);

router.post('/login', signInController.signInUser);

router.post('/task', auth, taskController.addTask);

router.get('/confirmation/:token', emailController.verifyEmailToken);

export default router;
