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


const presentacion = document.getElementById('presentacion');

setTimeout(() => { 
    setTimeout(() => {
        presentacion.classList.add('animate__animated', 'animate__fadeOut');
        setTimeout(() => {
                presentacion.classList.add('hidden');
                
                /* Aquí es donde el resto de tu HTML (productos, botones, etc.)
                   subirá automáticamente porque "presentacion" ya no ocupa espacio.
                */
            }, 1000);
    }, 4000)
}, 6000);