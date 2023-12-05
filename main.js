const form = document.querySelector('#form-atividade');
let linhas = '';


form.addEventListener('submit', function (e) {
    e.preventDefault();

    const inputNome = document.querySelector('#Nome');
    const inputtelefone = document.querySelector('#Telefone');



    let linha = "<tr>";
    linha += `<td>${inputNome.value}</td>`;
    linha += `<td>${inputtelefone.value}</td>`;
    linha += "</tr>";

    linhas += linha;

    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;

    inputNome.value = '';
    inputTelefone.value = '';
});

