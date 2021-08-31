const menu = document.querySelector('#mobile-menu')
const menuinks = document.querySelector('.navbar-menu')

menu.addEventListener('click', () => {
    menu.classList.toggle('is-active');
    menuinks.classList.toggle('active');
})

window.onunload = (e) => {
    window.localStorage.setItem('theme', 'dark');
}

//body class
let bodythemeClass = document.querySelector('body');
//checkbox value
let checkbox = document.getElementById('theme-color');
checkbox.addEventListener('change', function(event) {
    bodythemeClass.classList.remove('dark');
    bodythemeClass.classList.remove('light');
    let themeColor = window.localStorage.getItem('theme');
    if (themeColor == null) {
        window.localStorage.setItem('theme', 'light');
        themeColor = window.localStorage.getItem('theme');
    } else if (themeColor == 'light') {
        window.localStorage.removeItem('theme')
        window.localStorage.setItem('theme', 'dark');
        themeColor = window.localStorage.getItem('theme');
    }  else if(themeColor = 'dark') {
        window.localStorage.removeItem('theme');
        window.localStorage.setItem('theme', 'light');
        themeColor = window.localStorage.getItem('theme');
    }

    bodythemeClass.classList.add(themeColor);
    console.log(bodythemeClass.classList.value);
})
