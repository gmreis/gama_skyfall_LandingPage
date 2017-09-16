const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment');

const participanteSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  email: { type: String, required: true },
  profissao: { type: String, required: true },
  exGama: { type: Number, required: true },
  exLewagon: { type: Number, required: true },
})

const Participante = mongoose.model('Participante', participanteSchema);
module.exports = Participante;
