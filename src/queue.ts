import './config/environment';
import Queue from './services/Queue';

import sendTransactionalEmail from './jobs/SendTransactionalEmail';

Queue.process(sendTransactionalEmail.handle);
