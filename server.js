const Config = require('@zero65/config');

require('./app/index.js')
    .listen(
        process.env.PORT,
        console.log(`\n\nServer (${ process.env.STAGE }) is up and listening at ${ process.env.PORT } port.\n\n`));
