/*-------------------------------------------------- -----ANIMACION DE LA APERTURA DEL MENU DESPLEGABLE  --------*/
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.opcionesExtras');
    
    /* LLAMADA A CADA UNA DE LAS OPCIONES DEL MENU*/
    const navLinks = document.querySelectorAll('.nav-links li');
    //taggle 
    burger.addEventListener('click', ()=>{
    nav.classList.toggle('nav-active');
        
    //ANIMACION DE BURGER A CRUZ

    burger.classList.toggle('toggle');
    });

}

  navSlide();
  

  /*------------------------------------------------------------------*/





