 // api key c38e7bc912154c2fbac55e52653a38fc

 const url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=c38e7bc912154c2fbac55e52653a38fc"

let main = document.querySelector("main");

 fetch(url) 
 	.then(res => res.json())
 	.then(res => {
 		console.log("Success!", res.articles)
 		for (let i = 0; i < res.articles.length; i++) {
 			if (res.articles[i].description) {
 				let button = main.appendChild(document.createElement("button"))
 				let description = main.appendChild(document.createElement("a"))
 				let author = main.appendChild(document.createElement("p"))
 				button.innerText = res.articles[i].title
 				description.innerText = res.articles[i].content
 				description.setAttribute("href", res.articles[i].url)
 				description.setAttribute("target", "_blank")
 				description.classList.add("text")
 				if (res.articles[i].author) {
 					author.innerText = "authored by " + res.articles[i].author
 				}
 				description.classList.add("hidden")
 				author.classList.add("hidden")

 			}
 		}
		let buttons = document.querySelectorAll("button");
		let descriptions = document.querySelectorAll("a.text");
		let authors = document.querySelectorAll("p");
		

		for (let i = 0 ; i < buttons.length; i++) {
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
			})
		}
 	})
 	.catch(err => {
 		console.log("Something went wrong", err)
 	})
 
 	

 