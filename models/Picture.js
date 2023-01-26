const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// criando a schema
const PictureSchema = new Schema({
  name: { type: String, require: true },
  src: { type: String, require: true },
});

// exportando o schema com nome Picture
module.exports = mongoose.model("Picture", PictureSchema);
