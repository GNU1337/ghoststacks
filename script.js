function copyCode(code, element) {
    navigator.clipboard.writeText(code);
    const originalText = element.innerHTML;
    element.innerHTML = "COPIED!";
    setTimeout(() => { element.innerHTML = originalText; }, 2000);
}

function filterCasinos(category) {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        if (category === 'all' || card.getAttribute('data-category') === category) {
            card.style.display = 'grid';
        } else {
            card.style.display = 'none';
        }
    });
}
