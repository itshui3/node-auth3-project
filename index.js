require('dotenv').config();
const server = require('./serverBuild');

const port = process.env.PORT || 5000;

server.listen(port, () => console.log(`port ${port}`));