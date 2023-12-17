
require('./app').listen(
    process.env.PORT=3000,
    console.log(`\n\nServer (${ process.env.STAGE }) is up and listening at ${ process.env.PORT } port.\n\n`));
