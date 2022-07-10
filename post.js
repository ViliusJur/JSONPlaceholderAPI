let queryParams = document.location.search;
let urlParams = new URLSearchParams(queryParams);
let userId = urlParams.get('user_id');
let postId = urlParams.get('post_id');

let postInfo = document.querySelector('.post-info')

let userPostItem = document.createElement('div');
userPostItem.classList.add('user-post-item');
let postTitleElement = document.createElement('h2');
postTitleElement.classList.add('title');
let postContentElement = document.createElement('p');
postContentElement.classList.add('post-content');
let userIdElement = document.createElement('span');
userIdElement.classList.add('userId');
let commentsWraper = document.createElement('div');
commentsWraper.classList.add('commentsWraper');
let otherPostButton = document.createElement('button');
otherPostButton.classList.add('other-post-button');
otherPostButton.textContent = 'Other posts';
  

    postInfo.append(userPostItem, commentsWraper);
    userPostItem.append(postTitleElement, userIdElement, postContentElement, otherPostButton);

fetch(`https://jsonplaceholder.typicode.com/posts/` + postId)
  .then((response) => response.json())
  .then((post) => {
    

    postTitleElement.textContent = post.title;
    postContentElement.textContent = post.body;


          fetch('https://jsonplaceholder.typicode.com/users/' + userId)
          .then((response) => response.json())
          .then((user) => {
                userIdElement.innerHTML = (`Author: <a href="./user.html?user_id=${userId}">${(user.name)} `);

              })

                fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
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
                  })
                })
          
            
  }) 

  otherPostButton.addEventListener ('click', () => {
    location.href = `./posts.html?user_id=${userId}&post_id=${postId}`
  })