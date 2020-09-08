import Queue from 'bull';
import { setQueues } from 'bull-board';
import redisConfig from '../config/redis';
import sendTransactionalEmail from '../jobs/SendTransactionalEmail';

const queue = new Queue(sendTransactionalEmail.key, {
  redis: redisConfig,
});

setQueues(queue);

export default queue;
