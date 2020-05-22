const routes = (app) => {
  app.get('/', (_req, res) => {
    res.status(200).send('<html><body><h1>Hola server</h1></body><html>');
  });

  app.get('*', (_req, res) => {
    res.status(404).send('<html><body><h1>Not Found</h1></body><html>');
  });
};

module.exports = routes;
