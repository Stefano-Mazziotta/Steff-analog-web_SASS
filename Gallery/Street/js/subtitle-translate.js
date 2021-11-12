// Accedo a cada elemento. (btn y subtitle). También declaro los textos a utilizar.
const SUBTITLE = document.getElementById('--js_subtitle');
const btnEN = document.getElementById('--js_btn-EN');
const btnES = document.getElementById('--js_btn-ES');
const btnKR = document.getElementById('--js_btn-KR');

const TXT_EN = '"Ephemeral moments.<br>Time and space seen through my eyes.<br> Everything that surrounds me."';
const TXT_ES = '"Momentos efímeros.<br>El tiempo y espacio que observan mis ojos.<br>Lo que me rodea."';
const TXT_KR = '"일시적인 순간.<br>내 눈으로 본 시간과 공간.<br>나를 둘러싼 모든 것."';

// --- functions --- //
// changeTxt_to_english() --->
// --- Modifica el HTML DOM, cambiando el contenido de la etiqueta a english y le añade la clase .activate . --- //
function changeTXT_to_english(){
    SUBTITLE.innerHTML = TXT_EN;
    btnEN.classList.add("active");
}

// changeTxt_to_english() --->
// --- Modifica el HTML DOM, cambiando el contenido de la etiqueta a spanish y le añade la clase .activate . --- //
function changeTXT_to_spanish(){
    SUBTITLE.innerHTML = TXT_ES;
    btnES.classList.add("active");
}

// changeTxt_to_english() --->
// --- Modifica el HTML DOM, cambiando el contenido de la etiqueta a korean y le añade la clase .activate . --- //
function changeTXT_to_korean(){
    SUBTITLE.innerHTML = TXT_KR;
    btnKR.classList.add("active");
}
// --- (:functions:) --- //

btnEN.addEventListener('click', ()=>{
    if(btnEN.classList.contains("active")){
        return;
    } else{
        changeTXT_to_english();
        btnES.classList.remove('active');
        btnKR.classList.remove('active');
    }
});

btnES.addEventListener('click', ()=>{
    if(btnES.classList.contains("active")){
        return;
    } else{
        changeTXT_to_spanish();
        btnEN.classList.remove('active');
        btnKR.classList.remove('active');
    }
});

btnKR.addEventListener('click', ()=>{
    if(btnKR.classList.contains("active")){
        return;
    } else{
        changeTXT_to_korean();
        btnEN.classList.remove('active');
        btnES.classList.remove('active');
    }
});