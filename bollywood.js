
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
    Ramayana:0,
    Deva:0,
    Secret:0,
    power:0,
    fateh:0,
    Storyteller:0,
    Tees:0,
    Baby:0,
    Rang:0,
    Axone:0,
    Rakht:0,
    Azaad:0,
    Hisaab:0,
    SkyForce:0,
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
    if (page === 'Ramayana') {
        if (clickCounts.Ramayana === 1) {
            window.open("https://www.example.com", "_blank");
        } else if (clickCounts.Ramayana === 2) {
            window.open('Ramayana The Legend of Prince Rama/Ramayana The Legend of Prince Rama.html', '_blank');
            clickCounts.Ramayana = 0;  // Reset click count for Movies
        }
    }
    if (page === 'Deva') {
        if (clickCounts.Deva === 1) {
            window.open("https://www.example.com", "_blank");
        } else if (clickCounts.Deva === 2) {
            window.open('Deva/Deva.html', '_blank');
            clickCounts.Deva = 0;  // Reset click count for Movies
        }
    }
    if (page === 'Secret') {
        if (clickCounts.Secret === 1) {
            window.open("https://www.example.com", "_blank");
        } else if (clickCounts.Secret === 2) {
            window.open('The Secret of the Shiledars/The Secret of the Shiledars.html', '_blank');
            clickCounts.Secret = 0;  // Reset click count for Movies
        }
    }
    if (page === 'power') {
        if (clickCounts.power === 1) {
            window.open("https://www.example.com", "_blank");
        } else if (clickCounts.power === 2) {
            window.open('powerpaanch/powerpaanch.html', '_blank');
            clickCounts.power = 0;  // Reset click count for Movies
        }
    }
    if (page === 'Storyteller') {
        if (clickCounts.Storyteller === 1) {
            window.open("https://www.example.com", "_blank");
        } else if (clickCounts.Storyteller === 2) {
            window.open('The Storyteller/The Storyteller.html', '_blank');
            clickCounts.Storyteller = 0;  // Reset click count for Movies
        }
    }
    if (page === 'fateh') {
        if (clickCounts.fateh === 1) {
            window.open("https://www.example.com", "_blank");
        } else if (clickCounts.fateh === 2) {
            window.open('fateh/fateh.html', '_blank');
            clickCounts.fateh = 0;  // Reset click count for Movies
        }
    }
    if (page === 'Tees') {
        if (clickCounts.Tees === 1) {
            window.open("https://www.example.com", "_blank");
        } else if (clickCounts.Tees === 2) {
            window.open('Tees Maar Khan/Tees Maar Khan.html', '_blank');
            clickCounts.Tees = 0;  // Reset click count for Movies
        }
    }
    if (page === 'Rang') {
        if (clickCounts.Rang === 1) {
            window.open("https://www.example.com", "_blank");
        } else if (clickCounts.Rang === 2) {
            window.open('Rang De Basanti/Rang De Basanti.html', '_blank');
            clickCounts.Rang = 0;  // Reset click count for Movies
        }
    }
    if (page === 'Baby') {
        if (clickCounts.Baby === 1) {
            window.open("https://www.example.com", "_blank");
        } else if (clickCounts.Baby === 2) {
            window.open('Baby(2015)/Baby.html', '_blank');
            clickCounts.Baby = 0;  // Reset click count for Movies
        }
    }
    if (page === 'Axone') {
        if (clickCounts.Axone === 1) {
            window.open("https://www.example.com", "_blank");
        } else if (clickCounts.Axone === 2) {
            window.open('Axone/Axone.html', '_blank');
            clickCounts.Axone = 0;  // Reset click count for Movies
        }
    } 
    if (page === 'Rakht') {
        if (clickCounts.Rakht === 1) {
            window.open("https://www.example.com", "_blank");
        } else if (clickCounts.Rakht === 2) {
            window.open('Rakht Charitra/Rakht Charitra.html', '_blank');
            clickCounts.Rakht = 0;  // Reset click count for Movies
        }
    }
    if (page === 'SkyForce') {
        if (clickCounts.SkyForce === 1) {
            window.open("https://www.example.com", "_blank");
        } else if (clickCounts.SkyForce === 2) {
            window.open('Sky Force/Sky Force.html', '_blank');
            clickCounts.SkyForce = 0;  // Reset click count for Movies
        }
    }
    if (page === 'Hisaab') {
        if (clickCounts.Hisaab === 1) {
            window.open("https://www.example.com", "_blank");
        } else if (clickCounts.Hisaab === 2) {
            window.open('Hisaab barabar/Hisaab barabar.html', '_blank');
            clickCounts.Hisaab = 0;  // Reset click count for Movies
        }
    }
    if (page === 'Azaad') {
        if (clickCounts.Azaad === 1) {
            window.open("https://www.example.com", "_blank");
        } else if (clickCounts.Azaad === 2) {
            window.open('Azaad/Azaad.html', '_blank');
            clickCounts.Azaad = 0;  // Reset click count for Movies
        }
    }
}