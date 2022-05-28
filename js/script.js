
const navbar = document.querySelector('.movilidad');

window.addEventListener('scroll', function(){
    navbar.classList.toggle('active', this.window.scrollY > 0);
});


//cambiar icono cuando se pulsa la bandera
const butCat = document.getElementById("cat");
const butEsp = document.getElementById("esp");

butCat.addEventListener('click', ()=>{
    butCat.classList.add("languageActive");
    butEsp.classList.remove("languageActive");
});

butEsp.addEventListener('click', ()=>{
    butEsp.classList.add("languageActive");
    butCat.classList.remove("languageActive");
});

