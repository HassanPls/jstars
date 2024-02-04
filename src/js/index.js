/* Button to top of the page */

const ButtonTop = document.getElementById("Top");

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

const ulGroup = document.getElementById("Group-Information");
const ulJSDCO2 = document.getElementById("JSDCO2-Information");
const ulJSDCO = document.getElementById("JSDCO-Information");
const ulJSTT = document.getElementById("JSTT-Information");
const ulTOG = document.getElementById("TOG-Information")

fetch("https://raw.githubusercontent.com/JAVARINI/jstars/main/src/js/data.json")
  .then((response) => response.json())
  .then((data) => {
    ulGroup.innerHTML =
      "<li> " + data.Group.Members + "</li>" +
      "<li> " + data.Group.Game + "</li>" +
      "<li> " + data.Group.Clothes + "</li>";

    ulJSDCO2.innerHTML = 
      "<li> " + data.Group.Games.JSDCO2.Likes + "</li>" +
      "<li> " + data.Group.Games.JSDCO2.Favorites + "</li>" +
      "<li> " + data.Group.Games.JSDCO2.Visits + "</li>" +
      "<li> " + data.Group.Games.JSDCO2.Created + "</li>";

    ulJSDCO.innerHTML = 
      "<li> " + data.Group.Games.JSDCO.Likes + "</li>" +
      "<li> " + data.Group.Games.JSDCO.Favorites + "</li>" +
      "<li> " + data.Group.Games.JSDCO.Visits + "</li>" +
      "<li> " + data.Group.Games.JSDCO.Created + "</li>";

    ulJSTT.innerHTML = 
      "<li> " + data.Group.Games.JSTT.Likes + "</li>" +
      "<li> " + data.Group.Games.JSTT.Favorites + "</li>" +
      "<li> " + data.Group.Games.JSTT.Visits + "</li>" +
      "<li> " + data.Group.Games.JSTT.Created + "</li>";

    ulTOG.innerHTML = 
      "<li> " + data.Group.Games.TOG.Likes + "</li>" +
      "<li> " + data.Group.Games.TOG.Favorites + "</li>" +
      "<li> " + data.Group.Games.TOG.Visits + "</li>" +
      "<li> " + data.Group.Games.TOG.Created + "</li>";
  });
