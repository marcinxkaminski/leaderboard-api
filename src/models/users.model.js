const { Schema, model } = require('mongoose');

const UsersSchema = Schema({
  _id: String,
  maxScore: { type: Number, default: 0 },
  lastScore: { type: Number, default: 0 },
}, {
  timestamps: true,
});

module.exports = model('users', UsersSchema);
