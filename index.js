// 1. Sukurti puslapį, kuriame bus atvaizduojami įrašai (posts). Kiekvienas įrašas turi:
//   1.1. Pavadinimą.
//   1.2. Pastraipą su įrašo (post) turiniu.

let postWraper = document.querySelector('.posts-wrapper');
let albumListWrapper = document.querySelector('.album-list-wrapper');



fetch('https://jsonplaceholder.typicode.com/posts?_limit=15')
  .then((response) => response.json())
  .then((posts) => {

  posts.map((post) => {
    let postItem = document.createElement('div');
    postItem.classList.add('post-item');
    let postTitleElement = document.createElement('h2');
    postTitleElement.classList.add('title');
    let postContentElement = document.createElement('p');
    postContentElement.classList.add('post-content');
    let userIdElement = document.createElement('span');
    userIdElement.classList.add('userId');
    let commentsWraper = document.createElement('div');
    commentsWraper.classList.add('commentsWraper');
    let commentButton = document.createElement('button');
    commentButton.classList.add('show-comment');



        commentButton.textContent = 'Show Comments';
        postTitleElement.textContent = post.title;
        postContentElement.textContent = post.body;

        postWraper.append(postItem, commentButton, commentsWraper);
          postItem.append(postTitleElement, userIdElement, postContentElement);

          fetch('https://jsonplaceholder.typicode.com/users/' + post.userId)
          .then((response) => response.json())
          .then((user) => {
                userIdElement.innerHTML = (`Author: <a href="./user.html?user_id=${user.id}">${(user.name)} </a>`);

            })

            commentButton.addEventListener ('click',() => {
              if (commentButton.classList.contains('hide-comment')){
                  commentsWraper.innerHTML = ""
                  commentButton.textContent = 'Show Comment'
                  commentButton.classList.toggle('hide-comment')
      
                }  
              else {
                fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
                .then((response) => response.json())
                .then((comments) => {
                  comments.map((comment)=> {
                  
                    let commentElement = document.createElement('div')
                    commentElement.classList.add('comment')
                    commentElement.innerHTML = `<h4> Name: ${comment.name} </h4>
                                                <span> Comment by: ${comment.email} </span>
                                                <p> ${comment.body} </p>
                                                <br>`
    
                    commentsWraper.append(commentElement)
                    commentButton.textContent = 'Hide Comments'
                    commentButton.classList.toggle('hide-comment')
          
                  })
                })
              }
              
            }) 

            
    })

    

    fetch('https://jsonplaceholder.typicode.com/albums?_limit=15')
      .then((response) => response.json())
      .then((albums) => {
        albums.map((album)=>{
          console.log(album.title)
          let albumItem = document.createElement('div');
          albumItem.classList.add('album-item')
          
          fetch('https://jsonplaceholder.typicode.com/users/' + album.userId)
          .then(res => res.json())
          .then(user => {
            
            
            fetch(`https://jsonplaceholder.typicode.com/albums/${album.id}/photos?_limit=1`)
            .then(res => res.json())
            .then(photos =>{
              console.log(photos)
              albumItem.innerHTML = `<h4><a href="./album.html?album_id=${album.id}&album_title=${album.title}&user_id=${user.id}&user_name=${user.name}">${album.title}</h4>
                                      <div> Album created by: ${user.name} </div>
                                        <img src="${photos[0].thumbnailUrl}">`
              })
        })
        albumListWrapper.prepend(albumItem)
      })
    })
  })
//   5. Pagrindiniame (index.html) puslapyje pridėti skiltį, kurioje atvaizduojamas albumų sąrašas. Kiekvienas albumas turės:
//     5.1. Pavadinimą, o paspaudus ant jo - nukreipiama į albumą (album.html).
//     5.2. Albumo autoriaus vardą.
//     5.3. Nuotrauką.

