let cards = document.querySelectorAll('.cat_card');

for (let card of cards) {
    let cardId = card.id;
    let possibleTextOptions = ['Печень утки разварная с артишоками.', 'Головы щучьи с чесноком да свежайшая сёмгушка.', 'Филе из цыплят с трюфелями в бульоне.']
    let disabledText = ['Печалька, с фуа-гра закончился.', 'Печалька, с рыбой закончился.', 'Печалька, с курой закончился.']
    let informationBlock = card.querySelector('.information_block');
    let bottomCardText = card.querySelector('.bottom_card_text');


    const isDisabled = function () {
        if (informationBlock.classList.contains('disabled')) {
            bottomCardText.textContent = disabledText[cardId]
            bottomCardText.style.color = '#ffff66';
        }
    }

    isDisabled()


    informationBlock.onclick = function () {
        if (informationBlock.classList.contains('disabled'))
            return;
        else {
            toggleCard()
        }
    }

    const toggleCard = function () {
        informationBlock.classList.toggle('active');
        if (informationBlock.classList.contains('active')) {
            bottomCardText.textContent = possibleTextOptions[cardId]
        } else {
            bottomCardText.textContent = 'Не стоит откладывать покупку на потом "Мяу"'
        }
    }

}
