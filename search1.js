const users = [
    { name: "marco", image: "1.jpg", link: "../Marco/marco .html?name=Alice Brown&image=https://via.placeholder.com/150" },
    { name: "American Manhunt O.J. Simpson", image: "https://via.placeholder.com/150", link: "../American Manhunt O.J. Simpson/American Manhunt O.J. Simpson .html?name=Jane Smith&image=https://via.placeholder.com/150" },
    { name: "Annabelle Comes Home", image: "https://via.placeholder.com/150", link: "../Annabelle/Annabelle .html?name=Alice Brown&image=https://via.placeholder.com/150" },
    { name: "Annabelle", image: "https://via.placeholder.com/150", link: "../Annabelle/Annabelle .html?name=Alice Brown&image=https://via.placeholder.com/150" },
    { name: "Axone", image: "https://via.placeholder.com/150", link: "../Axone/Axone .html?name=Alice Brown&image=https://via.placeholder.com/150" },
    { name: "AnnabelleCreation", image: "https://via.placeholder.com/150", link: "../Annabelle/Annabelle .html?name=Alice Brown&image=https://via.placeholder.com/150" },
    { name: "Aquaman", image: "https://via.placeholder.com/150", link: "../Aquaman/Aquaman .html?name=Alice Brown&image=https://via.placeholder.com/150" },
    { name: "Azaad", image: "https://via.placeholder.com/150", link: "../Azaad/Azaad .html?name=Alice Brown&image=https://via.placeholder.com/150" },
    { name: "Baby jphn", image: "https://via.placeholder.com/150", link: "../Baby/Baby .html?name=Alice Brown&image=https://via.placeholder.com/150" },
    { name: "Baby", image: "https://via.placeholder.com/150", link: "../Baby/Baby .html?name=Alice Brown&image=https://via.placeholder.com/150" },
    { name: "Bad Genius", image: "https://via.placeholder.com/150", link: "../Bad Genius/Bad Genius .html?name=Alice Brown&image=https://via.placeholder.com/150" },
    { name: "Badass RaviKumar", image: "https://via.placeholder.com/150", link: "../Badass RaviKumar/Badass RaviKumar .html?name=Alice Brown&image=https://via.placeholder.com/150" },
    { name: "Beast Games", image: "https://via.placeholder.com/150", link: "../Beast Games (Season 1)/Beast Games .html?name=Alice Brown&image=https://via.placeholder.com/150" },
    { name: "Bhaje Vaayu Vegam", image: "https://via.placeholder.com/150", link: "../Bhaje Vaayu Vegam/Bhaje Vaayu Vegam .html?name=Alice Brown&image=https://via.placeholder.com/150" },
    { name: "Butcher’s Crossing", image: "https://via.placeholder.com/150", link: "../Butcher’s Crossing/Butcher’s Crossing .html?name=Alice Brown&image=https://via.placeholder.com/150" },
    { name: "C.B. Strike The Ink Black Heart", image: "https://via.placeholder.com/150", link: "../C.B. Strike The Ink Black Heart/C.B. Strike The Ink Black Heart .html?name=Alice Brown&image=https://via.placeholder.com/150" },
    { name: "Chaal Jeevi Laiye", image: "https://via.placeholder.com/150", link: "../Chaal Jeevi Laiye/Chaal Jeevi Laiye .html?name=Alice Brown&image=https://via.placeholder.com/150" },
    { name: "Daaku Maharaaj", image: "https://via.placeholder.com/150", link: "../Daaku Maharaaj/Daaku Maharaaj .html?name=Alice Brown&image=https://via.placeholder.com/150" },
    { name: "Den of Thieves 2 Pantera", image: "https://via.placeholder.com/150", link: "../Den of Thieves 2 Pantera/Den of Thieves .html?name=Alice Brown&image=https://via.placeholder.com/150" },
    { name: "Deva", image: "https://via.placeholder.com/150", link: "../Deva/Deva .html?name=Alice Brown&image=https://via.placeholder.com/150" },
    { name: "Devaki Nandan Vasu Deva", image: "https://via.placeholder.com/150", link: "../Devaki Nandana Vasudeva/Devaki Nandan Vasu Deva .html?name=Alice Brown&image=https://via.placeholder.com/150" },
    { name: "Emergency", image: "https://via.placeholder.com/150", link: "../Emergency/Emergency .html?name=Alice Brown&image=https://via.placeholder.com/150" },
    { name: "Game Changer", image: "https://via.placeholder.com/150", link: "../Game Changer/Game Changer .html?name=Alice Brown&image=https://via.placeholder.com/150" },
    { name: "Garudan", image: "https://via.placeholder.com/150", link: "../Garudan/Garudan .html?name=Alice Brown&image=https://via.placeholder.com/150" },
    { name: "Hisaab Barabar", image: "https://via.placeholder.com/150", link: "../Hisaab Barabar/Hisaab Barabar .html?name=Alice Brown&image=https://via.placeholder.com/150" },
    { name: "Jeet Ki Zid", image: "https://via.placeholder.com/150", link: "../Jeet Ki Zid/Jeet Ki Zid .html?name=Alice Brown&image=https://via.placeholder.com/150" },
    { name: "Kanguva", image: "https://via.placeholder.com/150", link: "../Kanguva/Kanguva .html?name=Alice Brown&image=https://via.placeholder.com/150" },
    { name: "Kobali", image: "https://via.placeholder.com/150", link: "../Kobali/Kobali .html?name=Alice Brown&image=https://via.placeholder.com/150" },
    { name: "Loveyapa", image: "https://via.placeholder.com/150", link: "../Loveyapa/Loveyapa .html?name=Alice Brown&image=https://via.placeholder.com/150" },
    { name: "Moana2", image: "https://via.placeholder.com/150", link: "../Moana 2/Moana2 .html?name=Alice Brown&image=https://via.placeholder.com/150" },
    { name: "Mr Bachchan", image: "https://via.placeholder.com/150", link: "../Mr Bachchan/Mr Bachchan .html?name=Alice Brown&image=https://via.placeholder.com/150" },
    { name: "Nishabdham", image: "https://via.placeholder.com/150", link: "../Nishabdham/Nishabdham .html?name=Alice Brown&image=https://via.placeholder.com/150" },
    { name: "Pani", image: "https://via.placeholder.com/150", link: "../Pani/Pani .html?name=Alice Brown&image=https://via.placeholder.com/150" },
    { name: "Pitt", image: "https://via.placeholder.com/150", link: "../Pitt/Pitt .html?name=Alice Brown&image=https://via.placeholder.com/150" },
    { name: "Pottel", image: "https://via.placeholder.com/150", link: "../Pottel/Pottel .html?name=Alice Brown&image=https://via.placeholder.com/150" },
    { name: "Pushpa 2 The Rule RELOADED", image: "https://via.placeholder.com/150", link: "../Pushpa 2 The Rule RELOADED/Pushpa 2 The Rule RELOADED .html?name=Alice Brown&image=https://via.placeholder.com/150" },
    { name: "Ramayana The Legend of Prince Rama", image: "https://via.placeholder.com/150", link: "../Ramayana The Legend of Prince Rama/Ramayana The Legend of Prince Rama .html?name=Alice Brown&image=https://via.placeholder.com/150" },
    { name: "Rang De Basanti", image: "https://via.placeholder.com/150", link: "../Rang De Basanti/Rang De Basanti .html?name=Alice Brown&image=https://via.placeholder.com/150" },
    { name: "Rathnan Prapancha", image: "https://via.placeholder.com/150", link: "../Rathnan Prapancha/Rathnan Prapancha .html?name=Alice Brown&image=https://via.placeholder.com/150" },
    { name: "Razakar", image: "https://via.placeholder.com/150", link: "../Razakar/Razakar .html?name=Alice Brown&image=https://via.placeholder.com/150" },
    { name: "Red Sparrow", image: "https://via.placeholder.com/150", link: "../Red Sparrow/Red Sparrow .html?name=Alice Brown&image=https://via.placeholder.com/150" },
    { name: "Rifle Club", image: "https://via.placeholder.com/150", link: "../Rifle Club/Rifle Club .html?name=Alice Brown&image=https://via.placeholder.com/150" },
    { name: "SAKAMOTO", image: "https://via.placeholder.com/150", link: "../SAKAMOTO/SAKAMOTO .html?name=Alice Brown&image=https://via.placeholder.com/150" },
    { name: "See", image: "https://via.placeholder.com/150", link: "../See/See .html?name=Alice Brown&image=https://via.placeholder.com/150" },
    { name: "Severance", image: "https://via.placeholder.com/150", link: "../Severance/Severance .html?name=Alice Brown&image=https://via.placeholder.com/150" },
    { name: "Sonic the Hedgehog 3", image: "https://via.placeholder.com/150", link: "../Sonic/Sonic the Hedgehog 3.html?name=Alice Brown&image=https://via.placeholder.com/150" },
    { name: "Sorgavaasal", image: "https://via.placeholder.com/150", link: "../Sorgavaasal/Sorgavaasal .html?name=Alice Brown&image=https://via.placeholder.com/150" },
    { name: "Tabaah", image: "https://via.placeholder.com/150", link: "../Tabaah/Tabaah .html?name=Alice Brown&image=https://via.placeholder.com/150" },
    { name: "Tees Maar Khan", image: "https://via.placeholder.com/150", link: "../Tees Maar Khan/Tees Maar Khan .html?name=Alice Brown&image=https://via.placeholder.com/150" },
    { name: "Thandel", image: "https://via.placeholder.com/150", link: "../Thandel/Thandel .html?name=Alice Brown&image=https://via.placeholder.com/150" },
    { name: "Conjuring", image: "https://via.placeholder.com/150", link: "../The Conjuring/Conjuring .html?name=Alice Brown&image=https://via.placeholder.com/150" },
    { name: "The Conjuring 2", image: "https://via.placeholder.com/150", link: "../The Conjuring/Conjuring .html?name=Alice Brown&image=https://via.placeholder.com/150" },
    { name: "The Conjuring: The Devil Made Me Do It", image: "https://via.placeholder.com/150", link: "../The Conjuring/Conjuring .html?name=Alice Brown&image=https://via.placeholder.com/150" },
    { name: "The Count of Monte Cristo", image: "https://via.placeholder.com/150", link: "../The Count of Monte Cristo/The Count of Monte Cristo .html?name=Alice Brown&image=https://via.placeholder.com/150" },
    { name: "The Killer’s Game", image: "https://via.placeholder.com/150", link: "../The Killer’s Game/The Killer’s Game .html?name=Alice Brown&image=https://via.placeholder.com/150" },
    { name: "The Legend of Maula Jatt", image: "https://via.placeholder.com/150", link: "../The Legend of Maula Jatt/The Legend of Maula Jatt .html?name=Alice Brown&image=https://via.placeholder.com/150" },
    { name: "The Night Agent", image: "https://via.placeholder.com/150", link: "../The Night Agent/The Night Agent .html?name=Alice Brown&image=https://via.placeholder.com/150" },
    { name: "The Recruit", image: "https://via.placeholder.com/150", link: "../The Recruit/The Recruit .html?name=Alice Brown&image=https://via.placeholder.com/150" },
    { name: "The Secret of the Shiledar", image: "https://via.placeholder.com/150", link: "../The Secret of the Shiledars/The Secret of the Shiledars .html?name=Alice Brown&image=https://via.placeholder.com/150" },
    { name: "The Storyteller", image: "https://via.placeholder.com/150", link: "../The Storyteller/The Storyteller .html?name=Alice Brown&image=https://via.placeholder.com/150" },
    { name: "Twilight of the Warriors Walled In", image: "https://via.placeholder.com/150", link: "../Twilight of the Warriors Walled/Twilight of the Warriors Walled In .html?name=Alice Brown&image=https://via.placeholder.com/150" },
    { name: "Unlock My Boss", image: "https://via.placeholder.com/150", link: "../Unlock My Boss/Unlock My Boss .html?name=Alice Brown&image=https://via.placeholder.com/150" },
    { name: "You", image: "https://via.placeholder.com/150", link: "../You/You .html?name=Alice Brown&image=https://via.placeholder.com/150" },
    { name: "Your Friendly Neighborhood Spider-Man", image: "https://via.placeholder.com/150", link: "../Your Friendly Neighborhood Spider-Man/Your Friendly Neighborhood Spider-Man (Season 1) .html?name=Alice Brown&image=https://via.placeholder.com/150" },
    { name: "Zack Snyder’s Justice League", image: "https://via.placeholder.com/150", link: "../Zack Snyder’s Justice League/Zack Snyder’s Justice League .html?name=Alice Brown&image=https://via.placeholder.com/150" },
    { name: "Didi", image: "https://via.placeholder.com/150", link: "../Didi/Didi .html?name=Alice Brown&image=https://via.placeholder.com/150" },
    { name: "Eagle", image: "https://via.placeholder.com/150", link: "../Eagle/Eagle .html?name=Alice Brown&image=https://via.placeholder.com/150" },
    { name: "Fateh", image: "https://via.placeholder.com/150", link: "../Fateh/Fateh .html?name=Alice Brown&image=https://via.placeholder.com/150" },
    { name: "paatal lok", image: "https://via.placeholder.com/150", link: "../paatal lok/paatal lok .html?name=Alice Brown&image=https://via.placeholder.com/150" },
    { name: "SAKAMOTO DAYS", image: "https://via.placeholder.com/150", link: "../Sakamoto/Sakamoto .html?name=Alice Brown&image=https://via.placeholder.com/150" },
    { name: "Sky Force", image: "https://via.placeholder.com/150", link: "../Sky Force/Sky Force .html?name=Alice Brown&image=https://via.placeholder.com/150" },
    { name: "Power of Paanch", image: "https://via.placeholder.com/150", link: "../PowerPaanch/Power Paanch .html?name=Alice Brown&image=https://via.placeholder.com/150" },
    
];

function searchUser() {
    let input = document.getElementById("searchInput").value.toLowerCase();
    
    let user = users.find(user => user.name.toLowerCase() === input);

    if (user) {
        window.open(user.link, "_blank");
    } else {
        window.open("user.html?error=User Not Found", "_blank");
    }
}
function toggleMenu() {
    document.querySelector('.nav-links').classList.toggle('active');
}