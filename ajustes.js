const logo = document.getElementById('logo-animado');

setTimeout(() => {
    
    logo.classList.add('animate__fadeOut');
    
    setTimeout(() => {
        logo.classList.add('hidden');    
    }, 500);

}, 3500); 


const presentacion = document.getElementById('presentacion');

setTimeout(() => { 
    setTimeout(() => {
        presentacion.classList.add('animate__animated', 'animate__fadeOut');
        setTimeout(() => {
                presentacion.classList.add('hidden');
            }, 500);
    }, 1000)
}, 2000);

const barra = document.getElementById('barra-nav');

setTimeout(() => { 
    setTimeout(() => {
        barra.classList.add('animate__animated', 'animate__fadeIn');
        setTimeout(() => {
                barra.classList.remove('hidden');
            }, 500);
    }, 1000)
}, 2000);

