//lendo arquivos usando fs
const fs = require("fs");

// fs.readFile('./dados.csv', (erro, data) => {
//     if (erro) {
//         console.log(erro.toString());
//     } else {
//         console.log(data.toString());
//     }
// });

//testar o metodo assincrono

let dados = "";
if (fs.existsSync("dados.csv")) {
    dados = fs.readFileSync('./dados.csv');
    console.log(dados.toString());
}else{
    console.log("PARA DE SER NOIA")
}

console.log("segunda operação: ");


