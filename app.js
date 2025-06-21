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
}