/* eslint-disable no-console */
import 'reflect-metadata';
import './config/environment';

import express, {
  Express as ExpressTypes,
  Request,
  Response,
  NextFunction,
} from 'express';

import cors from 'cors';
import 'express-async-errors';

import { UI } from 'bull-board';
import routes from './routes';
import AppError from './errors/AppError';

class App {
  express: ExpressTypes;

  constructor() {
    this.express = express();

    this.middlewares();
    this.exception();
  }

  middlewares(): void {
    this.express.use(cors());
    this.express.use(express.json());

    this.express.use('/admin/queues', UI);
    this.express.use(routes);
  }

  exception(): void {
    this.express.use(
      (error: Error, request: Request, response: Response, _: NextFunction) => {
        if (error instanceof AppError) {
          return response
            .status(error.statusCode)
            .json({ status: 'error', message: error.message });
        }

        console.error(error);

        return response.status(500).json({
          status: 'error',
          message: 'Internal server error',
        });
      },
    );
  }
}

export default new App();
