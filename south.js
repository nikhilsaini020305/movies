
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
    Rathnan:0,
    Pottel:0,
    Garudan:0,
    Rifle:0,
    Pani:0,
    Sorgavaasal:0,
    Bachchan:0,
    Nishabdham:0,
    Baby:0,
    Eagle:0,
    Daaku:0,
    Bhaje:0,
    Game:0,
    Pushpa:0,
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
            window.open('south.html', '_blank');
            clickCounts.South = 0;  // Reset click count for Movies
        }
    }
    if (page === 'Web') {
        if (clickCounts.Web  === 1) {
            window.open("https://www.example.com", "_blank");
        } else if (clickCounts.Web  === 2) {
            window.open('web.html', '_blank');
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
   
    if (page === 'Rathnan') {
        if (clickCounts.Rathnan === 1) {
            window.open("https://www.example.com", "_blank");
        } else if (clickCounts.Rathnan === 2) {
            window.open('Rathnan Prapancha/Rathnan Prapancha.html', '_blank');
            clickCounts.Rathnan = 0;  // Reset click count for Movies
        }
    }
    if (page === 'Pottel') {
        if (clickCounts.Pottel === 1) {
            window.open("https://www.example.com", "_blank");
        } else if (clickCounts.Pottel === 2) {
            window.open('Pottel/Pottel.html', '_blank');
            clickCounts.Pottel = 0;  // Reset click count for Movies
        }
    }
    if (page === 'Garudan') {
        if (clickCounts.Garudan === 1) {
            window.open("https://www.example.com", "_blank");
        } else if (clickCounts.Garudan === 2) {
            window.open('Garudan/Garudan.html', '_blank');
            clickCounts.Garudan = 0;  // Reset click count for Movies
        }
    }
    if (page === 'Rifle') {
        if (clickCounts.Rifle === 1) {
            window.open("https://www.example.com", "_blank");
        } else if (clickCounts.Rifle === 2) {
            window.open('Rifle Club/Rifle Club.html', '_blank');
            clickCounts.Rifle = 0;  // Reset click count for Movies
        }
    }
    if (page === 'Pani') {
        if (clickCounts.Pani === 1) {
            window.open("https://www.example.com", "_blank");
        } else if (clickCounts.Pani === 2) {
            window.open('Pani/Pani.html', '_blank');
            clickCounts.Pani = 0;  // Reset click count for Movies
        }
    }
    if (page === 'Bachchan') {
        if (clickCounts.Bachchan === 1) {
            window.open("https://www.example.com", "_blank");
        } else if (clickCounts.Bachchan === 2) {
            window.open('Mr Bachchan/Mr Bachchan.html', '_blank');
            clickCounts.Bachchan = 0;  // Reset click count for Movies
        }
    }
    if (page === 'Sorgavaasal') {
        if (clickCounts.Sorgavaasal === 1) {
            window.open("https://www.example.com", "_blank");
        } else if (clickCounts.Sorgavaasal === 2) {
            window.open('Sorgavaasal/Sorgavaasal.html', '_blank');
            clickCounts.Sorgavaasal = 0;  // Reset click count for Movies
        }
    }
    if (page === 'Nishabdham') {
        if (clickCounts.Nishabdham === 1) {
            window.open("https://www.example.com", "_blank");
        } else if (clickCounts.Nishabdham === 2) {
            window.open('Nishabdham/Nishabdham.html', '_blank');
            clickCounts.Nishabdham = 0;  // Reset click count for Movies
        }
    }
    if (page === 'Pushpa') {
        if (clickCounts.Pushpa === 1) {
            window.open("https://www.example.com", "_blank");
        } else if (clickCounts.Pushpa === 2) {
            window.open('Pushpa 2 The Rule RELOADED/Pushpa 2 The Rule RELOADED.html', '_blank');
            clickCounts.Pushpa = 0;  // Reset click count for Movies
        }
    }
    if (page === 'Bhaje') {
        if (clickCounts.Bhaje === 1) {
            window.open("https://www.example.com", "_blank");
        } else if (clickCounts.Bhaje === 2) {
            window.open('Bhaje Vaayu Vegam/Bhaje Vaayu Vegam.html', '_blank');
            clickCounts.Bhaje = 0;  // Reset click count for Movies
        }
    }
    if (page === 'Game') {
        if (clickCounts.Game === 1) {
            window.open("https://www.example.com", "_blank");
        } else if (clickCounts.Game === 2) {
            window.open('Game Changer/Game Changer.html', '_blank');
            clickCounts.Game = 0;  // Reset click count for Movies
        }
    }
    if (page === 'Daaku') {
        if (clickCounts.Daaku === 1) {
            window.open("https://www.example.com", "_blank");
        } else if (clickCounts.Daaku === 2) {
            window.open('Daaku Maharaaj/Daaku Maharaaj.html', '_blank');
            clickCounts.Daaku = 0;  // Reset click count for Movies
        }
    }
    if (page === 'Eagle') {
        if (clickCounts.Eagle === 1) {
            window.open("https://www.example.com", "_blank");
        } else if (clickCounts.Eagle === 2) {
            window.open('Eagle/Eagle.html', '_blank');
            clickCounts.Eagle = 0;  // Reset click count for Movies
        }
    }
    if (page === 'Baby') {
        if (clickCounts.Baby === 1) {
            window.open("https://www.example.com", "_blank");
        } else if (clickCounts.Baby === 2) {
            window.open('Baby/Baby.html', '_blank');
            clickCounts.Baby = 0;  // Reset click count for Movies
        }
    }
}