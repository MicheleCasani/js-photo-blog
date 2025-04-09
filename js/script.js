let data = [];
// chiamata axios
axios.get('https://lanciweb.github.io/demo/api/pictures/').then((resp) => {
    data = resp.data;
    showCards(data);
});

// funzione per la creazione della card
const createCard = (element) => {
    let card = `<div class="col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center mb-5 position-relative">
    <div class="card" style="width: 18rem;">
            <img src="${element.url}" class="card-img-top" alt="${element.title}">
        <div class="card-body pt-3">
        <p class="text-secondary">${element.date}</p>
        <h3 class="card-title">${element.title}</h5>
        </div>
        <img src="./img/pin.svg" alt="" class="pin">
    </div>
</div>`;
    return card;
}

// creo la funzione per visualizzare le card
const showCards = (array) => {
    let cards = '';
    array.forEach((items) => {
        cards += createCard(items);
    });
    document.getElementById('cards').innerHTML = cards;
}



// richiamo gli elememnìti dal DOM
let cards = document.getElementById('cards');
let overlay = document.getElementById('overlay');
let buttonClose = document.getElementById('button-close');

// creo la funzione per visualizzare l'immagine nell'overlay
const showOverlay = (element) => {
    let imgOverlay = document.getElementById('overlay-img');
    imgOverlay.innerHTML = `<img src="${element.url}" class = "rounded">`
}

// aggiungo l'evento al click della card che fa apparire l'overlay
cards.addEventListener('click', (e) => {
    let img = e.target.src;
    let imgUrl = data.find(function(item) {
        return item.url === img;
    });
    overlay.classList.remove('d-none');
    showOverlay(imgUrl);
});




// aggiungo l'evento del bottone dell'overlay, che una volta cliccato chiude l'overlay
buttonClose.addEventListener('click', (e) => {
    overlay.classList.add('d-none');
});


