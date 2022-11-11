/* let encode = document.querySelector('#criptografar');
let decode = document.querySelector('#descriptografar');
let output = document.querySelector('textarea');

criptografar.addEventListener('click',() =>{
    output.value = btoa(output.value);
});

descriptografar.addEventListener('click',() =>{
    output.value = atob(output.value);
})

*/ 
const opBase = document.getElementById("base");
const opCifra = document.getElementById("opcifra")
function verificar(){
    if(opBase.checked = true){
        encode();
    }
    if(opCifra.checked = true){
        cifra();
    }
}

function vDecode(){
   if(opBase.checked = true){
    decode();
   }
}


function encode() {
    var resultado =  btoa(document.getElementById('inputTxt').value);
    var aSaida = document.getElementById('result');
    document.getElementById('result').value = resultado
    console.log(aSaida.innerHTML = resultado);
}
function decode (){
    var resu =  atob(document.getElementById('inputTxt').value);
    var aSaidaa = document.getElementById('result');
    document.getElementById('result').value = resu;
    console.log(aSaidaa.innerHTML = resu);
}
function cifra(){
    

}


