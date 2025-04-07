
// chiamata axios
axios.get('https://lanciweb.github.io/demo/api/pictures/').then((resp) => {
    let data = resp.data;
    showCards(data);
})

// funzione per la creazione della card
const createCard = (data) => {
    let card = `<div class="col-md-4 d-flex justify-content-center mb-4 position-relative">
    <div class="card" style="width: 18rem;">
        <img src="${data.url}" class="card-img-top" alt="${data.title}">
        <div class="card-body pt-3">
        <p class="text-secondary">${data.date}</p>
        <h3 class="card-title">${data.title}</h5>
        </div>
        <img src="./img/pin.svg" alt="" class="pin">
    </div>
</div>`;
    return card;
}

// creo la funzione per visualizzare le card
const showCards = (data) => {
    let cards = '';
    data.forEach((items) => {
        cards += createCard(items);
    });
    document.getElementById('cards').innerHTML = cards;

}




