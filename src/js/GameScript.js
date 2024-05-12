const { chromium } = require("playwright");

fetch("http://localhost:3000/Group/")
  .then((response) => response.json())
  .then(async (data) => {
    async function infoGame() {
      let xpath = [
        "xpath=//html/body/div[3]/main/div[2]/div[2]/div[4]/div/div[1]/div/div/div[1]/ul/li[3]/p[2]",
        "xpath=//html/body/div[3]/main/div[2]/div[2]/div[3]/div[2]/div[2]/ul/li[3]/div[2]/div/div/div[2]/div[2]/div[1]/span",
        "xpath=//html/body/div[3]/main/div[2]/div[2]/div[4]/div/div[1]/div/div/div[1]/ul/li[2]/p[2]",
      ];

      await page.waitForSelector(xpath[0]);
      const visitsElement = page.locator(xpath[0]);
      const Visits = await visitsElement.textContent();

      await page.waitForSelector(xpath[1]);
      const likesElement = page.locator(xpath[1]);
      const Likes = await likesElement.textContent();

      await page.waitForSelector(xpath[2]);
      const favoritesElement = page.locator(xpath[2]);
      const Favorites = await favoritesElement.textContent();

      return [Visits, Likes, Favorites];
    }

    const games = [
      ["https://www.roblox.com/games/14207734586", "JSDCO2"],
      ["https://www.roblox.com/games/8497630287", "JSDCO"],
      ["https://www.roblox.com/games/9240693513", "TOG"],
      ["https://www.roblox.com/games/9337507529", "JSTT"],
      ["https://www.roblox.com/games/11810137193", "DPM"],
    ];

    const browser = await chromium.launch();
    const page = await browser.newPage();

    for (let i = 0; i < games.length; i++) {
      await page.goto(games[i][0]);
      const infoGameArray = await infoGame();
      data.Games[games[i][1]].Visits = infoGameArray[0];
      data.Games[games[i][1]].Likes = infoGameArray[1];
      data.Games[games[i][1]].Favorites = infoGameArray[2];
    }

    await browser.close();

    fetch("http://localhost:3000/Group", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  })
  .catch((error) => {
    console.error(error);
  });
