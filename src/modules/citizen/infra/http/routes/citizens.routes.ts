import { Router } from 'express';
import ensureAuthenticated from '../../../../users/infra/http/middlewares/ensureAuthenticated'
import CitizensController from '../controllers/CitizensController';

const citizensRouter = Router();
const citizensController = new CitizensController();

citizensRouter.get('/',ensureAuthenticated, citizensController.getAll);
citizensRouter.post('/',ensureAuthenticated, citizensController.create);


export default citizensRouter;
