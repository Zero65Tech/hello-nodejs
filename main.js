(async () => {

  const Config = require('@zero65/config');
  
  const GCP = require('@zero65tech/google-cloud-platform');
  await GCP.init(Config['@zero65tech']['google-cloud-platform']);

  require('./app').listen(
      process.env.PORT,
      console.log(`\n\nServer (${ process.env.STAGE }) is up and listening at ${ process.env.PORT } port.\n\n`));

})();
