document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const searchInput = document.getElementById('searchInput').value.trim();
    if (searchInput) {
        const googleSearchUrl = `https://www.google.com/search?q=${encodeURIComponent(searchInput)}`;
        window.open(googleSearchUrl, '_blank');
    } else {
        alert('Please enter a search term.');
    }
});
