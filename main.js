 // api key c38e7bc912154c2fbac55e52653a38fc

 const url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=c38e7bc912154c2fbac55e52653a38fc"
// first drop down
let button1 = document.querySelector("#button1");
let firstDropDown = document.querySelector(".firstDropDown");
let author1 = document.querySelector(".author1");
// second drop down
let button2 = document.querySelector("#button2");
let secondDropDown = document.querySelector(".secondDropDown");
let author2 = document.querySelector(".author2");
// third drop down
let button3 = document.querySelector("#button3");
let thirdDropDown = document.querySelector(".thirdDropDown");
let author3 = document.querySelector(".author3");
// fourth drop down
let button4 = document.querySelector("#button4");
let fourthDropDown = document.querySelector(".fourthDropDown");
let author4 = document.querySelector(".author4");
// fifth drop down
let button5 = document.querySelector("#button5");
let fifthDropDown = document.querySelector(".fifthDropDown");
let author5 = document.querySelector(".author5");

// let buttons = document.querySelectorAll("button"); 
// let dropDowns = document.querySelectorAll(".text");
// let authors = document.querySelectorAll(".authors");

 fetch(url) 
 	.then(res => res.json())
 	.then(res => {
 		console.log("Success!", res.articles)
 		button1.innerText = res.articles[0].title
 		firstDropDown.innerText = res.articles[0].description 
 		firstDropDown.setAttribute("href", res.articles[0].url)
 		if (res.articles[0].author !== null) {
 			author1.innerText = "authored by " + res.articles[0].author
 		}

 		button2.innerText = res.articles[1].title
 		secondDropDown.innerText = res.articles[1].description
 		secondDropDown.setAttribute("href", res.articles[1].url)
 		if (res.articles[1].author !== null) {
 			author2.innerText = "authored by " + res.articles[1].author
 		}

 		button3.innerText = res.articles[2].title
 		thirdDropDown.innerText = res.articles[2].description
 		thirdDropDown.setAttribute("href", res.articles[2].url)
 		if (res.articles[2].author !== null) {
 			author3.innerText = "authored by " + res.articles[2].author
 		}

 		button4.innerText = res.articles[3].title
 		fourthDropDown.innerText = res.articles[3].description
 		fourthDropDown.setAttribute("href", res.articles[3].url)
 		if (res.articles[3].author !== null) {
 			author3.innerText = "authored by " + res.articles[3].author
 		}

 		button5.innerText = res.articles[4].title
 		fifthDropDown.innerText = res.articles[4].description
 		fifthDropDown.setAttribute("href", res.articles[4].url)
 		if (res.articles[4].author !== null) {
 			author5.innerText = "authored by " + res.articles[4].author
 		}
 	})
 	.catch(err => {
 		console.log("Something went wrong", err)
 	})

 // event listeners to allow the accordion drop down

 button1.addEventListener("click", function(e) {
 	e.preventDefault();
 	firstDropDown.classList.toggle("hidden")
 	author1.classList.toggle("hidden")
 	secondDropDown.classList.add("hidden")
 	author2.classList.add("hidden")
 	thirdDropDown.classList.add("hidden")
 	author3.classList.add("hidden")
 	fourthDropDown.classList.add("hidden")
 	author4.classList.add("hidden")
 	fifthDropDown.classList.add("hidden")
 	author5.classList.add("hidden")
 }) 
 button2.addEventListener("click", function(e) {
 	e.preventDefault();
 	firstDropDown.classList.add("hidden")
 	author1.classList.add("hidden")
 	secondDropDown.classList.toggle("hidden")
 	author2.classList.toggle("hidden")
 	thirdDropDown.classList.add("hidden")
 	author3.classList.add("hidden")
 	fourthDropDown.classList.add("hidden")
 	author4.classList.add("hidden")
 	fifthDropDown.classList.add("hidden")
 	author5.classList.add("hidden")
 })
 button3.addEventListener("click", function(e) {
 	e.preventDefault();
 	firstDropDown.classList.add("hidden")
 	author1.classList.add("hidden")
 	secondDropDown.classList.add("hidden")
 	author2.classList.add("hidden")
 	thirdDropDown.classList.toggle("hidden")
 	author3.classList.toggle("hidden")
 	fourthDropDown.classList.add("hidden")
 	author4.classList.add("hidden")
 	fifthDropDown.classList.add("hidden")
 	author5.classList.add("hidden")
 })
 button4.addEventListener("click", function(e) {
 	e.preventDefault();
 	firstDropDown.classList.add("hidden")
 	author1.classList.add("hidden")
 	secondDropDown.classList.add("hidden")
 	author2.classList.add("hidden")
 	thirdDropDown.classList.add("hidden")
 	author3.classList.add("hidden")
 	fourthDropDown.classList.toggle("hidden")
 	author4.classList.toggle("hidden")
 	fifthDropDown.classList.add("hidden")
 	author5.classList.add("hidden")
 })
 button5.addEventListener("click", function(e) {
 	e.preventDefault();
 	firstDropDown.classList.add("hidden")
 	author1.classList.add("hidden")
 	secondDropDown.classList.add("hidden")
 	author2.classList.add("hidden")
 	thirdDropDown.classList.add("hidden")
 	author3.classList.add("hidden")
 	fourthDropDown.classList.add("hidden")
 	author4.classList.add("hidden")
 	fifthDropDown.classList.toggle("hidden")
 	author5.classList.toggle("hidden")
 })

