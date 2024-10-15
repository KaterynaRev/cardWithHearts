
const userChoices = [];
function handleCardClick(actors, ikonheartPush) {
    const pChoosed = document.getElementById('pChoosed');
    const fullName = actors.firstName && actors.lastName ? `${actors.firstName} ${actors.lastName}` : 'unknown';
    const ikonheart = document.createElement('img');
    ikonheart.classList.add('heartIkon');
    ikonheart.setAttribute('src', 'ikons/2438744.svg');
    ikonheart.setAttribute('alt', 'like');
    const spanP = document.createElement('span');
    spanP.classList.add('choiceContainer');

    ikonheartPush.onclick = function (event) {
        event.stopPropagation(); 
        if (!userChoices.includes(fullName)) {
            userChoices.push(fullName);
            if (userChoices.length === 1) {
                pChoosed.innerText = '';
            }
            spanP.innerText = `${fullName} `;
            spanP.appendChild(ikonheart);
            pChoosed.appendChild(spanP);
        }
    };

    ikonheart.onclick = function (event) {
        event.stopPropagation(); 
        const index = userChoices.indexOf(fullName);
        if (index !== -1) {
            userChoices.splice(index, 1);
            pChoosed.removeChild(spanP);
            if (userChoices.length === 0) {
                pChoosed.innerText = 'YOU CHOOSED';
            }
        }
    };
}
