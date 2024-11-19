document.addEventListener('DOMContentLoaded', () => {
    // Update the time every second
    const updateTime = () => {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        document.getElementById('time').textContent = `Time: ${hours}:${minutes}:${seconds}`;
    };
    setInterval(updateTime, 1000);
    updateTime();

    // Fetch weather data
    const fetchWeather = async () => {
        const apiKey = 'a153001688bf11fc5414657944da58b2';
        const url = `https://api.openweathermap.org/data/2.5/weather?q=London&units=imperial&appid=${apiKey}`;

        try {
            const response = await fetch(url);
            if (!response.ok) throw new Error('Network response was not ok');
            const data = await response.json();
            const { temp } = data.main;
            const { description } = data.weather[0];
            document.getElementById('weather').textContent = `Weather: ${temp}°F, ${description}`;
        } catch (error) {
            console.error('Error fetching weather data:', error);
            document.getElementById('weather').textContent = 'Unable to fetch weather data';
        }
    };
    fetchWeather();

    // Handle search form submission
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
});
