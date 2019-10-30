const db = require('./db');

exports.list = async (ctx) => {
  const options = { order: [['createdAt', 'DESC']]};

  const result = await db.Message.findAll(options);
  const messages = await Promise.all(result.map(m => m.toJSON()));

  const response = {
    results: messages,
  };

  ctx.body = response;
};

exports.create = async (ctx) => {
  const params = ctx.request.body;

  const message = await db.Message.create({ message: params.message });

  ctx.body = await message.toJSON();
  ctx.status = 201;
};
