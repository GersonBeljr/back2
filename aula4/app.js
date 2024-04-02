//criando e removendo arquivos
const fs = require("fs");


fs.appendFile('logs.txt','Bungas\n',(erro)=>{
    if(erro){
        console.log('sujou')
    }
});

//apagar

if (fs.existsSync('logs.txt')) {
    fs.rm("logs.txt");
}

console.log("FIM da execução");
