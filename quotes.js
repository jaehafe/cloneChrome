const quotes = [
{
  quote: "Be yourself; everyone else is already taken.",
  author: "Oscar Wilde",
},
{
  quote: "Be yourself; everyone else is already taken.",
  author: "Oscar Wilde",
},
{
  quote: "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
  author: "Marilyn Monroe",
},
{
  quote: "What you got here won't get you there.",
  author: "Marshall Goldsmith",
},
{
  quote: "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
  author: "Marilyn Monroe",
},
{
  quote: "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
  author: "Marilyn Monroe",
},
{
  quote: "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
  author: "Marilyn Monroe",
},
{
  quote: "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
  author: "Marilyn Monroe",
},
{
  quote: "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
  author: "Marilyn Monroe",
},
{
  quote: "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
  author: "Marilyn Monroe",
}
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.textContent = todaysQuote.quote;
author.textContent = todaysQuote.author;
