// Views
const index = require('./index.js');

module.exports = function (app) {
    app.use('/*', index);
};