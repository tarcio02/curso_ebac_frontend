const inputP = document.getElementById('idadp');
const inputF = document.getElementById('idadf');
const msgAlert = document.getElementById('msga');
const msgErro = document.getElementById('msge');
const msgCerto = document.getElementById('msgc');
const cont = document.querySelector("#inputs");


inputP.addEventListener('focus', function(e) {
    msgAlert.style.display = 'block'
    inputP.style.border = 'solid 2px yellow'
    msgCerto.style.display = 'none'
})
inputP.addEventListener('blur', function(e) {
    msgAlert.style.display = 'none'
    inputP.style.border = 'none'
})

function validaIdade(idadeFilho) {
    return inputP.value > idadeFilho
}
cont.addEventListener('submit', function(e) {
    e.preventDefault();
    if(validaIdade(inputF.value))
    {
    msgCerto.style.display = 'block'
    msgErro.style.display = 'none'
    inputF.style.border = 'none'
    inputP.style.border = 'none'
    inputP.value = '';
    inputF.value = '';
    }
    else{
        msgErro.style.display = 'block'
        msgCerto.style.display = 'none'
        inputF.style.border = 'solid 2px red'
        inputP.style.border = 'solid 2px red'
    }
})