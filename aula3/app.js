//criando e removendo pastas
const fs = require("fs");

//com metodo sincrono

//fs.mkdirSync('logs');

//com metodo assincrono
// fs.mkdir("poggers",(erro)=>{
//     if(erro){
//         console.log("erro")
//     }
// })

//REMOVENDO PASTAS e testar se ela existe

if(fs.existsSync('poggers')){
    fs.rmdirSync('poggers')
}

console.log("fim");