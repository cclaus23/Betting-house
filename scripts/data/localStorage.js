export function getBets() {
    return JSON.parse(localStorage.getItem('bets')) || [];
}

export function saveBets(bets) {
    localStorage.setItem('bets', JSON.stringify(bets));
}
