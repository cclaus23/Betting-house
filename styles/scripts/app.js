// Import localStorage handlers
import { getBets, saveBets } from '../data/localStorage.js';

document.addEventListener('DOMContentLoaded', () => {
    const createBetBtn = document.getElementById('create-bet-btn');
    const betsContainer = document.getElementById('bets-container');

    // Load bets on page load
    const bets = getBets();
    renderBets(bets, betsContainer);

    // Add event listener to create bet button
    createBetBtn.addEventListener('click', () => {
        const title = prompt('Enter the bet title:');
        const creator = prompt('Enter your name:');

        if (title && creator) {
            const newBet = {
                id: `bet-${Date.now()}`,
                title,
                creator,
                bets: [],
            };
            bets.push(newBet);
            saveBets(bets);
            renderBets(bets, betsContainer);
            alert('New bet created successfully!');
        } else {
            alert('Failed to create a bet. All fields are required.');
        }
    });
});

// Render bets
function renderBets(bets, container) {
    container.innerHTML = '';
    bets.forEach(bet => {
        const betCard = document.createElement('div');
        betCard.className = 'bet-card';
        betCard.innerHTML = `
            <h3>${bet.title}</h3>
            <p>Created by: ${bet.creator}</p>
            <button onclick="placeBet('${bet.id}')">Place Bet</button>
        `;
        container.appendChild(betCard);
    });
}

// Redirect to admin portal
function openAdminPortal() {
    window.location.href = 'admin.html';
}
