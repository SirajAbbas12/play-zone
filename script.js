document.getElementById('gameSearch').addEventListener('input', function(e) {
    const searchTerm = e.target.value.toLowerCase();
    const gameCards = document.querySelectorAll('.game-card');

    gameCards.forEach(card => {
        const title = card.querySelector('h3').textContent.toLowerCase();
        const desc = card.querySelector('p').textContent.toLowerCase();
        
        if (title.includes(searchTerm) || desc.includes(searchTerm)) {
            card.style.display = 'flex';
        } else {
            card.style.display = 'none';
        }
    });
});

document.querySelectorAll('.play-now-btn, .cta-btn').forEach(button => {
    button.addEventListener('click', () => {
        alert("Siraj Sar, game engine module jaldi hi load hoga! Platform structure successfully ready hai.");
    });
});
