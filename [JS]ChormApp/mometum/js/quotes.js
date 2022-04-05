const quotes = [{
    quotes: "Hello",
    author: "Bang Seo bin",
},
{
    quotes: "Hi",
    author: "Bang seo bin",
},
{
    quotes: "HoHo",
    author: "Bang seo bin",
},
{
    quotes: "koko",
    author: "Bang seo bin",
},
{
    quotes: "HeHe",
    author: "Bang seo bin",
},
{
    quotes: "Het",
    author: "Bang seo bin",
},
{
    quotes: "해봐야 안다.",
    author: "Bang seo bin",
},
{
    quotes: "하나님은 아신다.",
    author: "Bang seo bin",
},
{
    quotes: "대부분의 인간들은 지 입맛에 맞게 합리화한다.",
    author: "Bang seo bin",
},
{
    quotes: "우리는 중요한 걸 놓친다.",
    author: "Bang seo bin",
},
{
    quotes:"문법보다 문맥이 중요하다. 그렇지만 문법이 중요치않다는 건 아니다.",
    author: "Bang seo bin",
}]

const quote = document.querySelector("#quotes span:first-child");
const author = document.querySelector("#quotes span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

function quotesCl(){
    quote.innerText = todaysQuote.quotes;
    author.innerText = todaysQuote.author;
}

setInterval(quotesCl, 1000);