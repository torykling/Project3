// api key c38e7bc912154c2fbac55e52653a38fc

const url =
  "https://newsapi.org/v2/top-headlines?country=us&apiKey=c38e7bc912154c2fbac55e52653a38fc";
let topStories = document.querySelector(".topStories");
let searchStories = document.querySelector(".searchStories");
// this builds the search feature
let input = document.querySelector(".input");
let form = document.querySelector("form");
let aside = document.querySelector("aside");

form.addEventListener("submit", function(evt) {
  evt.preventDefault();
  let feedback = document.querySelector(".searchFeedback");
  console.log(input.value);
  fetch(
    "https://newsapi.org/v2/everything?" +
      `q=${input.value}&` +
      "from=2019-12-20&" +
      "sortBy=popularity&" +
      "apiKey=c38e7bc912154c2fbac55e52653a38fc"
  )
    .then(res => res.json())
    .then(res => {
      console.log("success2", res);
      feedback.innerText = "";
      searchStories.innerHTML = "";
      topStories.innerHTML = "";
      for (let i = 0; i < 10; i++) {
        if (res.articles[i].content) {
          let button2 = searchStories.appendChild(
            document.createElement("button")
          );
          button2.innerText = res.articles[i].title;
          let description2 = searchStories.appendChild(
            document.createElement("a")
          );
          description2.innerText = res.articles[i].content;
          description2.classList.add("hidden");
          description2.classList.add("text");
          description2.setAttribute("href", res.articles[i].url);
          description2.setAttribute("target", "_blank");
          aside.classList.add("narrow");
        }
      }
      let buttons = document.querySelectorAll("button");
      let descriptions = document.querySelectorAll("a.text");
      for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", function(e) {
          e.preventDefault();
          descriptions[i].classList.toggle("hidden");

          for (let j = 0; j < buttons.length; j++) {
            if (j != i) {
              descriptions[j].classList.add("hidden");
            }
          }
        });
      }
    })
    .catch(err => {
      console.log("uh oh 2", err);
      feedback.innerText = "Invalid search";
      aside.classList.add("wide");
    });
});

// This builds the main section with the default top stories
fetch(url)
  .then(res => res.json())
  .then(res => {
    console.log("Success!", res.articles);
    for (let i = 0; i < res.articles.length; i++) {
      if (res.articles[i].content) {
        let button = topStories.appendChild(document.createElement("button"));
        let description = topStories.appendChild(document.createElement("a"));
        let author = topStories.appendChild(document.createElement("p"));
        button.innerText = res.articles[i].title;
        description.innerText = res.articles[i].content;
        description.setAttribute("href", res.articles[i].url);
        description.setAttribute("target", "_blank");
        description.classList.add("text");
        if (res.articles[i].author) {
          author.innerText = "authored by " + res.articles[i].author;
        }
        description.classList.add("hidden");
        author.classList.add("hidden");
      }
    }
    let buttons = document.querySelectorAll("button");
    let descriptions = document.querySelectorAll("a.text");
    let authors = document.querySelectorAll("p");

    for (let i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener("click", function(e) {
        e.preventDefault();
        descriptions[i].classList.toggle("hidden");
        authors[i].classList.toggle("hidden");
        for (let j = 0; j < buttons.length; j++) {
          if (j != i) {
            descriptions[j].classList.add("hidden");
            authors[j].classList.add("hidden");
          }
        }
      });
    }
  })
  .catch(err => {
    console.log("Something went wrong", err);
  });
