const menu = document.querySelector('.menu');
const navigation = document.querySelector('.navigation');
const  i = document.querySelectorAll('i');

menu.addEventListener('click', function (){
    navigation.classList.toggle('active')
    menu.classList.toggle('active')
})


 function modeIcon(){
    i[0].toggleAttribute('data' );
    i[1].toggleAttribute( "data");

     document.body.classList.toggle('active');
//   saving dark into local storage
    if(document.body.classList.contains('active')){
        localStorage.setItem('mode','Dark')  
    }else{
         localStorage.setItem('mode','Light')
    }
}
// loadding dark /light in to localstorage
window.addEventListener('DOMContentLoaded',turnOn)
function turnOn(){
     // checking the local stroge
     const savemode = localStorage.getItem('mode')
    if(savemode === "Dark"){
        document.body.classList.add('active')
    }
}