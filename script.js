const accessKey = "Wn1AqxvU4sDdz6EVaVf2id74QsBJn7pRcx9se7HoYHg"

let form = document.getElementById('form')
let inputField = document.getElementById('text-input')
let inputBtn = document.getElementById('input-btn')
let resultPlace = document.getElementById('result-place')
let showMore = document.getElementById('show-more-btn')

let keyword = ""
let pages = 0

async function searchEngine() {
    keyword = inputField.value; 
    const url = `https://api.unsplash.com/search/photos?page=${pages}&query=${keyword}&client_id=${accessKey}&per_page=12`

    const response = await fetch(url);
    const data = await response.json();

    console.log(data)

    let results = data.results;

    if (pages == 1) {
        resultPlace.innerHTML = ""
    }

    results.map((result) => {
        let images = document.createElement("img");
        images.src = result.urls.small;
        let imageLink = document.createElement("a");
        imageLink.href = result.links.html;
        imageLink.target = "_blank";
    
        imageLink.appendChild(images)
        resultPlace.appendChild(imageLink)
    })

    showMore.style.display = 'block'
} 
form.addEventListener("submit", (e) =>{
    e.preventDefault();
    pages = 1;
    searchEngine();
})

showMore.addEventListener('click', ()=>{
    pages++;
    searchEngine();
})