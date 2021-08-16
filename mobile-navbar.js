
/*função para o menu hamburguer*/

const btnMobile = document.getElementById('checkbox-menu');

function toggleMenu(){
    if (event.type ==='touchstart') event.preventDefault
    const nav = document.getElementById('nav');  
    nav.classList.toggle('active');
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstat', toggleMenu)
