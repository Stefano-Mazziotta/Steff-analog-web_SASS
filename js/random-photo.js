/* --------- Functions --------- */
/*
vertical_or_horizontal() -> String
Devuelve "vertical" u "horizontal" aleatoriamente.   */
function rndm_vertical_or_horizontal(){
    const   MIN = 1,
            MAX = 2;
            MAX_WIDTH = 840;
            MIN_WIDTH = 500;
            CONTAINER_IMG = document.getElementById('--js_fix-width');
    let randomNumber, widthWindow;

    randomNumber = Math.floor(Math.random() * ((MAX + 1) - MIN) + MIN);
    widthWindow = screen.width;

    if ( randomNumber == 1 ) {
        if (widthWindow <= MAX_WIDTH){
            CONTAINER_IMG.removeAttribute("style");
            CONTAINER_IMG.style.width = '100%';
        } else {
            CONTAINER_IMG.removeAttribute("style");
            CONTAINER_IMG.style.width = '70%';
        }
        return 'Horizontal';
    } else if ( randomNumber == 2 ) {
        if (widthWindow >= MIN_WIDTH && widthWindow <= MAX_WIDTH){
            CONTAINER_IMG.removeAttribute("style");
            CONTAINER_IMG.style.width = '65%';
        } else if (widthWindow < MIN_WIDTH){
            CONTAINER_IMG.removeAttribute("style");
            CONTAINER_IMG.style.width = '100%';
        } else {
            CONTAINER_IMG.removeAttribute("style");
            CONTAINER_IMG.style.width = '30%';
        }
        return 'Vertical';
    }
};

/*
rndm_generate() -> number
devuelve un número random entre 1 y 5 (cantidad de fotos en carpeta).   */ 
function rndm_generate() {
    let cantidadImages, randomNumber;
    const MINIMO = 1;
    
    cantidadImages = 5;

    randomNumber = Math.floor(Math.random() * ((cantidadImages + 1) - MINIMO) + MINIMO);
    return randomNumber;
};

/*
repeat_validator() -> string
- Si el new_src ya se encuentra en SRC html, obtiene un nuevo src.   
- Caso contrario devuelve el new_src   */
function repeat_validator(new_src) {
    let startURL, endURL, substrURL;
    const   IMAGE = document.getElementById('--js_random__img-id'),
            OLD_SRC = IMAGE.src;
    
    // Obtengo el src que necesito para la verificación.
    startURL = OLD_SRC.lastIndexOf("/components") + 1;
    endURL = OLD_SRC.length;
    substrURL = OLD_SRC.substring(startURL,endURL);
    
    // Si new_src es igual al HTML, devuelve un nuevo src.
    // Si no, devuelve el src que se creó inicialmente.
    if (substrURL == new_src) {
        while (substrURL == new_src){
            let orientation = rndm_vertical_or_horizontal();
            let randomNum = rndm_generate();
            new_src = `components/images/random_photo/${orientation}/${randomNum}.jpg`;
        }
        return new_src;
    } else {
        return new_src;
    }
}

/* --------- ✓ Functions ✓ --------- */

/* --------- script --------- */
window.addEventListener('load', ()=>{
    // accedo a los elementos botón e imágen.
    const   BUTTON = document.getElementById('--js_random__btn-id'),
            IMAGE = document.getElementById('--js_random__img-id');
    
    // cuando se haga click en el botón cambiar src de la imágen.
    BUTTON.onclick = () => {
        let orientation = rndm_vertical_or_horizontal();
        let randomNum = rndm_generate();
        // Creo new_src a partir de los valores random.
        new_src = `components/images/random_photo/${orientation}/${randomNum}.jpg`;
        // Verifico si new_src está en src HTML.
        new_src = repeat_validator(new_src)
        IMAGE.src = new_src;
    };
})


