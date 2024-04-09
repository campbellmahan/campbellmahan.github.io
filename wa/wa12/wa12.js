const btn = document.querySelector("#js-new-quote");
btn.addEventListener('click', getQuote);

const answerBtn = document.querySelector("#js-tweet");
answerBtn.addEventListener('click', getAnswer);

const answerText = document.querySelector("#js-answer-text");

const endpoint = 'https://api.quotable.io/random';

let answer = '';

async function getQuote() {
    try {
        const response = await fetch(endpoint);
        if (!response.ok) {
            throw Error(response.statusText);
        }

        const json = await response.json();
        console.log(json);
        const quote = json.content;
        const author = json.author; // Extract author from JSON response
        displayQuote(quote, author); // Pass both quote and author to display function
        answer = ''; // Clear previous answer when fetching new quote
        answerText.textContent = ''; // Clear answer text
    } catch (err) {
        console.log(err);
        alert('Failed to fetch new quote');
    }
}

function displayQuote(quote, author) {
    const quoteText = document.querySelector("#js-quote-text");
    const authorText = document.querySelector("#js-author-text"); // Add this line to select the author element
    quoteText.textContent = quote;
    authorText.textContent = `- ${author}`; // Display author with a dash prefix
}

function getAnswer() {
    answerText.textContent = answer;
}

getQuote();
getAnswer();