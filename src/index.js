const express = require('express');
const app     = express();
const route   = require('./routes/route')

app.use('/', route)

app.listen(process.env.PORT || 8080, console.log(`index: Server is up and listening at ${ process.env.PORT || 8080 } port.`));
