const app = require('./src/app');
const db = require('./src/db');

const PORT = process.env.PORT || 4000;

db.sync().then(() => {
  app.listen(PORT);
});

console.log(`Running on port ${PORT}`);
