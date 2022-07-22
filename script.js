const sobre = document.getElementById('sobre');
const curriculo = document.getElementById('curriculo');
const certificados = document.getElementById('certificados');

const popup = document.querySelector('.popup-wrapper');
const popupContent = document.querySelector('.popup-content');
const close = document.querySelector('.close-popup');



close.addEventListener('click', () => {
    popup.style.display = 'none';
});

sobre.addEventListener('click', () => {
    fetch('./sobre.json').then(response => { return response.json(); })
        .then(jsonsobre => popupContent.innerHTML = `<h2>Resumo</h2><p>${jsonsobre.sobre.resumo}</p><hr><h2>Hobbies</h2><p>${jsonsobre.sobre.hobbies}</p>`);
    popup.style.display = 'block';
});

curriculo.addEventListener('click', () => {
    fetch('./dados.json').then(response => { return response.json(); }).then(jsondata => popupContent.innerHTML = `<h1>${jsondata.pessoal.nome}</h1><p>E-mail: ${jsondata.pessoal.email}</p><p>Telefone: ${jsondata.pessoal.telefone}</p><hr><h2>Formação</h2><p>${jsondata.formacao.for1}</p><p>${jsondata.formacao.for2}</p><p>${jsondata.formacao.for3}</p><hr><h2>Experiência</h2><h3>${jsondata.experiencia.ex1.local}</h3><p><strong>Cargo:</strong> ${jsondata.experiencia.ex1.cargo}</p><p><strong>Atividades:</strong> ${jsondata.experiencia.ex1.atividades}</p><h3>${jsondata.experiencia.ex2.local}</h3><p><strong>Cargo:</strong> ${jsondata.experiencia.ex2.cargo}</p><p><strong>Atividades:</strong> ${jsondata.experiencia.ex2.atividades}</p><h3>${jsondata.experiencia.ex3.local}</h3><p><strong>Cargo:</strong> ${jsondata.experiencia.ex3.cargo}</p><p><strong>Atividades:</strong> ${jsondata.experiencia.ex3.atividades}</p><h3>${jsondata.experiencia.ex4.local}</h3><p><strong>Cargo:</strong> ${jsondata.experiencia.ex4.cargo}</p><p><strong>Atividades:</strong> ${jsondata.experiencia.ex4.atividades}<hr></p><h2>Habilidades</h2><p><strong> ${jsondata.habilidades.hb1}</strong> </p>`);
    popup.style.display = 'block'
});

certificados.addEventListener('click', () => {

    popupContent.innerHTML = ' ';

    fetch('./certificados.json').then(response => {
        return response.json();
    }).then(jsoncertificados => {

        for (let i = 0; i < jsoncertificados.certificados.length; i++) {

            popupContent.innerHTML += `<img src="${jsoncertificados.certificados[i].cert}" alt="${jsoncertificados.certificados[i].nome}">`
        }
    }
    )
    popup.style.display = 'block';


});
