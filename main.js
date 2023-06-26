const form = document.getElementById('form-adc-contato');
const nomeContato = document.getElementById('nome-contato');
const telContato = document.getElementById('tel-contato');
const telefones = [];

form.addEventListener('submit', function(e){
    e.preventDefault();
    atualizaContatos();
})

function adicionaContato(nome, telefone) {
    let novoContato = ``;
    let nomeArray = nome.split(' ');
    if(telefones.includes(parseInt(telefone))) {
        alert('Esse número já existe!');
    } else if (nomeArray.length < 2) {
        alert('Por favor, coloque o nome completo!');
    } else {
        novoContato = `<tr><td>${nome}</td><td>${telefone}</td></tr>`;
        telefones.push(parseInt(telefone));
    }
    nomeContato.value = '';
    telContato.value = '';
    return novoContato;
}

function atualizaContatos() {
    document.querySelector('tbody').innerHTML += adicionaContato(nomeContato.value, telContato.value);;
}