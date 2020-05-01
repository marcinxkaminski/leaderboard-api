const { UNKNOWN_ERROR, NOT_FOUND } = require('../constants/messages');
const { DEFAULT_ERROR_STATUS } = require('../config');

const asyncErrorHandler = (func) => async (req, res, next) => {
  try {
    return await func(req, res, next);
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err);
    if (err.kind === 'ObjectId' || err.name === 'NotFound') {
      return res.status(404).send({ message: NOT_FOUND });
    }

    const status = err.status || DEFAULT_ERROR_STATUS;
    const message = err.message || UNKNOWN_ERROR;

    return res.status(status).send({ message, status, error: err });
  }
};

module.exports = asyncErrorHandler;
