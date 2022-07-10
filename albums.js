let queryParams = document.location.search;
let urlParams = new URLSearchParams(queryParams);
let userId = urlParams.get('user_id');

let albumsListWrapper = document.querySelector('.albums-list-wrapper')
let albumsList = document.createElement('ul')

albumsListWrapper.append(albumsList)

fetch(`https://jsonplaceholder.typicode.com/users/${userId}/albums`)
    .then(response => response.json())
    .then(albums => {
        console.log(albums)
        albums.map((album)=>{
        let albumTitle = document.createElement('li')
        albumTitle.classList.add('album-title')
            albumTitle.innerHTML = `<a href="#">${album.title}</a>`

            albumsList.append(albumTitle)
            // fetch('https://jsonplaceholder.typicode.com/users/' + album.userId)
            // .then(response => response.json())
            // .then(user => {
            //     console.log(user)
            //     // let albumsAuthor = document.createElement('span')
            //     // albumsAuthor.textContent = `Author of album: ${user.name}`
            //     // albumTitle.append(albumsAuthor)
            // })
         
            fetch(`https://jsonplaceholder.typicode.com/albums/${album.id}/photos`)
            .then(res => res.json())
            .then(photos => {
                console.log(photos)
                console.log(photos.length)
                let randomIndex = Math.floor(Math.random()*photos.length);
                let photoThmb = document.createElement('img');
                photoThmb.src = photos[randomIndex].thumbnailUrl
                
                albumTitle.append(photoThmb)
                
            })
        })
    })
    // let albumAuthor = document.createElement('span')
    // albumAuthor.classList.add('album-author')
    // let albumItem = document.createElement('li')