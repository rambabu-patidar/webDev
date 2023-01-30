const quoteContent = document.querySelector(".quote-content");
const quoteAuthor = document.querySelector(".author");
const twitterBtn = document.querySelector(".twitter-btn");
const newQuoteBtn = document.querySelector(".new-quote");


let quotes  = [];

// random number excluding the last number
function random(max) {
    return Math.floor(Math.random()*max);
}

async function getQuotes() {

    const requestURL = "https://type.fit/api/quotes";
    const request = new Request(requestURL);
    // response promise
    const response = await fetch(request);
    quotes = await response.json();
}


function changeQuoteData() {
    
    const newQuote = quotes[random(quotes.length)];
    if (newQuote.text.length > 120) {
        quoteContent.classList.add("large-quote");
    }else {
        quoteContent.classList.remove("large-quote");

    }
    quoteContent.textContent = newQuote.text;
    quoteAuthor.textContent = newQuote.author;
}

function tweetQuote() {
    // https://twitter.com/intent/tweet?text=${quoteText.innerText} - ${authorText.innerText}
    const url = `https://twitter.com/intent/tweet?text=${quoteContent.textContent}-${quoteAuthor.textContent}`;

    window.open(url, "_blank");
}

newQuoteBtn.addEventListener("click", changeQuoteData);
twitterBtn.addEventListener("click", tweetQuote);

getQuotes();