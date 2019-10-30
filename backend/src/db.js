const Sequelize = require('sequelize');

const DATABASE_URL = process.env.DATABASE_URL || 'postgres://example:example@localhost/example';

const sequelize = new Sequelize(DATABASE_URL, { logging: false });

/** INIT DATABASE **/

const Message = sequelize.define('messages', {
  message: Sequelize.TEXT,
});

Message.prototype.toJSON = function toJSON () {
  return {
    message: this.message,
    createdAt: this.createdAt,
  };
}

/** EXPORT DB OBJECTS **/

module.exports = {
  Message,
  sync: options => sequelize.sync(options),
  close: options => sequelize.close(options),
};
