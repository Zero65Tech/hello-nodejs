(async () => {

  const Config = require('@zero65/config'); // Sets PORT to 8080

  const GCP = require('@zero65tech/google-cloud-platform');
  await GCP.init({
    firestore: {
      project: 'zero65-test',
      collections: [ 'HELLO_DOCUMENTS' ]
    }
  });

  require('./app').listen(
      process.env.PORT,
      console.log(`\n\nServer (${ process.env.STAGE }) is up and listening at ${ process.env.PORT } port.\n\n`));

})();
