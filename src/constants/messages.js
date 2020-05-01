const USERS = {
  CANNOT_BE_EMPTY: 'User cannot be empty. Required fields: id (user id), score.',
  USER_ID_CANNOT_BE_EMPTY: 'User id cannot be empty.',
  SCORE_MUST_BE_NUMBER: 'Score must be a number.',
};

const ROUTER = {
  CANNOT_CONNECT_ROUTES: 'Cannot connect routes. Express app must exist. Closing the app ...',
};

const NOT_FOUND = 'Not found';

const UNKNOWN_ERROR = 'Unknown error';

module.exports = {
  USERS,
  ROUTER,
  NOT_FOUND,
  UNKNOWN_ERROR,
};
