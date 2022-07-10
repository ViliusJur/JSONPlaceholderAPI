let queryParams = document.location.search;
let urlParams = new URLSearchParams(queryParams);
let albumId = urlParams.get('album_id')
let albumTitle = urlParams.get('album_title');
let userId = urlParams.get('user_id');
let userName = urlParams.get('user_name');
console.log(albumId)
console.log(albumTitle)
console.log(userId)
console.log(userName)

let userAlbumItem = document.querySelector('.user-album-item')
userAlbumItem.innerHTML = `<h3> Album name: ${albumTitle} </h3>
                           <span> Album author: <a href="#"> ${userName} </span> <br>
                           `



fetch(`https://jsonplaceholder.typicode.com/albums/${albumId}/photos/`)
    .then(response => response.json())
    .then(photos => {
        photos.map((photo)=>{
            let imgItem = document.createElement('img');
            imgItem.src = photo.thumbnailUrl;
            imgItem.setAttribute('alt', photo.title);

            userAlbumItem.append(imgItem);
        })
        
        
    })



// 6. Sukurti naują puslapį album.html ir jame atvaizduoti:
//   6.1. Albumo pavadinimą.
//   6.2. Album autoriaus vardą. Paspaudus ant vardo - nukreipiama į autoriaus puslapį.
//   6.3. Skiltis, kurioje atvaizduojamos visos albumo nuotraukos. Panaudoti library (biblioteką), kuri skirta gražiam galerijos atvaizdavimui, pvz.:
//     6.3.1. https://photoswipe.com/
//     6.3.2. https://nanogallery2.nanostudio.org/
//     6.3.3. https://sachinchoolur.github.io/lightgallery.js/
//     6.3.4. Arba bet kurią kitą.