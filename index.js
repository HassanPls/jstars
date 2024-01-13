/* Button to top of the page */

var ButtonTop = document.getElementById("Top");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 150 ||
    document.documentElement.scrollTop > 150
  ) {
    ButtonTop.style.display = "block";
  } else {
    ButtonTop.style.display = "none";
  }
}

/* Web Scrapping */

/* const puppeteer = require('puppeteer');

var groupData = {
  Group: [Members, Games, Clothes],
  games: {
    JSDCO2: [Active, Favorites, Visits, (Created = "7/27/2023")],
    JSDCO: [Active, Favorites, Visits, (Created = "1/9/2022")],
    JSTT: [Active, Favorites, Visits, (Created = "4/11/2022")],
    TOG: [Active, Favorites, Visits, (Created = "3/31/2022")],
  },
};

async function scraper(url) {
  
}
 */