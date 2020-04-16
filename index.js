
if (process.env.NODE_ENV === 'production') {
  module.exports = require('./dist/real-name-pc.min.js');
} else {
  module.exports = require('./dist/real-name-pc.js');
}