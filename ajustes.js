const logo = document.getElementById('logo-animado');
const texto = document.getElementById('texto-bienvenida');

setTimeout(() => {
    
    logo.classList.add('animate__fadeOut');
    
    setTimeout(() => {
        logo.classList.add('hidden');    
        texto.classList.remove('hidden'); 
        
        texto.classList.add('animate__animated', 'animate__fadeInUp');
    }, 500);

}, 3000); 