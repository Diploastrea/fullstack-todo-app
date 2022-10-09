import express from 'express';
import cors from 'cors';
import { auth } from '../middlewares/auth';
import {
  signUpController,
  signInController,
  emailController,
  taskController,
} from '../controllers';

const router = express.Router();

router.use(cors());
router.use(express.json());

router.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'OPTIONS, GET, POST, PUT, PATCH, DELETE',
  );
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

router.post('/register', signUpController.signUpUser);

router.post('/login', signInController.signInUser);

router.get('/confirmation/:token', emailController.verifyEmailToken);

router.get('/tasks', auth, taskController.getTasks);

router.post('/task', auth, taskController.addTask);

export default router;
