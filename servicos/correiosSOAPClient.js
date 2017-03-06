var soap = require('soap');

function correiosSOAPClient(){
    this._url = 'http://ws.correios.com.br/calculador/CalcPrecoPrazo.asmx?wsdl';
}

correiosSOAPClient.prototype.calculaPrazo = function(args,callback){
  soap.createClient(this._url, function(erro,cliente){
          console.log('cliente soap criado');
          cliente.CalcPrazo(args,callback);
        });
}

module.exports = function(){
  return correiosSOAPClient;
}
