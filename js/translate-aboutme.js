//accedo a los elementos a modificar.
const txt_light = document.getElementById('--js_txt-light');
const txt_strong = document.getElementById('--js_txt-strong');
const btn_EN = document.getElementById('--js_btn-EN');
const btn_ES = document.getElementById('--js_btn-ES');
const btn_KR = document.getElementById('--js_btn-KR');

//declaro las constante texto.
// texto en ingles. Light & Strong. 
const TXT_EN_LIGHT = "My name is Stefano Mazziotta. Artistic photographer.<br> I started in this wonderful world with the Minolta Hi-Matic 7s camera, inherited from my grandfather.<br>";
const TXT_EN_STRONG = "Through this website you will navigate the immense ocean of my analog photographs and you will be able to soak up unparalleled feelings.";

// texto en español. Light & Strong.
const TXT_ES_LIGHT = "Me llamo Stefano Mazziotta. Fotógrafo artístico.<br> Comencé en este maravilloso mundo con la cámara Minolta Hi-Matic 7s, heredada de mi abuelo.<br>"; 
const TXT_ES_STRONG = "A través de esta web navegarás el inmenso océano de mis fotografías analógicas y podrás empaparte de sentimientos inigualables."; 

// texto en korean. Light & Strong.
const TXT_KR_LIGHT = "제 이름은 스테파노 마치오타입니다. 예술 사진 작가. 나는 할아버지로부터 물려받은 Minolta Hi-Matic 7s 카메라와 함께 이 멋진 세상에서 시작했습니다.<br>";
const TXT_KR_STRONG = "이 웹사이트를 통해 내 아날로그 사진의 거대한 바다를 탐색하고 비교할 수 없는 감정을 흡수할 수 있을 것입니다.";

/*=============== functions ===============*/
// changeTxt_to_spanish() --->
// --- Modifica el HTML DOM, cambiando el contenido de la etiqueta a spanish y le añade la clase .activate . --- //
function changeTxt_to_spanish(){
    txt_light.innerHTML = TXT_ES_LIGHT;
    txt_strong.innerHTML = TXT_ES_STRONG;
    btn_ES.classList.add('activate');
}

// changeTxt_to_english() --->
// --- Modifica el HTML DOM, cambiando el contenido de la etiqueta a english y le añade la clase .activate . --- //
function changeTxt_to_english(){
    txt_light.innerHTML = TXT_EN_LIGHT;
    txt_strong.innerHTML = TXT_EN_STRONG;
    btn_EN.classList.add('activate');
}

// changeTxt_to_korean() --->
// --- Modifica el HTML DOM, cambiando el contenido de la etiqueta a korean y le añade la clase .activate . --- //
function changeTxt_to_korean(){
    txt_light.innerHTML = TXT_KR_LIGHT;
    txt_strong.innerHTML = TXT_KR_STRONG;
    btn_KR.classList.add('activate');
}
/*=============== (:functions:) ===============*/

// agrego evento "click" al btn_ES para traducir el texto al español.
btn_ES.addEventListener('click', ()=>{
    if(btn_ES.classList.contains('activate')){
        return;
    } else {
        btn_EN.classList.remove('activate');
        btn_KR.classList.remove('activate');
        changeTxt_to_spanish();
    }
});

// agrego evento "click" al btn_EN para traducir el texto al inglés.
btn_EN.addEventListener('click', ()=>{
    if(btn_EN.classList.contains('activate')){
        return;
    } else {
        btn_ES.classList.remove('activate');
        btn_KR.classList.remove('activate');
        changeTxt_to_english();
    }
});

// agrego evento "click" al btn_KR para traducir el texto al coreano.
btn_KR.addEventListener('click', ()=>{
    if(btn_KR.classList.contains('activate')){
        return;
    } else {
        btn_ES.classList.remove('activate');
        btn_EN.classList.remove('activate');
        changeTxt_to_korean();
    }
});