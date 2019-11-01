// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

const cardHTML = document.querySelector('.cards-container')

function createCard(headline, url, author ){
    const cardDiv = document.createElement('div')
    const headlineDiv = document.createElement('div')
    const authorDiv = document.createElement('div')
    const imgContainer = document.createElement('div')
    const imgTag = document.createElement('img')
    const authorName = document.createElement('span')

    cardDiv.appendChild(headlineDiv)
    cardDiv.appendChild(authorDiv)
    authorDiv.appendChild(imgContainer)
    authorDiv.appendChild(authorName)
    imgContainer.appendChild(imgTag)

    cardDiv.classList.add('card')
    headlineDiv.classList.add('headline')
    authorDiv.classList.add('author')
    imgContainer.classList.add('img-container')

    headlineDiv.textContent = headline;
    imgTag.src = url;
    authorName.textContent = `By ${author}`;

return cardDiv
}


axios.get("https://lambda-times-backend.herokuapp.com/articles")
    .then( response => {
        const articleObj = response.data.articles
        for (let key in articleObj) {
            articleObj[key].forEach( info => {
                cardHTML.appendChild(createCard(info.headline, info.authorPhoto, info.authorName ))
            })
        }
    })
