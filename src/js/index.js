//botao para o topo

const ButtonTop = document.getElementById("Top");

window.addEventListener("scroll", function () {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    ButtonTop.style.display = "block";
  } else {
    ButtonTop.style.display = "none";
  }
});

//pegar dados do arquivo

fetch("https://raw.githubusercontent.com/JAVARINI/jstars/main/src/js/data.json")
  .then((response) => response.json())
  .then((data) => {
    const sectionGames = document
      .getElementById("Games")
      .getElementsByClassName("sectionContent")[0];

    for (const key in data.Group.Info) {
      if (Object.hasOwnProperty.call(data.Group.Info, key)) {
        const ulGroup = document.getElementById("Group-Information");
        const value = data.Group.Info[key];
        ulGroup.innerHTML = ulGroup.innerHTML + "<li> " + value + "</li>";
      }
    }

    for (const games in data.Group.Games) {
      var game = data.Group.Games[games];
      var titleGame = game.Title;
      var descriptionGame = game.Description;
      var imgGame = game.Img;
      var linkGame = game.Link;
      var likesGame = game.Likes;
      var favoritesGame = game.Favorites;
      var visitsGame = game.Visits;
      var createdGame = game.Created;

      sectionGames.innerHTML += `
      <div class="card bg-black text-light p-3">
        <h3>${titleGame}</h3>
        <p>${descriptionGame}</p>
        <div class="container-fluid d-flex justify-content-center flex-wrap p-0">
          <div class="container-fluid d-flex justify-content-around align-items-center flex-wrap p-0 mb-3">
            <div class="container-fluid row row-cols-2">
              <ul class="col">
                <li>Likes:</li>
                <li>Favorites:</li>
                <li>Visits:</li>
                <li>Created:</li>
              </ul>
              <ul class="col">
                <li>${likesGame}</li>
                <li>${favoritesGame}</li>
                <li>${visitsGame}</li>
                <li>${createdGame}</li>
              </ul>
            </div>
            <img src="${imgGame}" class="img-fluid" alt="" />
          </div>
          <a rel="noopener" href="${linkGame}" target="_blank">Play Now!</a>
        </div>
      </div>
      `;
    }

    //animacao card

    const cardArray = document
      .getElementById("Games")
      .getElementsByClassName("card");

    for (let i = 0; i < cardArray.length; i++) {
      const options = {
        root: null,
        rootMargin: "0px",
        threshold: 0,
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("cardAppear");
          }
        });
      }, options);

      observer.observe(cardArray[i]);
    }
  });
