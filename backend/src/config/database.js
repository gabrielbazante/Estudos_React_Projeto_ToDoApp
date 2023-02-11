const mongoose = require('mongoose')
mongoose.set("strictQuery", true);
mongoose.Promise = global.Promise
module.exports = mongoose.connect('mongodb://127.0.0.1:27017/todo', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
