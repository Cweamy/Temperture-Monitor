const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const usersRepo = require('../repositories/users.repository');
require('dotenv').config();

exports.login = async (email, password) => {
  const user = await usersRepo.findByEmail(email);

  if (!user) throw new Error('Invalid email or password');

  const ok = await bcrypt.compare(password, user.password);
  if (!ok) throw new Error('Invalid email or password');

  const token = jwt.sign(
    { id: user.id, email: user.email, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: '8h' }
  );

  return { token, user };
};
