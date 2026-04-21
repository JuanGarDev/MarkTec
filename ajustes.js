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
const categorias = document.getElementById('categorias');
const productos = document.getElementById('productos')

setTimeout(() => { 
    setTimeout(() => {
        barra.classList.add('animate__animated', 'animate__fadeIn');
        categorias.classList.add('animate__animated', 'animate__fadeIn');
        productos.classList.add('animate__animated', 'animate__fadeIn');
        setTimeout(() => {
                barra.classList.remove('hidden');
                categorias.classList.remove('hidden');
                productos.classList.remove('hidden');
            }, 500);
    }, 1000)
}, 2000);



const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        } else {
            entry.target.classList.remove('visible');
        }
    });
}, {
    threshold: 0.5 
});

const cajas = document.querySelectorAll('.animacion');
cajas.forEach(caja => observer.observe(caja));