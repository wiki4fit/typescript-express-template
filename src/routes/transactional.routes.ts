import { Router } from 'express';

const router = Router();

router.get('/', (request, response) =>
  response.json({ message: 'envio de email' }),
);

export default router;
