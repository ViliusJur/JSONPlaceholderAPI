let queryParams = document.location.search;
let urlParams = new URLSearchParams(queryParams);
let userId = urlParams.get('user_id');

let userInfoWrapper = document.querySelector('.user-info-wrapper');

    fetch('https://jsonplaceholder.typicode.com/users/' + userId)
        .then((response)=> response.json())
        .then((user)=> {
          
            let userItem = document.createElement('div');
            userItem.classList.add('user-item');
            
            userInfoWrapper.append(userItem);
            
            let fullNameElement = document.createElement('div');
            fullNameElement.classList.add('full-name');
            let usernameElement = document.createElement('div');
            usernameElement.classList.add('username');
            let emailElement= document.createElement('div');
            emailElement.classList.add('email');
            let addressElement = document.createElement('div');
            addressElement.classList.add('address');
            let streetElement = document.createElement('div');
            streetElement.classList.add('street');
            let suiteElement = document.createElement('div');
            suiteElement.classList.add('suite');
            let cityElement = document.createElement('div');
            cityElement.classList.add('city');
            let zipcodeElement = document.createElement('div');
            zipcodeElement.classList.add('zipcode');
            let phoneElement = document.createElement('div');
            phoneElement.classList.add('phone');
            let websiteElement = document.createElement('div');
            websiteElement.classList.add('website');
            let companyNameElement = document.createElement('div');
            companyNameElement.classList.add('company-name');

            
            userItem.append(fullNameElement, usernameElement, emailElement, addressElement, phoneElement, websiteElement, companyNameElement)
            addressElement.append(streetElement, suiteElement, cityElement, zipcodeElement)

                fullNameElement.textContent =`Name: ${user.name}` ;
                usernameElement.textContent = `Username: ${user.username}`;
                emailElement.textContent = `Email: ${user.email}`;
                addressElement.innerHTML = `<a href=http://www.google.com/maps/place/${user.address.geo.lat},${user.address.geo.lng} target="_blank">ADDRESS<a> <br>
                                            Street: ${streetElement.textContent = user.address.street} <br>
                                            Suite: ${suiteElement.textContent = user.address.suite} <br>
                                            City: ${cityElement.textContent = user.address.city} <br>
                                            Zipcode: ${zipcodeElement.textContent = user.address.zipcode}`;
                phoneElement.textContent = `Phone: ${user.phone}`;
                websiteElement.textContent = `Website: ${user.website}`
                companyNameElement.textContent = `Company Name: ${user.company.name}`                   

        
    })


let userPostWrapper = document.querySelector('.user-post-wrapper');
userPostWrapper.innerHTML = '<h3><strong>User posts:</strong></h3>'

    fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
      .then(res => res.json())
      .then((posts) => {
        
        
          posts.map((post) => {
            
            let userPostItem = document.createElement('div');
            userPostItem.classList.add('post-item');
            userPostWrapper.append(userPostItem)

            
            
           userPostItem.innerHTML = `<a href="./post.html?user_id=${post.userId}&post_id=${post.id}" target="_blank"> <h4>${post.title}<h4></a>
                                    <p>${post.body}</p>
                                    `
                                    
          })
      })

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
                  albumTitle.innerHTML = `<a href="#">${album.title}</a> <br>`
      
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

    //   let userAlbumsWrapper = document.querySelector('.user-albums-wrapper')
    //     let userAlbumsList = document.createElement('button');
    //     userAlbumsList.classList.add('albums-button');
    //     userAlbumsList.textContent = 'User albums';
    //     userAlbumsWrapper.append(userAlbumsList)

    //   userAlbumsList.addEventListener('click',() => {

        // location.href = `./albums.html?user_id=${userId}`
  
    //   })





  
