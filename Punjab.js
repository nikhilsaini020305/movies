
const clickCounts = {
    movies: 0,
    movies1: 0,
    Home: 0,
    Hollywood:0,
    Bollywood:0,
    Punjab:0,
    South :0,
    Web :0,
    GENREs:0,
    More:0,
    PaataLokS02:0,
}


// Function to handle clicks on Movies, Song, Game, and End
function handleClick(page) {
    clickCounts[page]++;

    // Get the page content to display
    const pageContent = document.getElementById(`${page}-page`);
    if (page === 'Home') {
        if (clickCounts.Home === 1) {
            window.open("https://www.example.com", "_blank");
        } else if (clickCounts.Home === 2) {
            window.open('index.html', '_blank');
            clickCounts.Home = 0;  // Reset click count for Movies
        }
    }
    if (page === 'Hollywood') {
        if (clickCounts.Hollywood === 1) {
            window.open("https://www.example.com", "_blank");
        } else if (clickCounts.Hollywood === 2) {
            window.open('hollywood.html', '_blank');
            clickCounts.Hollywood = 0;  // Reset click count for Movies
        }
    }
    if (page === 'Bollywood') {
        if (clickCounts.Bollywood === 1) {
            window.open("https://www.example.com", "_blank");
        } else if (clickCounts.Bollywood === 2) {
            window.open('bollywood.html', '_blank');
            clickCounts.Bollywood = 0;  // Reset click count for Movies
        }
    }
    if (page === 'Punjab') {
        if (clickCounts.Punjab === 1) {
            window.open("https://www.example.com", "_blank");
        } else if (clickCounts.Punjab === 2) {
            window.open('Punjab.html', '_blank');
            clickCounts.Punjab = 0;  // Reset click count for Movies
        }
    }
    if (page === 'South') {
        if (clickCounts.South === 1) {
            window.open("https://www.example.com", "_blank");
        } else if (clickCounts.South === 2) {
            window.open('movies.html', '_blank');
            clickCounts.South = 0;  // Reset click count for Movies
        }
    }
    if (page === 'Web') {
        if (clickCounts.Web  === 1) {
            window.open("https://www.example.com", "_blank");
        } else if (clickCounts.Web  === 2) {
            window.open('movies.html', '_blank');
            clickCounts.Web = 0;  // Reset click count for Movies
        }
    }
    if (page === 'GENREs') {
        if (clickCounts.GENREs === 1) {
            window.open("https://www.example.com", "_blank");
        } else if (clickCounts.GENREs === 2) {
            window.open('movies.html', '_blank');
            clickCounts.GENREs = 0;  // Reset click count for Movies
        }
    }
    if (page === 'More') {
        if (clickCounts.More === 1) {
            window.open("https://www.example.com", "_blank");
        } else if (clickCounts.More === 2) {
            window.open('movies.html', '_blank');
            clickCounts.More = 0;  // Reset click count for Movies
        }
    }
  
    if (page === 'movies') {
        if (clickCounts.movies === 1) {
            window.open("https://www.example.com", "_blank");
        } else if (clickCounts.movies === 2) {
            window.open('movies.html', '_blank');
            clickCounts.movies = 0;  // Reset click count for Movies
        }
    }

    if (page === 'movies1') {
        if (clickCounts.movies1 === 1) {
            window.open("https://www.example.com", "_blank");
        } else if (clickCounts.movies1 === 2) {
            window.open('movies.html', '_blank');
            clickCounts.movies1 = 0;  // Reset click count for Movies
        }
    }
    if (page === 'PaataLokS02') {
        if (clickCounts.PaataLokS02 === 1) {
            window.open("https://www.example.com", "_blank");
        } else if (clickCounts.PaataLokS02 === 2) {
            window.open('PaatalLok.html', '_blank');
            clickCounts.PaataLokS02 = 0;  // Reset click count for Movies
        }
    }
}