import { Router } from 'express';

import usersRouter from './modules/users/infra/http/routes/users.routes';
import sessionsRouter from './modules/users/infra/http/routes/sessions.routes';

import citizensRouter from './modules/citizen/infra/http/routes/citizens.routes';

const routes = Router();
routes.use('/api/users', usersRouter);
routes.use('/api/sessions', sessionsRouter);

routes.use('/api/citizens', citizensRouter);

export default routes;
