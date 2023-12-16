
const navbar = document.querySelector('.movilidad');

window.addEventListener('scroll', function(){
    navbar.classList.toggle('active', this.window.scrollY > 0);
});

//cambiar icono cuando se pulsa la bandera
const butCat = document.getElementById("cat");
const butEsp = document.getElementById("esp");
const butIng = document.getElementById("ing");

butCat.addEventListener('click', ()=>{
    butCat.classList.add("languageActive");
    butEsp.classList.remove("languageActive");
    butIng.classList.remove("languageActive");
    changeLanguage("cat");
});

butEsp.addEventListener('click', ()=>{ 
    butEsp.classList.add("languageActive");
    butCat.classList.remove("languageActive");
    butIng.classList.remove("languageActive");
    changeLanguage("es");
});

butIng.addEventListener('click', ()=>{
    butIng.classList.add("languageActive");
    butCat.classList.remove("languageActive");
    butEsp.classList.remove("languageActive");
    changeLanguage("ing");
});


//cambiar idioma
const textsChange = document.querySelectorAll("[data-section]");

const changeLanguage = async (language)=>{
    console.log('Este es un mensaje de registro en la consola.');
    const json = await fetch(`./languages/${language}.json`);
    const text = await json.json();
    for (let textChange of textsChange){
        const section = textChange.dataset.section;
        const value = textChange.dataset.value;
        textChange.innerHTML = text[section][value];
        
    }
};
