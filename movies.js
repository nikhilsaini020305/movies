
const clickCounts = {
    Home: 0,
    Hollywood:0,
    Bollywood:0,
    Punjab:0,
    South :0,
    Web :0,
    GENREs:0,
    More:0,
    Tabaah:0,
    Eagle:0,
    SkyForce:0,
    didi:0,
    sakamoto:0,
    fateh:0,
    power:0,
    Daaku:0,
    Twilight:0,
    Game:0,
    pitt:0,
    sonic:0,
    Bhaje:0,
    Butcher:0,
    Hisaab:0,
    Night:0,
    Moana2:0,
    Chaal:0,
    Pushpa:0,
    Beast:0,
    Azaad:0,
    Emergency:0,
    Marco:0,
    Killer:0,
    Baby:0,
    Spider:0,
    Storyteller:0,
    Conjuring:0,
    Zack:0,
    Den:0,
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
    if (page === 'Tabaah') {
        if (clickCounts.Tabaah === 1) {
            window.open("https://www.example.com", "_blank");
        } else if (clickCounts.Tabaah === 2) {
            window.open('Thandel/Thandel.html', '_blank');
            clickCounts.Tabaah = 0;  // Reset click count for Movies
        }
    }
    if (page === 'Eagle') {
        if (clickCounts.Eagle === 1) {
            window.open("https://www.example.com", "_blank");
        } else if (clickCounts.Eagle === 2) {
            window.open('Badass RaviKumar/Badass RaviKumar.html', '_blank');
            clickCounts.Eagle = 0;  // Reset click count for Movies
        }
    }
    if (page === 'SkyForce') {
        if (clickCounts.SkyForce === 1) {
            window.open("https://www.example.com", "_blank");
        } else if (clickCounts.SkyForce === 2) {
            window.open('Loveyapa/Loveyapa.html', '_blank');
            clickCounts.SkyForce = 0;  // Reset click count for Movies
        }
    }
    if (page === 'didi') {
        if (clickCounts.didi === 1) {
            window.open("https://www.example.com", "_blank");
        } else if (clickCounts.didi === 2) {
            window.open('didi/didi.html', '_blank');
            clickCounts.didi = 0;  // Reset click count for Movies
        }
    }
    if (page === 'sakamoto') {
        if (clickCounts.sakamoto === 1) {
            window.open("https://www.example.com", "_blank");
        } else if (clickCounts.sakamoto === 2) {
            window.open('sakamoto/sakamoto.html', '_blank');
            clickCounts.sakamoto = 0;  // Reset click count for Movies
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
    if (page === 'power') {
        if (clickCounts.power === 1) {
            window.open("https://www.example.com", "_blank");
        } else if (clickCounts.power === 2) {
            window.open('powerpaanch/powerpaanch.html', '_blank');
            clickCounts.power = 0;  // Reset click count for Movies
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
    if (page === 'Twilight') {
        if (clickCounts.Twilight === 1) {
            window.open("https://www.example.com", "_blank");
        } else if (clickCounts.Twilight === 2) {
            window.open('Twilight of the Warriors Walled/Twilight of the Warriors Walled in.html', '_blank');
            clickCounts.Twilight = 0;  // Reset click count for Movies
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
    if (page === 'pitt') {
        if (clickCounts.pitt === 1) {
            window.open("https://www.example.com", "_blank");
        } else if (clickCounts.pitt === 2) {
            window.open('pitt/pitt.html', '_blank');
            clickCounts.pitt = 0;  // Reset click count for Movies
        }
    }
    if (page === 'sonic') {
        if (clickCounts.sonic === 1) {
            window.open("https://www.example.com", "_blank");
        } else if (clickCounts.sonic === 2) {
            window.open('sonic/sonic.html', '_blank');
            clickCounts.sonic = 0;  // Reset click count for Movies
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
    if (page === 'Butcher') {
        if (clickCounts.Butcher === 1) {
            window.open("https://www.example.com", "_blank");
        } else if (clickCounts.Butcher === 2) {
            window.open('Butcher’s Crossing/Butcher’s Crossing.html', '_blank');
            clickCounts.Butcher = 0;  // Reset click count for Movies
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
    if (page === 'Night') {
        if (clickCounts.Night === 1) {
            window.open("https://www.example.com", "_blank");
        } else if (clickCounts.Night === 2) {
            window.open('The Night Agent/The Night Agent.html', '_blank');
            clickCounts.Night = 0;  // Reset click count for Movies
        }
    }
    if (page === 'Moana2') {
        if (clickCounts.Moana2 === 1) {
            window.open("https://www.example.com", "_blank");
        } else if (clickCounts.Moana2 === 2) {
            window.open('Moana 2/Moana2.html', '_blank');
            clickCounts.Moana2 = 0;  // Reset click count for Movies
        }
    }
    if (page === 'Chaal') {
        if (clickCounts.Chaal === 1) {
            window.open("https://www.example.com", "_blank");
        } else if (clickCounts.Chaal === 2) {
            window.open('Chaal Jeevi Laiye/Chaal Jeevi Laiye.html', '_blank');
            clickCounts.Chaal = 0;  // Reset click count for Movies
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
    if (page === 'Beast') {
        if (clickCounts.Beast === 1) {
            window.open("https://www.example.com", "_blank");
        } else if (clickCounts.Beast === 2) {
            window.open('Beast Games (Season 1)/Beast Games (Season 1).html', '_blank');
            clickCounts.Beast = 0;  // Reset click count for Movies
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
    if (page === 'Emergency') {
        if (clickCounts.Emergency === 1) {
            window.open("https://www.example.com", "_blank");
        } else if (clickCounts.Emergency === 2) {
            window.open('Emergency/Emergency.html', '_blank');
            clickCounts.Emergency = 0;  // Reset click count for Movies
        }
    }
    if (page === 'Marco') {
        if (clickCounts.Marco === 1) {
            window.open("https://www.example.com", "_blank");
        } else if (clickCounts.Marco === 2) {
            window.open('Razakar/Razakar.html', '_blank');
            clickCounts.Marco = 0;  // Reset click count for Movies
        }
    }
    if (page === 'Killer') {
        if (clickCounts.Killer === 1) {
            window.open("https://www.example.com", "_blank");
        } else if (clickCounts.Killer === 2) {
            window.open('The Killer’s Game/The Killer’s Game.html', '_blank');
            clickCounts.Killer = 0;  // Reset click count for Movies
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
    if (page === 'Spider') {
        if (clickCounts.Spider === 1) {
            window.open("https://www.example.com", "_blank");
        } else if (clickCounts.Spider === 2) {
            window.open('Your Friendly Neighborhood Spider-Man/Your Friendly Neighborhood Spider-Man .html', '_blank');
            clickCounts.Spider = 0;  // Reset click count for Movies
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
    if (page === 'Conjuring') {
        if (clickCounts.Conjuring === 1) {
            window.open("https://www.example.com", "_blank");
        } else if (clickCounts.Conjuring === 2) {
            window.open('The Conjuring/The Conjuring.html', '_blank');
            clickCounts.Conjuring = 0;  // Reset click count for Movies
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
    if (page === 'Den') {
        if (clickCounts.Den === 1) {
            window.open("https://www.example.com", "_blank");
        } else if (clickCounts.Den === 2) {
            window.open('Devaki Nandana Vasudeva/Devaki Nandan Vasu Deva.html', '_blank');
            clickCounts.Den = 0;  // Reset click count for Movies
        }
    }
 
}

function toggleMenu() {
    const nav = document.getElementById('content');
    nav.classList.toggle('show');
  }

