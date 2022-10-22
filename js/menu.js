const menu = document.querySelector('.menu');
const menunavegacion = document.querySelector('.menu-navegacion');

menu.addEventListener('click', ()=>{
    menunavegacion.classList.toggle("spread")
})
window.addEventListener('click', e=>{
    if(menunavegacion.classList.contains('spread')
        && e.target !=menunavegacion && e.target != menu){
        
        menunavegacion.classList.toggle("spread")
    }

})