const controllers = require('./controllers.js');

const router = (app) => {
    app.get('/*', controllers.handleHomepage);
};

module.exports = router;