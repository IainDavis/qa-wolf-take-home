// EDIT THIS FILE TO COMPLETE ASSIGNMENT QUESTION 1
const { chromium } = require("playwright");
const { expect } = require("@playwright/test")

const verifyFalsifiable = false;
const TARGET_PAGE = verifyFalsifiable ? "https://news.ycombinator.com/" : "https://news.ycombinator.com/newest"

const green = (text) => `\n\x1b[32m${text}\x1b[0m]\n`

async function sortHackerNewsArticles() {
  // launch browser
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();

  // go to Hacker News
  await page.goto(TARGET_PAGE);

  const morelink = await page.locator('.morelink');
  const stories = new Set();

  const data = await page.locator('tr.athing.submission, td.subtext span.age');

  console.clear();

  paginationLoop: while (stories.size < 100) {
      const count = await data.count();

    /* pageDataLoop */ for(let i = 0; i < count; i += 2) {
      const storyId = await (data.nth(i).getAttribute('id'));
      const timestamp = Number((await (data.nth(i + 1).getAttribute('title'))).split(' ')[1]);

      if(stories.has(storyId)) continue; // no need to add the same story twice
      stories.add(storyId);
      
      var [prev, curr] = [curr, timestamp]; // update comparison values
      if(prev && curr) expect(curr).toBeLessThanOrEqual(prev);

      if(stories.size >= 100) break paginationLoop; // exit if we've tested enough data
    }

    await morelink.click();
  }
  expect(stories.size).toBe(100);
  console.log(green("🎉 PASS: first 100 stories are sorted, by timestamp, in descending order"));
  await browser.close();
}

(async () => {
  await sortHackerNewsArticles();
})();
