

let nomes = ["Gerson","Allana","Emanuel","Fernando","Milena","Cauan","Matheus","Ana","Sarah","Sofia"];
let frutas = ["Abacaxi","Amora","Damasco","Tangerina"]

//exportação explicita

// module.exports=nomes;
// module.exports=frutas;

function soma(A,B){
    return A+B;
}
module.exports={
    nomes,
    frutas,
    soma
}