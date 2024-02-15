//constantes globais
const form = document.getElementById("form_atividade");
const nomeAtividade = document.getElementById("nome");
const notaAtividade = document.getElementById("nota");
const imgAprovado = '<img src="./images/aprovado.png" alt="Emoji celebrando" />';
const imgReprovado = '<img src="./images/reprovado.png" alt="Emoji triste" />';
const mediaFinal = document.getElementById("media_value");
const mediaResultado = document.getElementById("media_result");
const spanAprovado = '<span class="resultado success">Aprovado</span>';
const spanReprovado = '<span class="resultado error">Reprovado</span>';
const notaminima = parseFloat(prompt("Digite a nota mínima"));

//variáveis globais
let linhas = '';
let atividade = [];
let notas = [];

const corpoTabela = document.querySelector('tbody');

form.addEventListener('submit', function(e){
    e.preventDefault();
    
    refreshTable();
    refreshFooter();
    
    resetForm();
});

function addLinha(nome, nota){

    atividade.push(nome);
    notas.push(parseFloat(nota));

    let linha = '<tr>';
    linha += `<td>${nome}</td>`;
    linha += `<td>${nota}</td>`;
    linha += `<td>${nota >= notaminima ? imgAprovado : imgReprovado}</td>`;
    linha += '</tr>';

    linhas += linha;
}

function calculateMedia(){
    let soma = 0;

    for(let indice in notas){
        soma += notas[indice];
    }

    return soma / notas.length;
}

function refreshTable(){
    if(atividade.includes(nomeAtividade.value)){
        alert(`A atividade ${nomeAtividade.value} já foi inserida`);
    }else{
        addLinha(nomeAtividade.value, notaAtividade.value);
        corpoTabela.innerHTML = linhas;
    }
}

function refreshFooter(){
    const media = calculateMedia();

    mediaFinal.innerHTML = media;
    mediaResultado.innerHTML = media >= notaminima ? spanAprovado : spanReprovado;
}

function resetForm(){
    nomeAtividade.value = '';
    notaAtividade.value = '';
}

