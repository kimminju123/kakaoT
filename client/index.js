import express from 'express';
import { create, getAll } from './user.controller.js';

const router = express.Router();

router.get('/', getAll);
router.post('/signup', (req, res) => {
  res.sendFile(path.resolve('./client/signup.html'));
});
router.get('/login', (req, res) => {
  res.sendFile(path.resolve('./client/login.html'));
});
router.get('/available', (req, res) => {
  res.sendFile(path.resolve('./client/available.html'));
});
router.get('/unavailable', (req, res) => {
  res.sendFile(path.resolve('./client/unavailable.html'));
});

export default router;