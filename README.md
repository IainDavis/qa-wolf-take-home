## Iain Davis -- QA Wolf testing solution

|       |                    |
|-------|--------------------|
| phone | +61 451363200      |
| email | iain@iaindavis.dev |

[resume](./docs/2024_Davis_Iain_Res.pdf)

[Loom video](https://www.loom.com/share/a65c02c09f52482ea617dcbc3d459bb9?sid=05a89d47-d6b3-460e-a2f6-913e48d02969)

## About Me
I'm a Software Engineer. I worked for Intuit from 2019, first in San Diego, and then in Sydney, up to 2024 when I was laid off as part of Intuit's restructuring that elminated all software development positions in Australia. I've worked across the stack. My early experience was in Java/Spring Boot, and after I relocated to Australia, that changed to almost exclusively JavaScript/TypeScript, both in the browser and in Node environments.

I'm an Australian permanent resident, and a United States citizen. I'm currently in California, but I expect to return to Australia when I have employment. I'd be happy to discuss this further.

## About the Solution
The solution includes the use of an environment variable, VERIFY_FALSIFIABLE. When this value is set to `"true"`, as follows:
```sh
VERIFY_FALSIFIABLE=true node index.js
```
the script will fetch a data set that we should expect to _fail_ the test (specifically the Hacker News homepage, which has an equivalent structure, but we can generally expect the rows not to be sorted by date). For all other values of `VERIFY_FALSIFIABLE` (including no value), the test will run as normal and should pass.

<!--
# 🐺 QA Wolf Take Home Assignment

Welcome to the QA Wolf take home assignment for our [QA Engineer](https://www.task-wolf.com/apply-qae) role! We appreciate your interest and look forward to seeing what you come up with.

## Instructions

This assignment has two questions as outlined below. When you are done, upload your assignment to our [application page](https://www.task-wolf.com/apply-qae):


### Question 1

In this assignment, you will create a script on [Hacker News](https://news.ycombinator.com/) using JavaScript and Microsoft's [Playwright](https://playwright.dev/) framework. 

1. Install node modules by running `npm i`.

2. Edit the `index.js` file in this project to go to [Hacker News/newest](https://news.ycombinator.com/newest) and validate that EXACTLY the first 100 articles are sorted from newest to oldest. You can run your script with the `node index.js` command.

Note that you are welcome to update Playwright or install other packages as you see fit, however you must utilize Playwright in this assignment.

### Question 2

Why do you want to work at QA Wolf? Please record a short, ~2 min video using [Loom](https://www.loom.com/) that includes:

1. Your answer 

2. A walk-through demonstration of your code, showing a successful execution

The answer and walkthrough should be combined into *one* video, and must be recorded using Loom as the submission page only accepts Loom links.

## Frequently Asked Questions

### What is your hiring process? When will I hear about next steps?

This take home assignment is the first step in our hiring process, followed by a final round interview if it goes well. **We review every take home assignment submission and promise to get back to you either way within two weeks (usually sooner).** The only caveat is if we are out of the office, in which case we will get back to you when we return. If it has been more than two weeks and you have not heard from us, please do follow up.

The final round interview is a 2-hour technical work session that reflects what it is like to work here. We provide a $150 stipend for your time for the final round interview regardless of how it goes. After that, there may be a short chat with our director about your experience and the role.

Our hiring process is rolling where we review candidates until we have filled our openings. If there are no openings left, we will keep your contact information on file and reach out when we are hiring again.

### Having trouble uploading your assignment?
Be sure to delete your `node_modules` file, then zip your assignment folder prior to upload. 

### How do you decide who to hire?

We evaluate candidates based on three criteria:

- Technical ability (as demonstrated in the take home and final round)
- Customer service orientation (as this role is customer facing)
- Alignment with our mission and values (captured [here](https://qawolf.notion.site/Mission-and-Values-859c7d0411ba41349e1b318f4e7abc8f))

This means whether we hire you is based on how you do during our interview process, not on your previous experience (or lack thereof). Note that you will also need to pass a background check to work here as our customers require this.

### How can I help my application stand out?

We've found that our best hires have been the most enthusiastic throughout our process. If you are very excited about working here, please feel free to go above and beyond on this assignment.
-->