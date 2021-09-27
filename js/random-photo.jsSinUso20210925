/* --------- Functions --------- */
/*
rndm_vertical_or_horizontal() -> String
Devuelve "vertical" u "horizontal" aleatoriamente.   */
function rndm_vertical_or_horizontal(){
    const MIN = 1;
    const MAX = 2;
    let randomNumber;

    randomNumber = Math.floor(Math.random() * ((MAX + 1) - MIN) + MIN);

    if ( randomNumber == 1 ) {
        return 'Horizontal';
    } else if ( randomNumber == 2 ) {        
        return 'Vertical';
    }
};

/*
rndm_generate() -> number
devuelve un número random entre 1 y 5 (cantidad de fotos en carpeta).   */ 
function rndm_generate() {
    let cantidadImages, randomNumber;
    const MINIMO = 1;
    
    cantidadImages = 26;

    randomNumber = Math.floor(Math.random() * ((cantidadImages + 1) - MINIMO) + MINIMO);
    return randomNumber;
};

/*
repeat_validator() -> string
- Si el new_src ya se encuentra en SRC html, obtiene un nuevo src.   
- Caso contrario devuelve el new_src   */
function repeat_validator(new_src) {
    const IMAGE = document.getElementById('--js_random__img-id');
    const OLD_SRC = IMAGE.attributes[1]; // obtengo el src actual del sitio.
    
    // Si new_src es igual al HTML, devuelve un nuevo src.
    // Si no, devuelve el src que se creó inicialmente.
    if (OLD_SRC == new_src) {
        while (OLD_SRC == new_src){
            let orientation = rndm_vertical_or_horizontal();
            let randomNum = rndm_generate();
            new_src = `components/images/random_photo/${orientation}/${randomNum}.jpg`;
        }
        return new_src;

    } else {
        return new_src;
    }
}

/*  responsiveHorizontal()
    Modifica el width del contenedor img.
    Adapta la imágen HORIZONTAL según el tamaño del dispositivo.
*/
function responsive_horizontal(){
    const LAPTOP = "1024px";
    let breakpoint = matchMedia(`(max-width:${LAPTOP})`);
    
    if(breakpoint.matches){
        CONTAINER_IMG.style.setProperty('width', "100%");
    } else{
        CONTAINER_IMG.style.setProperty('width', "70%");
    }
}

/*  responsiveVertical()
    Modifica el width del contenedor img.
    Adapta la imágen VERTICAL según el tamaño del dispositivo.
*/
function responsive_vertical(){
    const mobile = "425px";
    const tablet = "768px";
    const laptop = "1024px";
    const laptopL = "1440px";
    const desktopXL = "2560px";

    let breakpoint_mobile = matchMedia(`(max-width:${mobile})`);
    let breakpoint_tablet = matchMedia(`(max-width:${tablet})`);
    let breakpoint_laptop = matchMedia(`(max-width:${laptop})`);
    let breakpoint_laptopL = matchMedia(`(max-width:${laptopL})`);
    let breakpoint_desktopXL = matchMedia(`(max-width:${desktopXL})`);
    

    if(breakpoint_mobile.matches){
        CONTAINER_IMG.style.setProperty('width', "100%");
    } else if (breakpoint_tablet.matches){
        CONTAINER_IMG.style.setProperty('width', "70%");
    } else if (breakpoint_laptop.matches){
        CONTAINER_IMG.style.setProperty('width', "50%")
    } else if(breakpoint_laptopL.matches){
        CONTAINER_IMG.style.setProperty('width', "35%")
    } else if(breakpoint_desktopXL.matches) {
        CONTAINER_IMG.style.setProperty('width', "30%")
    }
}
/* --------- ✓ Functions ✓ --------- */

/* --------- script --------- */
// accedo a los elementos botón e imágen.
const BUTTON = document.getElementById('--js_random__btn-id');
const CONTAINER_IMG = document.getElementById('--js_random__img-container');
const IMAGE = document.getElementById('--js_random__img-id');

// cuando se haga click en el botón cambiar src de la imágen.
BUTTON.addEventListener('click', () => {
    let orientation = rndm_vertical_or_horizontal();
    let randomNum = rndm_generate();

    // Creo new_src a partir de los valores random.
    new_src = `components/images/random_photo/${orientation}/${randomNum}.jpg`;
    // Verifico si new_src está en src HTML.
    new_src = repeat_validator(new_src); 
    // Si la orientación es horizontal, llamo a la función responsiveHorizontal().
    // Si la orientación es vertical, llamo a la función responsiveVertical().
    IMAGE.setAttribute("src",new_src);
    if (orientation == "Horizontal") {
        responsive_horizontal();
    } else {
        responsive_vertical();
    }
});