import express from 'express';
import { auth } from '../middlewares/auth';
import {
  signUpController,
  signInController,
  emailController,
  taskController,
} from '../controllers';

const router = express.Router();

router.use(express.json());

router.post('/register', signUpController.signUpUser);

router.post('/login', signInController.signInUser);

router.get('/confirmation/:token', emailController.verifyEmailToken);

router.get('/tasks', auth, taskController.getTasks);

router.post('/task', auth, taskController.addTask);

export default router;
