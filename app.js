const menu = document.querySelector('.menu');
const navigation = document.querySelector('.navigation');
const  i = document.querySelectorAll('i');
const  home = document.querySelector('#home');


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
// this is array is foe home section images/contents
const data = [
     {
       src:'https://plus.unsplash.com/premium_photo-1681843058031-838bccab8578?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1pbi1zYW1lLXNlcmllc3wyfHx8ZW58MHx8fHx8',
       title1:'Your Health, Our Priority.',
       title2:'Advanced medicine. Personalized treatment. A healthier future starts here.',
       par:' We care about your health Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life.'
    },
     {
       src:'https://plus.unsplash.com/premium_photo-1663047486871-0670d42f7fad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDQwfHx8ZW58MHx8fHx8',
       title1:'We care About Your Health .',
       title2:'Modern Care, Human Touch.',
       par:'your Health is our Top priority every day we Bring hope and Happy into the patient'
    },
     {
       src:'https://plus.unsplash.com/premium_photo-1661963499288-6fb42255c983?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDgzfHx8ZW58MHx8fHx8',
       title1:'The Most Valuable Thing is Your Health',
       title2:'Advanced medicine. Personalized treatment. A healthier future starts here.',
       par:'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.'
    }     
]
let indx = 0;

// setInterval(() => {
//    indx++;
//    if(indx >= data.length){
//      indx = 0
//       home.style.backgroundImage=`url(${data[indx].src})`
//       h2.textContent = data[indx].title;
//      p.textContent = data[indx].par
//       return
//    }
//    home.style.backgroundImage=`url(${data[indx].src})`
//      h2.textContent = data[indx].title;
//      p.textContent = data[indx].par;
    
// },3000)

// home.style.backgroundImage=`url(${data[0].src})`
console.log(data[0].src);
console.log(home);