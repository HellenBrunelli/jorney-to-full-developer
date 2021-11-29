// Pegando os campos input do form e aslvando numa lista (array)
let campos = [
    document.querySelector('#data'),
    document.querySelector('#quantidade'),
    document.querySelector('#valor')
]
console.log(campos)

//pegando elemento tbody no DOM
let tbody = document.querySelector('table tbody')

//escutando evento de submit do form
document.querySelector('.form').addEventListener('submit', function(ev) {
    ev.preventDefault(); //prevenir evento padrao de reload qd submeter formulario

    // criando elemento tr
    let tr = document.createElement('tr');

    // inteirando os campos no array
    campos.forEach(campo => {
        //criando as td's dinamicamente
        let td = document.createElement('td');

        //adicionando o valor a td
        td.textContent= campo.value;

        //adicionando a td na tr
        tr.appendChild(td);        
    });

    //criando uma td volume
    let tdVolume = document.createElement('td');

    //adicionando valor nela
    tdVolume.textContent = campos[1].value * campos[2].value;

    //adicionando a td volume na tr
    tr.appendChild(tdVolume);

    //passando para o tbody a tr que criamos ja preenchida
    tbody.appendChild(tr);

    //limpar formulario após o submit, e definir valores padrão
    campos[0].value = '';
    campos[1].value = 1;
    campos[2].value = 0;

    campos[0].focus();
})