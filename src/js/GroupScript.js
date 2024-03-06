const { chromium } = require("playwright");

fetch("http://localhost:3000/Group")
  .then((response) => response.json())
  .then(async (data) => {
    const browser = await chromium.launch();
    const page = await browser.newPage();

    await page.goto("https://www.roblox.com/groups/6413764/JStars#!/about");

    const membersXPATH =
      "xpath=//html/body/div[3]/main/div[2]/div[1]/div/div/div[2]/div/div[1]/div[2]/div[2]/div[3]/ul/li[1]/span";
    await page.waitForSelector(membersXPATH);
    const members = await page.locator(membersXPATH).textContent();

    const gamesXPATH =
      "xpath=//html/body/div[3]/main/div[2]/div[1]/div/div/div[2]/div/div[3]/div/group-games/div/div[2]/ul";
    await page.waitForSelector(gamesXPATH);
    const games = await page.locator(gamesXPATH + "/li").count();

    await page.goto("https://www.roblox.com/groups/6413764/JStars#!/store");

    const clothesXPATH =
      "xpath=//html/body/div[3]/main/div[2]/div[1]/div/div/div[2]/div/group-store/div";
    await page.waitForSelector(clothesXPATH);
    const clothes = await page.locator(clothesXPATH + "/ul/li").count();

    await browser.close();

    data.Info.Members = members;
    data.Info.Game = games;
    data.Info.Clothes = clothes;

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
