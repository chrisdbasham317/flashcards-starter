# FlashCards

## Abstract

FlashCards is project based around Node, OOP, and focuses on TDD. The game has a deck built out with question cards, and the user answers each question in their terminal. 

---

## Setup

Clone down the forked repo (from your GitHub):

```bash
git clone [remote-address] [what you want to name the repo]
```

Once you have cloned the repo, change into the directory and install the library dependencies. Run:

```bash
npm install
```

To verify that it is setup correctly, run `npm test` in your terminal. 

---

## Playing the Game

Running `node index.js` from the root of your project should result in the following message being displayed in your terminal: 

```bash
Node server running on port 3000
```
After running node index.js, the game will tell you how many questions you will have total, and then prompt you to answer the first question. You will get feedback based on your answer, and then be prompted for the next question. This process will repeat until you have answer all questions, then feedback will be provided based on overall accuracy.

![flash cards example gif](https://github.com/chrisdbasham317/flashcards-starter/blob/master/images/project-gif.gif)

---
