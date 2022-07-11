let header = document.createElement('header')
document.body.prepend(header);

let nav = document.createElement('nav')
let searchForm = document.createElement('form')
header.append(nav, searchForm)


let navList = document.createElement('ul')
nav.append(navList)
let navItem = document.createElement('li')
navItem
let searchInput = document.createElement('input')
searchInput.setAttribute('type', 'text')
let searchSubmit = document.createElement('input')
searchSubmit.setAttribute('type', 'submit')
searchSubmit.value = ('Search')
searchForm.append(searchInput, searchSubmit)

let navigationItem = [
    {
        title:'Home',
        path:'index.html'
    },
    {
        title:'Users',
        path:'users.html'
    },
    {
        title:'Albums',
        path:'albums.html'
    },
    {
        title:'Posts',
        path:'posts.html'
    }
]



navigationItem.map((item)=>{
    let navItemElement = document.createElement('li')
    let navItemLink = document.createElement('a')
    navItemLink.setAttribute('href', `./${navItem.path}`);

    navItemLink.textContent = item.title


    navList.append(navItemElement)
    navItemElement.append(navItemLink)
})



