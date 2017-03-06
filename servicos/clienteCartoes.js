var restity = require('restify');

//funcao construtora
function CartoesClient(){
  this._cliente = restity.createJsonClient({
    url: 'http://localhost:3001'
  });
}

CartoesClient.prototype.autoriza = function(cartao, callback){
  this._cliente.post('/cartoes/autoriza', cartao, callback);
}

module.exports = function(){
    return CartoesClient;
}
