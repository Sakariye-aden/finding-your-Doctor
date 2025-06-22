const menu = document.querySelector('.menu');
const navigation = document.querySelector('.navigation');
const  i = document.querySelectorAll('i');
const  home = document.querySelector('#home');
const  h2 = document.querySelector('#h2');
const  h3 = document.querySelector('#h3');
const  para = document.querySelector('#par');


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
       title1:'Your Health,',
       title2:'Our Priority..',
       par:' We care about your health Even the all-powerful.'
    },
     {
       src:'https://media.istockphoto.com/id/2207690669/photo/friendly-female-doctor-smiling-during-a-consultation-in-a-bright-office-setting.jpg?s=612x612&w=0&k=20&c=j-BFQS309Mj8WXUh9CJx-n1O2_aTWcNEN2c4Ot0jf-8=',
       title1:'We care .',
       title2:'About Your Health.',
       par:'your Health is our Top priority every day we Bring hope and Happy into the patient'
    },
     {
       src:'https://plus.unsplash.com/premium_photo-1663047486871-0670d42f7fad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDQwfHx8ZW58MHx8fHx8',
       title1:'The Most Valuable.',
       title2:'Thing is Your Health',
       par:'Advanced medicine. Personalized treatment.'
    }     
]
let indx = 0;

setInterval(() => {
   indx++;
   if(indx >= data.length){
     indx = 0
      home.style.backgroundImage=`url(${data[indx].src})`
      h2.textContent = data[indx].title1;
      h3.textContent = data[indx].title2;
     para.textContent = data[indx].par
      return
   }
   home.style.backgroundImage=`url(${data[indx].src})`
     h2.textContent = data[indx].title1;
     h3.textContent = data[indx].title2;
     para.textContent = data[indx].par;
    
},3000)

// home.style.backgroundImage=`url(${data[0].src})`
