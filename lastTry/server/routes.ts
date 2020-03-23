import * as express from 'express';

import NewController from './controllers/news';
// import UserCtrl from './controllers/user';

function setRoutes(app) {
    const router = express.Router();
    const newsController = new NewController();
    //  const userCtrl = new UserCtrl();

    // News
    router.route('/news').get(newsController.getAll);
    router.route('/news/count').get(newsController.count);
    router.route('/news').post(newsController.insert);
    router.route('/news/:id').get(newsController.get);
    router.route('/news/:id').put(newsController.update);
    router.route('/news/:id').delete(newsController.delete);

    // Users
    // router.route('/login').post(userCtrl.login);
    // router.route('/users').get(userCtrl.getAll);
    // router.route('/users/count').get(userCtrl.count);
    // router.route('/user').post(userCtrl.insert);
    // router.route('/user/:id').get(userCtrl.get);
    // router.route('/user/:id').put(userCtrl.update);
    // router.route('/user/:id').delete(userCtrl.delete);

    // Apply the routes to our application with the prefix /api
    app.use('/api', router);

}

export default setRoutes;