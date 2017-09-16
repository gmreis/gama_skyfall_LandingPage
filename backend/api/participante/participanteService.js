const Participante = require('./participanteModel');
const server = require('../../config/server')


// POST /participante
function addParticipante(req, res) {

console.log("Parametros");
console.log(req.params.nome);

  var participante = new Participante({
    nome: req.params.nome,
    email: req.params.email,
    profissao: req.params.profissao,
    exGama: req.params.exgama,
    exLewagon: req.params.exlewagon
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
