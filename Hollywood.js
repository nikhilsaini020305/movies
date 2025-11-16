
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
    Conjuring:0,
    Conjuring1:0,
    Conjuring2:0,
    Red:0,
    Aquaman:0,
    Zack:0,  
    Spider:0,
    Beast:0,
    Annabelle:0,
    Annabelle1:0,
    Annabelle2:0,
    American:0,
    Bad:0,
    Count:0, 
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
    if (page === 'Conjuring') {
        if (clickCounts.Conjuring === 1) {
            window.open("https://www.example.com", "_blank");
        } else if (clickCounts.Conjuring === 2) {
            window.open('The Conjuring/The Conjuring.html', '_blank');
            clickCounts.Conjuring = 0;  // Reset click count for Movies
        }
    }

    if (page === 'Conjuring1') {
        if (clickCounts.Conjuring1 === 1) {
            window.open("https://www.example.com", "_blank");
        } else if (clickCounts.Conjuring1 === 2) {
            window.open('The Conjuring/The Conjuring 2.html', '_blank');
            clickCounts.Conjuring1 = 0;  // Reset click count for Movies
        }
    }
    if (page === 'Conjuring2') {
        if (clickCounts.Conjuring2 === 1) {
            window.open("https://www.example.com", "_blank");
        } else if (clickCounts.Conjuring2 === 2) {
            window.open('The Conjuring/The Conjuring 3.html', '_blank');
            clickCounts.Conjuring2 = 0;  // Reset click count for Movies
        }
    }
    if (page === 'Spider') {
        if (clickCounts.Spider === 1) {
            window.open("https://www.example.com", "_blank");
        } else if (clickCounts.Spider === 2) {
            window.open('Your Friendly Neighborhood Spider-Man/Your Friendly Neighborhood Spider-Man .html', '_blank');
            clickCounts.Spider = 0;  // Reset click count for Movies
        }
    }
    if (page === 'Red') {
        if (clickCounts.Red === 1) {
            window.open("https://www.example.com", "_blank");
        } else if (clickCounts.Red === 2) {
            window.open('Red Sparrow/Red Sparrow.html', '_blank');
            clickCounts.Red = 0;  // Reset click count for Movies
        }
    }
    if (page === 'Aquaman') {
        if (clickCounts.Aquaman === 1) {
            window.open("https://www.example.com", "_blank");
        } else if (clickCounts.Aquaman === 2) {
            window.open('Aquaman/Aquaman.html', '_blank');
            clickCounts.Aquaman = 0;  // Reset click count for Movies
        }
    }
    if (page === 'Zack') {
        if (clickCounts.Zack === 1) {
            window.open("https://www.example.com", "_blank");
        } else if (clickCounts.Zack === 2) {
            window.open('Zack Snyder’s Justice League/Zack Snyder’s Justice League.html', '_blank');
            clickCounts.Zack = 0;  // Reset click count for Movies
        }
    }
    if (page === 'Beast') {
        if (clickCounts.Beast === 1) {
            window.open("https://www.example.com", "_blank");
        } else if (clickCounts.Beast === 2) {
            window.open('Beast Games (Season 1)/Beast Games (Season 1).html', '_blank');
            clickCounts.Beast = 0;  // Reset click count for Movies
        }
    }
    if (page === 'Annabelle') {
        if (clickCounts.Annabelle === 1) {
            window.open("https://www.example.com", "_blank");
        } else if (clickCounts.Annabelle === 2) {
            window.open('Annabelle/Annabelle.html', '_blank');
            clickCounts.Annabelle = 0;  // Reset click count for Movies
        }
    }
    if (page === 'Annabelle1') {
        if (clickCounts.Annabelle1 === 1) {
            window.open("https://www.example.com", "_blank");
        } else if (clickCounts.Annabelle1 === 2) {
            window.open('Annabelle/AnnabelleCreation.html', '_blank');
            clickCounts.Annabelle1 = 0;  // Reset click count for Movies
        }
    }
    if (page === 'Annabelle2') {
        if (clickCounts.Annabelle2 === 1) {
            window.open("https://www.example.com", "_blank");
        } else if (clickCounts.Annabelle2 === 2) {
            window.open('Annabelle/Annabelle Comes Home.html', '_blank');
            clickCounts.Annabelle2 = 0;  // Reset click count for Movies
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
    if (page === 'Bad') {
        if (clickCounts.Bad === 1) {
            window.open("https://www.example.com", "_blank");
        } else if (clickCounts.Bad === 2) {
            window.open('Bad Genius/Bad Genius.html', '_blank');
            clickCounts.Bad = 0;  // Reset click count for Movies
        }
    }
    if (page === 'Count') {
        if (clickCounts.Count === 1) {
            window.open("https://www.example.com", "_blank");
        } else if (clickCounts.Count === 2) {
            window.open('The Count of Monte Cristo/The Count of Monte Cristo.html', '_blank');
            clickCounts.Count = 0;  // Reset click count for Movies
        }
    }
}