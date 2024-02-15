const form = document.getElementById("form_atividade");
const nomeAtividade = document.getElementById("nome");
const notaAtividade = document.getElementById("nota");
const imgAprovado = '<img src="./images/aprovado.png" alt="Emoji celebrando" />';
const imgReprovado = '<img src="./images/reprovado.png" alt="Emoji triste" />';


let linhas = '';

const corpoTabela = document.querySelector('tbody');

form.addEventListener('submit', function(e){
    e.preventDefault();
    
    linhas += addLinha(nomeAtividade.value, notaAtividade.value);
    corpoTabela.innerHTML = linhas;

    resetForm();
});

function addLinha(nome, nota){
    let linha = '<tr>';
    linha += `<td>${nome}</td>`;
    linha += `<td>${nota}</td>`;
    linha += `<td>${nota >= 7 ? imgAprovado : imgReprovado}</td>`;
    linha += '</tr>';

    return linha;
}

function resetForm(){
    nomeAtividade.value = '';
    notaAtividade.value = '';
}
