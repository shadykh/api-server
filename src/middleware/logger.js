'use strict';

module.exports = (req, res, next) => {
  console.log(`🔈 The Request information 🔈 are as follows ➡️ method ⌛ ${req.method} path 📃 ${req.path} `);
  next();
};