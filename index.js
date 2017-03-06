var app = require('./config/custom-express')(); //() invoca o codigo

app.listen(3000,function(){
	console.log("servidor rodando");
});
