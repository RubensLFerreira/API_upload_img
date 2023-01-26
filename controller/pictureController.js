const Picture = require("../models/Picture");
const fs = require("fs");

exports.create = async (req, res) => {
	try {
		const { name } = req.body;
		const file = req.file;
		const picture = new Picture({
			name,
			src: file.path,
		});

		await picture.save();

		res.status(201).json({ picture, msg: "Imagem salva com sucesso!" });
	} catch (error) {
		res.status(500).json({ message: "[ERROR] erro ao salvar imagem!" });
	}
};

exports.findAll = async (req, res) => {
	try {
		const pictures = await Picture.find();
		res.status(200).json(pictures);
	} catch (error) {
		res
			.status(500)
			.json({ message: "[ERROR] erro ao selecionar todas as imagens!" });
	}
};

exports.remove = async (req, res) => {
	try {
		const picture = await Picture.findById(req.params.id);

		if (!picture) {
			return res
				.status(404)
				.json({ message: "[ERROR] imagem não encontrada!" });
		}
		// remove o arquivo
		fs.unlinkSync(picture.src);

		// remove do banco
		await picture.remove();

		res.status(200).json({ message: "Arquivo removido com sucesso!" });
	} catch (error) {
		res.status(500).json({ message: "[ERROR] erro ao excluir imagem!" });
	}
};
