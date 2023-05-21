const newQuotablebutton=document.getElementById("new-quote");
const quoteText =document.getElementById("text");
const authortext =document.getElementById("author");
const tweetquote=document.getElementById("tweet-quote");
const tumblrquote=document.getElementById("tumblr-quote");
const fa_quoat=document.getElementsByClassName("fa-quote-left")[0]
async function getQuote(){

    const response = await(await fetch("https://api.quotable.io/random")).json();
    const{ content,author}=response;

    const color=`rgb(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)})`;
    document.body.style.backgroundColor=color;
    newQuotablebutton.style.backgroundColor =color;
    quoteText.style.color=color;
    authortext.style.color=color;
    tweetquote.style.backgroundColor=color;
    tumblrquote.style.backgroundColor=color;
    fa_quoat.style.color=color;
    quoteText.style.opacity=0;
    authortext.style.opacity=0;
    document.getElementById(
		"tweet-quote"
	).href = `https://www.twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text="${encodeURIComponent(
		quoteText
	)}"${encodeURIComponent(" " + authortext)}`;
	document.getElementById(
		"tumblr-quote"
	).href = `https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=${encodeURIComponent(
		quoteText
	)}&content=${encodeURIComponent(
		authortext
	)}&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button`;
	// });
    setTimeout(function()  {
        quoteText.textContent=content;
        authortext.textContent=author;
        quoteText.style.opacity=1;
        authortext.style.opacity=1;
    }, 500);
};
// Initially Get An Initial Quote and Initial Styling
   
  
getQuote();
newQuotablebutton.addEventListener("click",getQuote);