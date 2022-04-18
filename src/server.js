const app = require('./app');

(async () => {
  try {
    port = process.env.SERVER_PORT;
    // database call \/
    // await database.authenticate()
    // async call from database
    app.listen(port, () => {
      console.log(`App listening on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
})();
