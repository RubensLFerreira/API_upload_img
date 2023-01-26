const multer = require("multer");

const path = require("path");

const storage = multer.diskStorage({
  // local onde vai ser salvo o arquivo
  destination: function (req, file, callback) {
    callback(null, "uploads/");
  },
  // Dando nome aos arquivos + add extensão do arquivo
  filename: function (req, file, callback) {
    callback(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

module.exports = upload;
