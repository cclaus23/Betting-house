import { getBets, saveBets } from '../data/localStorage.js';

document.addEventListener('DOMContentLoaded', () => {
    const bets = getBets();
    const adminContainer = document.getElementById('admin-container');

    renderAdminBets(bets, adminContainer);

    document.getElementById('clear-bets-btn').addEventListener('click', () => {
        if (confirm('Are you sure you want to clear all bets?')) {
            saveBets([]);
            renderAdminBets([], adminContainer);
        }
    });
});

function renderAdminBets(bets, container) {
    container.innerHTML = '';
    if (bets.length === 0) {
        container.innerHTML = '<p>No bets available.</p>';
        return;
    }

    bets.forEach(bet => {
        const betRow = document.createElement('div');
        betRow.className = 'admin-bet-row';
        betRow.innerHTML = `
            <p>${bet.title}</p>
            <button onclick="endBet('${bet.id}')">End Bet</button>
        `;
        container.appendChild(betRow);
    });
}

function endBet(betId) {
    const bets = getBets();
    const index = bets.findIndex(bet => bet.id === betId);

    if (index !== -1) {
        bets.splice(index, 1);
        saveBets(bets);
        renderAdminBets(bets, document.getElementById('admin-container'));
    }
}
