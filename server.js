
require('./app').listen(
    process.env.PORT,
    console.log(`\n\nServer (${ process.env.STAGE }) is up and listening at ${ process.env.PORT } port.\n\n`));
