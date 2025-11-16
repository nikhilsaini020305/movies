
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
    see:0,
    see2:0,
    see1:0,
    Jeet:0,
    American:0,
    Unlock:0,
    Secret:0,
    Recruit:0,
    Severance:0,
    Strike:0,
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
    if (page === 'Web')  {
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
    if (page === 'see2') {
        if (clickCounts.see2 === 1) {
            window.open("https://www.example.com", "_blank");
        } else if (clickCounts.see2 === 2) {
            window.open('See/see 2.html', '_blank');
            clickCounts.see2 = 0;  // Reset click count for Movies
        }
    }

    if (page === 'see1') {
        if (clickCounts.see1 === 1) {
            window.open("https://www.example.com", "_blank");
        } else if (clickCounts.see1 === 2) {
            window.open('see/see 1.html', '_blank');
            clickCounts.see1 = 0;  // Reset click count for Movies
        }
    }
    if (page === 'see') {
        if (clickCounts.see === 1) {
            window.open("https://www.example.com", "_blank");
        } else if (clickCounts.see === 2) {
            window.open('See/See.html', '_blank');
            clickCounts.see = 0;  // Reset click count for Movies
        }
    }
    if (page === 'Jeet') {
        if (clickCounts.Jeet === 1) {
            window.open("https://www.example.com", "_blank");
        } else if (clickCounts.Jeet === 2) {
            window.open('Jeet Ki Zid/Jeet Ki Zid.html', '_blank');
            clickCounts.Jeet = 0;  // Reset click count for Movies
        }
    }
    if (page === 'Unlock') {
        if (clickCounts.Unlock === 1) {
            window.open("https://www.example.com", "_blank");
        } else if (clickCounts.Unlock === 2) {
            window.open('Unlock My Boss/Unlock My Boss.html', '_blank');
            clickCounts.Unlock = 0;  // Reset click count for Movies
        }
    }
    if (page === 'American') {
        if (clickCounts.American === 1) {
            window.open("https://www.example.com", "_blank");
        } else if (clickCounts.American === 2) {
            window.open('American Manhunt O.J. Simpson/American Manhunt O.J. Simpson.html', '_blank');
            clickCounts.American = 0;  // Reset click count for Movies
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
    if (page === 'Severance') {
        if (clickCounts.Severance === 1) {
            window.open("https://www.example.com", "_blank");
        } else if (clickCounts.Severance === 2) {
            window.open('Severance/Severance.html', '_blank');
            clickCounts.Severance = 0;  // Reset click count for Movies
        }
    }
    if (page === 'Recruit') {
        if (clickCounts.Recruit === 1) {
            window.open("https://www.example.com", "_blank");
        } else if (clickCounts.Recruit === 2) {
            window.open('The Recruit/The Recruit.html', '_blank');
            clickCounts.Recruit = 0;  // Reset click count for Movies
        }
    }
    if (page === 'Strike') {
        if (clickCounts.Strike === 1) {
            window.open("https://www.example.com", "_blank");
        } else if (clickCounts.Strike === 2) {
            window.open('C.B. Strike The Ink Black Heart/C.B. Strike The Ink Black Heart.html', '_blank');
            clickCounts.Strike = 0;  // Reset click count for Movies
        }
    }
}