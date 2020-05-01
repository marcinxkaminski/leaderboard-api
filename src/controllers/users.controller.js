const { USERS } = require('../constants/messages');
const Users = require('../models/users.model');
const { DEFAULT_OFFSET_COUNT, DEFAULT_LIMIT_COUNT } = require('../config');

const requireNotEmptyUsers = (body) => {
  if (!body) {
    // eslint-disable-next-line no-throw-literal
    throw { status: 400, message: USERS.CANNOT_BE_EMPTY };
  }

  if (body.id == null || typeof body.id === 'undefined') {
    // eslint-disable-next-line no-throw-literal
    throw { status: 400, message: USERS.USER_ID_CANNOT_BE_EMPTY };
  }
  if (Number.isNaN(body.score)) {
    // eslint-disable-next-line no-throw-literal
    throw { status: 400, message: USERS.SCORE_MUST_BE_NUMBER };
  }
};

const findAll = async (req, res) => {
  const { query: { limit = DEFAULT_LIMIT_COUNT, offset = DEFAULT_OFFSET_COUNT } } = req;

  const next = offset + limit;
  const data = await Users.find().slice('users', [offset, next]);
  const count = data.length;

  return res.status(200).send({
    count, offset, limit, next, data,
  });
};

const findOne = async ({ params: { userId } }, res) => {
  const issueWithId = await Users.findById(userId);
  return res.status(200).send(issueWithId);
};

const createOrUpdate = async ({ body }, res) => {
  requireNotEmptyUsers(body);

  const { id, score } = body;
  const user = await Users.findById(id) || {};

  user.lastScore = score;

  if (!user.maxScore || user.maxScore < score) {
    user.maxScore = score;
  }

  const updatedUser = await Users.findByIdAndUpdate(
    id,
    user,
    { upsert: true, new: true, setDefaultsOnInsert: true },
  );

  return res.status(200).send(updatedUser);
};

const remove = async ({ params: { userId } }, res) => {
  const deletedUsers = await Users.findByIdAndRemove(userId);
  return res.status(200).send(deletedUsers);
};

module.exports = {
  findAll,
  findOne,
  createOrUpdate,
  remove,
};
