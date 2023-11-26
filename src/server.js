
const app  = require('./index.js');
const port = process.env.PORT || 8080;

app.listen(port, console.log(`Server is up and listening at ${ port } port.`));
