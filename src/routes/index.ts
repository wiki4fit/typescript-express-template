import { Router } from 'express';

import TransactionalRouter from './transactional.routes';

const routes = Router();

routes.use('/transactional', TransactionalRouter);

export default routes;
