let queryParams = document.location.search;
let urlParams = new URLSearchParams(queryParams);
let userId = urlParams.get('user_id');

let usersListWrapper = document.querySelector('.users-list-wrapper');
let usersList = document.createElement('ul')

usersListWrapper.append(usersList)

fetch(`https://jsonplaceholder.typicode.com/users` )
    .then(response => response.json())
    .then(users => {
        users.map((user)=>{
            let userItem = document.createElement('li')
            userItem.innerHTML = `<a href="./user.html?user_id=${user.id}">${user.name}</a>`
                                

            usersList.append(userItem)
        })
    })