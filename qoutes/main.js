const quotees = [
  {
    name: "Amella Earhart",
    quote: "The most effective way to do it, is to do it.",
  },
  {
    name: "Winston Churchill",
    quote: 'If you"re going through hell, keep going.',
  },
  {
    name: "Benjamin Disraeli",
    quote:
      "The wisdom of the wise and the experience of the ages are perpetuated by quotations.",
  },
  {
    name: "John Wooden",
    quote:
      'Success is never final, failure is never fatal. It"s courage that counts.',
  },
];

const quotesBtn = document.querySelector("#quotesBtn");
const quoteAuthor = document.querySelector("#quoteAuthor");
const quotes = document.querySelector("#quotes");

quotesBtn.addEventListener("click", displayQuote);
function displayQuote() {
  let number = Math.floor(Math.random() * quotees.length);
  quoteAuthor.innerHTML = quotees[number].name;
  quotes.innerHTML = quotees[number].quote;
}
