// Accedo a cada elemento necesario a modificar.
const   open_btn = document.getElementById('js-open-btn'),
        overlay = document.getElementById('js-overlay'),
        popup = document.getElementById('js-popup'),
        close_btn = document.getElementById('js-close-btn');

/* === al hacer click sobre el icon mail abre el popup ===*/
open_btn.addEventListener('click', ()=>{
    overlay.classList.add('active');
    popup.classList.add('active');
});

/* === al hacer click sobre la cruz del popup, oculta el contenido. ===*/
close_btn.addEventListener('click', ()=>{
    // overlay.className = 'overlay';
    // popup.className = 'popup-container';
    overlay.classList.remove('active');
    popup.classList.remove('active');

})

/* === Si das click en el popup no lo cierra pero al hacer click sobre el overlay, oculta el contenido. ===*/
overlay.addEventListener('click', () => {
    
    if (event.target.closest('.popup-container')){
        return
    }
    else {
        overlay.classList.remove('active');
        popup.classList.remove('active');
    }
})


