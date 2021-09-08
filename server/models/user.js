const { Schema, model, ObjectId } = require('mongoose');

const User = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  diskSpace: { type: Number, default: 1024 ** 3 * 10 },
  diskSpace2: { type: Number, default: 1024 ** 3 * 10 },
  usedSpace: { type: Number, default: 0 },
  role: { type: String, required: true, default: 'zamer' },
  name: { type: String, required: true, default: 'Петр Петрович' },
  avatar: { type: String },
  files: [{ type: ObjectId, ref: 'File' }],
});

module.exports = model('User', User);
