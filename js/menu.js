const menuToggle=document.querySelector('.icon-menu');
const showcase=document.querySelector('.detalles');
    menuToggle.addEventListener('click',()=>{
    menuToggle.classList.toggle('active');
    showcase.classList.toggle('active');
})
