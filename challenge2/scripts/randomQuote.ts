async function getQuote() {
  let quoteSize: string = (<HTMLSelectElement> document.getElementById("quoteSize")).value;
  let apiString: string = "https://api.quotable.io/random/?maxLength=";

  if (quoteSize === "small") {
    apiString += "25&minLength=5"
  } else if (quoteSize === "medium") {
    apiString += "100&minLength=50"
  } else {
    apiString += "900&minLength=200"
  }

  // clear the html paragraphs
  document.getElementById("showTheQuote").innerHTML = "";

  // retrieve the JSON data
  const response: Response = await fetch(apiString);
  let jsonData: any = await response.json();
  document.getElementById("showTheQuote").innerHTML = jsonData.content;
  document.getElementById("showTheAuthor").innerHTML = " - " + jsonData.author;
}