
function createArticle(actors) {
    const cardContainer = document.createElement('article');
    cardContainer.classList.add('card-container');

    const ikonheartPush = document.createElement('img');
    ikonheartPush.classList.add('heartIkonPush');
    ikonheartPush.setAttribute('src', 'ikons/2438744.svg');
    ikonheartPush.setAttribute('alt', 'like');

    cardContainer.appendChild(ikonheartPush);
    handleCardClick(actors, ikonheartPush);
   
    return cardContainer;
}

