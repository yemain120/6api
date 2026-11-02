/**
 * Vercel Serverless Function Entrypoint
 * This file handles all /api/* routes when deployed to Vercel.
 */
import express, { Request, Response } from 'express';
import { apiRouter } from '../src/server/apiRouter.ts';

const app = express();

app.use(express.json());

// Enable CORS
app.use((_req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Accept');
  next();
});

// Mount routes for both /api/v1 and /api
app.use('/api/v1', apiRouter);
app.use('/api', apiRouter);

// Root api ping
app.get('/', (_req: Request, res: Response) => {
  res.json({
    message: 'NCTB Class 6 Curriculum API is live on Vercel!',
    docs: '/api/v1/meta',
    books: '/api/v1/class-6/books'
  });
});

export default app;
