let limitNumber = 0;
let number = 0;

function showNumber(tag,text){
    let inputt = document.getElementById(tag);
    inputt.innerHTML = text;
}


function gerarNum() {
    limitNumber = document.querySelector('input').value;
    number = parseInt(Math.random() * limitNumber + 1);
    showNumber('showNumber', number);
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function limparNumero(){
    let resetNumber = 0;
    showNumber('showNumber', resetNumber);
}

function reset(){
    limparCampo();
    limparNumero();
}