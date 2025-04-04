// EDIT THIS FILE TO COMPLETE ASSIGNMENT QUESTION 1
const { chromium } = require("playwright");
const { expect } = require("@playwright/test")

// solution utils
const verifyFalsifiable = process.env.VERIFY_FALSIFIABLE === "true" ?? false;
const targetPage = verifyFalsifiable
  ? "https://news.ycombinator.com/" /* unsorted result set */
  : "https://news.ycombinator.com/newest" /* sorted result set */
const green = (text) => `\n\x1b[32m${text}\x1b[0m\n`
const red = (text) => `\n\x1b[31m${text}\x1b[0m\n`;

async function selectTimestamp(datarow) {
  const raw = await datarow.getAttribute('title');
  const timestamp = Number(raw?.split(' ')[1]);

  if(isNaN(timestamp)) {
    console.error(`🛑 Invalid timestamp: could not parse from title="${raw}"`)
    process.exit(1);
  }

  return timestamp;
}
// end solution utils

async function sortHackerNewsArticles() {
  const start = Date.now();
  // launch browser
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();

  // go to Hacker News
  await page.goto(targetPage);

  // begin solution
  console.clear();
  const stories = new Set();
  const data = await page.locator('tr.athing.submission, td.subtext span.age');

  paginationLoop: while (stories.size < 100) {
      const count = await data.count();

    /* pageDataLoop */ for(let i = 0; i < count; i += 2) {
      const storyId = await (data.nth(i).getAttribute('id'));
      const timestamp =  await selectTimestamp(data.nth(i + 1));

      if(stories.has(storyId)) continue; // no need to add the same story twice
      stories.add(storyId);
      
      var [prev, curr] = [curr, timestamp]; // update pair -- `var` declaration persists across loop iterations
      try {
        if(prev && curr) expect(curr).toBeLessThanOrEqual(prev);
      } catch(err) {
        console.error(red(`❌ Sorting check failed: expected ${curr} <= ${prev}`));
        process.exit(1);
      }

      if(stories.size >= 100) break paginationLoop; // exit if we've tested enough data
    }

    await page.locator('.morelink').click();
  }
  expect(stories.size).toBe(100);

  const end = Date.now();
  console.log(green(`🎉 PASS [${(end - start) / 1000}s]: Verified that the first 100 stories are sorted by timestamp (newest to oldest).`));
  await browser.close();
  // end solution
}

(async () => {
  await sortHackerNewsArticles();
})();
