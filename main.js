(async () => {

  const GCP = require('@zero65tech/google-cloud-platform');
  await GCP.init({
    firestore: {
      project: 'zero65-test',
      collections: collections[ 'HELLO_DOCUMENTS' ]
    }
  });

  require('./app').listen(
      process.env.PORT || 8080,
      console.log(`\n\nServer (${ process.env.STAGE }) is up and listening at ${ process.env.PORT } port.\n\n`));

})();
