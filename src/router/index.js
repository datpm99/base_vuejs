import routes from './routes';
import { initCurrentUserStateMiddleware } from './middlewares';

routes.beforeEach(initCurrentUserStateMiddleware);
export default routes