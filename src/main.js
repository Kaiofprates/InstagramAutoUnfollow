const puppeteer = require("puppeteer");
require("dotenv").config({ path: "../.env" });

async function getPage() {
  const browser = await puppeteer.launch({
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });
  const page = await browser.newPage();
  await page.goto(process.env.INSTA_URL);
  await page.waitFor(2000);
  await page.screenshot({ path: "initial.png" });
  await page.waitForSelector('input[name="username"]');
  await page.type('input[name="username"]', process.env.INSTA_USERNAME);
  await page.type('input[name="password"]', process.env.INSTA_PASSWORD);
  await page.click('button[type="submit"]');
  await page.waitFor(3000);
  await page.screenshot({ path: "second.png" });
  await page.click('button[class="sqdOP yWX7d    y3zKF     "]');
  await page.waitFor(2000);
  await page.screenshot({ path: "tre.png" });
  await page.click('a[class="_2dbep qNELH kIKUG"]');
  await page.waitFor(2000);
  await page.screenshot({ path: "for.png" });

  const profile = await page.evaluate(() => {
    const profile = document.getElementsByClassName("zwlfE");
    console.log(profile);
  });
  await page.screenshot({ path: "example.png" });

  await browser.close();
}
getPage();
