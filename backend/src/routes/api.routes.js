import express from 'express';
import cors from 'cors';
import {
  registerController,
  loginController,
} from '../controllers';

const router = express.Router();

router.use(cors());
router.use(express.json());

router.post('/register', registerController.register);

router.post('/login', loginController.login);

export default router;
