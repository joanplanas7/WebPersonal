
const navbar = document.querySelector('.movilidad');

window.addEventListener('scroll', function(){
    navbar.classList.toggle('active', this.window.scrollY > 0);
});
