const infoCards = document.querySelectorAll('.info_card-description');

infoCards.forEach(card => {
    if (card.id !== 'web') {
        card.style.display = 'none';
    }
});

document.querySelector('[data-target="web"]').classList.add('active');

const infoLinks = document.querySelectorAll('.info_link'); 

infoLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); 

        const target = this.getAttribute('data-target'); 

        infoCards.forEach(card => {
            if (card.id === target) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});