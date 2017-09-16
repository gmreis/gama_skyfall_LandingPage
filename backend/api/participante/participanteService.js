const Participante = require('./participanteModel');
const server = require('../../config/server')


// POST /participante
function addParticipante(req, res) {

  var participante = new Participante({
    nome: "Geraldo",
    email: "email",
    profissao: "profissao",
    exGama: 1,
    exLewagon: 0
  });

  Participante.create(participante, function(err, result) {
    if(err){
      console.error(err);
      res.status(409).end();
    } else {
      console.log('Salvo..');
      //res.setHeader('Content-Type', 'application/json');
      res.status(200).end(JSON.stringify("Geraldo..."));
    }
  });



}

module.exports = { addParticipante }
