const { ROUTER: msg } = require('../constants/messages');
const usersRouter = require('./users.route');

module.exports = (app) => {
  if (!app) {
    // eslint-disable-next-line no-console
    console.error(msg.CANNOT_CONNECT_ROUTES);
    process.exit();
  }

  usersRouter(app);
};
