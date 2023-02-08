const mongoose = require('mongoose')
mongoose.set("strictQuery", true);
mongoose.Promise = global.Promise
module.exports = mongoose.connect('mongodb://localhost/todo')
