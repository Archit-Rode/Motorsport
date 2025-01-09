// document.addEventListener("DOMContentLoaded", function () {
//     const toggleButton = document.createElement('button');
//     toggleButton.textContent = "Toggle Dark Mode";
//     toggleButton.classList.add('button', 'dark-mode-toggle'); // Use your existing button styles
//     document.body.insertBefore(toggleButton, document.body.firstChild); // Insert the button at the top

//     const body = document.body;

//     // Check for saved mode in localStorage and apply it
//     if (localStorage.getItem("darkMode") === "enabled") {
//         body.classList.add("dark-mode");
//         toggleButton.textContent = "Switch to Light Mode";
//     }

//     // Event listener for toggle button
//     toggleButton.addEventListener("click", function () {
//         if (body.classList.contains("dark-mode")) {
//             body.classList.remove("dark-mode");
//             localStorage.setItem("darkMode", "disabled");
//             toggleButton.textContent = "Switch to Dark Mode";
//         } else {
//             body.classList.add("dark-mode");
//             localStorage.setItem("darkMode", "enabled");
//             toggleButton.textContent = "Switch to Light Mode";
//         }
//     });
//     fetchMotorsportNews();
// });
// const apiKey = '103d3ade411d4d6e968077e3257352bd'; // Replace with your NewsAPI key
// const newsContainer = document.getElementById('news-container');

// async function fetchMotorsportNews() {
//     try {
//         const response = await fetch(`https://newsapi.org/v2/everything?q=Formula 1 Nascar&language=en&pageSize=5&apiKey=${apiKey}`);
//         const data = await response.json();
//         displayNews(data.articles);
//     } catch (error) {
//         newsContainer.innerHTML = "<p>Failed to fetch news.</p>";
//     }
// }

// function displayNews(articles) {
//     newsContainer.innerHTML = '';
//     articles.forEach(article => {
//         const articleElement = document.createElement('div');
//         articleElement.classList.add('article');

//         articleElement.innerHTML = `
//                 <h3>${article.title}</h3>
//                 <p>${article.description}</p>
//                 <a href="${article.url}" target="_blank">Read more</a>
//             `;
//         newsContainer.appendChild(articleElement);
//     });
// }

document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.createElement('button');
    toggleButton.textContent = "Toggle Dark Mode";
    toggleButton.classList.add('button', 'dark-mode-toggle'); // Use your existing button styles
    document.body.insertBefore(toggleButton, document.body.firstChild); // Insert the button at the top

    const body = document.body;

    // Check for saved mode in localStorage and apply it
    if (localStorage.getItem("darkMode") === "enabled") {
        body.classList.add("dark-mode");
        toggleButton.textContent = "Switch to Light Mode";
    }

    // Event listener for toggle button
    toggleButton.addEventListener("click", function () {
        if (body.classList.contains("dark-mode")) {
            body.classList.remove("dark-mode");
            localStorage.setItem("darkMode", "disabled");
            toggleButton.textContent = "Switch to Dark Mode";
        } else {
            body.classList.add("dark-mode");
            localStorage.setItem("darkMode", "enabled");
            toggleButton.textContent = "Switch to Light Mode";
        }
    });

    // Fetch and display news
    fetchMotorsportNews();
});

const apiKey = '103d3ade411d4d6e968077e3257352bd'; // Replace with your NewsAPI key
const newsContainer = document.getElementById('news-container');

// Function to fetch motorsport news
async function fetchMotorsportNews() {
    try {
        // const response = await fetch('https://site.api.espn.com/apis/site/v2/sports/racing/f1/news');
        const response = await fetch(`https://newsapi.org/v2/everything?q=Formula 1 Nascar&language=en&pageSize=5&apiKey=${apiKey}`);
        const data = await response.json();

        if (response.ok) {
            // Clear any existing news first
            newsContainer.innerHTML = '';
            // Check if there are any articles
            if (data.articles && data.articles.length > 0) {
                displayNews(data.articles);
            } else {
                newsContainer.innerHTML = "<p>No news articles found.</p>";
            }
        } else {
            newsContainer.innerHTML = `<p>Error: ${data.message}</p>`;
        }
    } catch (error) {
        newsContainer.innerHTML = "<p>Failed to fetch news. Please try again later.</p>";
    }
}

// Function to display news articles
function displayNews(articles) {
    newsContainer.innerHTML = ''; // Clear existing news
    articles.forEach(article => {
        const articleElement = document.createElement('div');
        articleElement.classList.add('article');
        articleElement.innerHTML = `
            <h3>${article.title}</h3>
            <p>${article.description || 'No description available.'}</p>
            <a href="${article.url}" target="_blank">Read more</a>
        `;
        newsContainer.appendChild(articleElement);
    });
}
