var fs = require('fs');

//nao usa callback
//callback executa depois
//stream e concorrente
fs.createReadStream('imagem.jpg')
  .pipe(fs.createWriteStream('imagem-com-stream.jpg'))
  .on("finish", function(){
      console.log('arquivo escrito com stream');
  });
