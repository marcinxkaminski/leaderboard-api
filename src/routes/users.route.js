const usersController = require('../controllers/users.controller');
const usersMiddleware = require('../middlewares/users.middleware');

const USERS_BASE_PATH = '/users';
const USER_ID_PATH_PARAM = '/:userId';

module.exports = (app) => {
  app.get(
    `${USERS_BASE_PATH}`,
    usersMiddleware(usersController.findAll),
  );

  app.put(
    `${USERS_BASE_PATH}`,
    usersMiddleware(usersController.createOrUpdate),
  );

  app.get(
    `${USERS_BASE_PATH}${USER_ID_PATH_PARAM}`,
    usersMiddleware(usersController.findOne),
  );

  app.delete(
    `${USERS_BASE_PATH}${USER_ID_PATH_PARAM}`,
    usersMiddleware(usersController.remove),
  );
};
