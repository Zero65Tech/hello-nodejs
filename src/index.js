
process.env.ENV   = process.env.ENV   || 'local';
process.env.STAGE = process.env.STAGE || 'alpha';
process.env.PORT  = process.env.PORT  || 8080;

require('./app').listen(
    process.env.PORT,
    console.log(`\nServer (${ process.env.STAGE }) is up and listening at ${ process.env.PORT } port.\n`));
