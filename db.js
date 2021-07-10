const mongoose = require('mongoose');

const { DB_BASE_URL } = process.env;

const url = `${DB_BASE_URL}`;

mongoose.connect(url,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  });

module.exports = mongoose;
