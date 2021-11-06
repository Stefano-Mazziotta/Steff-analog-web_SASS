/* --- Mostrar arrow-up cuando este por debajo del header. --- */
window.addEventListener('load', () => {
    // Cada vez que el usuario haga scroll ejecutará el bloque.  
        window.onscroll = () => {
        const   appearElement = 950,
                scrollUpContainer = document.getElementById('--js_scroll-up__container');

        let positionY;
        // obtengo la posición del usuario en pantalla.
        positionY = window.scrollY;
        
        // si la posición es menor a 950, no mostrará el elemento.
        // sino mostrará el elemento.
        if (positionY < appearElement){
            scrollUpContainer.classList.remove('active');
            
        } else {
            scrollUpContainer.classList.add('active');
        }
    }
});