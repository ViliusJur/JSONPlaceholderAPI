let queryParams = document.location.search;
let urlParams = new URLSearchParams(queryParams);
let userId = urlParams.get('user_id');
// let postId = urlPost.get('post_id')


let userPostsWrapper = document.querySelector('.user-posts-wrapper');
let postsListTitle = document.createElement('h2');
let postsList = document.createElement('ul');

userPostsWrapper.append(postsListTitle, postsList)

fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then(response => response.json())
    .then(users => {
        let userName = users.name
        postsListTitle.textContent =`Posts of: ${userName}`
    })
    
 

fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
    .then(response => response.json())
    .then(posts => {
        
        posts.map((post)=> {
            console.log(post)
            let listItem = document.createElement('li')
           listItem.innerHTML = `<a href="./post.html?post_id=${post.id}&user_id=${userId}"> ${post.title} </a>`

            postsList.append(listItem)
        })
    })