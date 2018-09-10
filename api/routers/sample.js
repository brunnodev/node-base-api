module.exports = function(app) {

  const sample = app.middleware.sample;

  app.get('/', sample.index);

}
