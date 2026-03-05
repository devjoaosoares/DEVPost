import express from 'express';

const userRoutes = express.Router();

userRoutes.get('/status', (req, res) => {
  res.json({ status: '200' });
});

export default userRoutes;