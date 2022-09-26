import express from 'express';
import cors from 'cors';
import {
  signUpController,
  signInController,
  taskController,
} from '../controllers';

const router = express.Router();

router.use(cors());
router.use(express.json());

router.post('/register', signUpController.signUpUser);

router.post('/login', signInController.signInUser);

router.post('/task', taskController.addTask);

export default router;
