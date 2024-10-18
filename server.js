const app = require('./index');
const port = 3000;

const server = app.listen(port, () => {
  console.log(`Server is listening on port ${port}!`);
});

module.exports = server;
