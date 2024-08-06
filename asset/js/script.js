const menu = document.getElementById('hamburger-menu');
const nav = document.querySelector('.nav');

menu.addEventListener('click', function() {
    nav.classList.toggle('active');
});

document.body.addEventListener('click', function(e){
    if(!menu.contains(e.target) && !nav.contains(e.target)) {
        nav.classList.remove('active');
    };                                          
});