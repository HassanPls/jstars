const { chromium } = require("playwright");

fetch("http://localhost:3000/Group/")
  .then((response) => response.json())
  .then(async (data) => {
    async function infoGame() {
      let xpath;

      xpath =
        "xpath=//html/body/div[3]/main/div[2]/div[2]/div[4]/div/div[1]/div[1]/div[2]/ul/li[3]/p[2]";
      await page.waitForSelector(xpath);
      const visitsElement = page.locator(xpath);
      const Visits = await visitsElement.textContent();

      xpath =
        "xpath=//html/body/div[3]/main/div[2]/div[2]/div[3]/div[2]/div[2]/ul/li[3]/div[2]/div/div/div[2]/div[2]/div[1]/span";
      await page.waitForSelector(xpath);
     const likesElement = page.locator(xpath);
     const Likes = await likesElement.textContent(); 

      xpath =
        "xpath=//html/body/div[3]/main/div[2]/div[2]/div[4]/div/div[1]/div[1]/div[2]/ul/li[2]/p[2]/span";
      const favoritesElement = page.locator(xpath);
      const Favorites = await favoritesElement.textContent();

      return [Visits, Likes, Favorites];
    }

    const browser = await chromium.launch();
    const page = await browser.newPage();

    await page.goto("https://www.roblox.com/games/14207734586");
    const JSDCO2 = await infoGame();
    data.Games.JSDCO2.Visits = JSDCO2[0];
    data.Games.JSDCO2.Likes = JSDCO2[1];
    data.Games.JSDCO2.Favorites = JSDCO2[2];

    await page.goto("https://www.roblox.com/games/8497630287");
    const JSDCO = await infoGame();
    data.Games.JSDCO.Visits = JSDCO[0];
    data.Games.JSDCO.Likes = JSDCO[1];
    data.Games.JSDCO.Favorites = JSDCO[2];

    await page.goto("https://www.roblox.com/games/9240693513");
    const TOG = await infoGame();
    data.Games.TOG.Visits = TOG[0];
    data.Games.TOG.Likes = TOG[1];
    data.Games.TOG.Favorites = TOG[2];

    await page.goto("https://www.roblox.com/games/9337507529");
    const JSTT = await infoGame();
    data.Games.JSTT.Visits = JSTT[0];
    data.Games.JSTT.Likes = JSTT[1];
    data.Games.JSTT.Favorites = JSTT[2];

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
