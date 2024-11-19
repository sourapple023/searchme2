document.getElementById('searchForm').addEventListener('submit', function(event) {
    const searchInput = document.getElementById('searchInput').value.trim();
    if (!searchInput) {
        event.preventDefault();
        alert('Please enter a search term.');
    }
});
