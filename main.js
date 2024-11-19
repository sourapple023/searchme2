document.addEventListener('DOMContentLoaded', () => {
    const updateTime = () => {
        const timeElement = document.getElementById('time');
        if (timeElement) {
            timeElement.innerHTML = `<strong>Current Time:</strong> ${new Date().toLocaleTimeString()}`;
        }
    };
    setInterval(updateTime, 1000);
    updateTime();

    const fetchWeather = async (lat, lon) => {
        const apiKey = 'a153001688bf11fc5414657944da58b2';
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`;

        try {
            const response = await fetch(url);
            if (!response.ok) throw new Error('Network response was not ok');
            const data = await response.json();
            const { temp } = data.main;
            const { description } = data.weather[0];
            const location = `${data.name}`;

            document.getElementById('weather').innerHTML = `
                <strong>Weather in ${location}:</strong> ${temp}°F, ${description}
            `;
        } catch (error) {
            console.error('Error fetching weather data:', error);
            document.getElementById('weather').innerHTML = '<strong>Unable to fetch weather data.</strong>';
        }
    };

    const getLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                position => fetchWeather(position.coords.latitude, position.coords.longitude),
                error => {
                    console.error('Error getting location:', error);
                    document.getElementById('weather').innerHTML = '<strong>Unable to retrieve location.</strong>';
                }
            );
        } else {
            document.getElementById('weather').innerHTML = '<strong>Geolocation is not supported by this browser.</strong>';
        }
    };

    getLocation();
});

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
