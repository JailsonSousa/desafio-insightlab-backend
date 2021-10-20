import { Router } from 'express';

import usersRouter from './modules/users/infra/http/routes/users.routes';
import sessionsRouter from './modules/users/infra/http/routes/sessions.routes';

import citizensRouter from './modules/citizen/infra/http/routes/citizens.routes';

const routes = Router();
routes.use('/users', usersRouter);
routes.use('/sessions', sessionsRouter);

routes.use('/citizens', citizensRouter);

export default routes;
