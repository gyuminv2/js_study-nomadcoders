const quotes = [
    {
        quotes: "시간은 금",
        author: "누군가",
    },
    {
        quotes: "어려워",
        author: "gyumpark",
    },
    {
        quotes: "hype boy",
        author: "newjeans",
    },
    {
        quotes: "iab studio",
        author: "빈지노",
    },
    {
        quotes: "TC",
        author: "Thug Club",
    },
    {
        quotes: "sansangear",
        author: "gyumpark",
    }
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quotes;
author.innerText = todaysQuote.author;