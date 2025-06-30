const menu = document.querySelector('.menu');
const navigation = document.querySelector('.navigation');
const  i = document.querySelectorAll('i');
const  home = document.querySelector('#home');
const  h2 = document.querySelector('#h2');
const  h3 = document.querySelector('#h3');
const  para = document.querySelector('#par');
const  searchform = document.querySelector('#search-form');
const  Input = document.querySelector('#Input');
const  Divshow = document.querySelector('#Doctor-view');
const  FormBooking = document.querySelector('#FormBooking');
const  inputclass = document.querySelectorAll('.input-class');
const  consultBtn = document.querySelector('#consult-btn');
const  consultInput = document.querySelector('#consultInput');
const  showElement = document.querySelector('#showElement');
const  inputBtn = document.querySelector('#inputBtn');



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

// arrays of doctors
let doct= [
   {
    Id:Date.now(),
    name:'Drs Yusra',
    specialist:'General doctor',
    src:'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGRvY3RvcnN8ZW58MHx8MHx8fDA%3D',
    experience:'Experienced in providing primary care for a wide range of common health issues, from infections and minor injuries to preventive screenings and lifestyle counseling. Known for building strong patient relationships and offering holistic, first-line medical support for individuals and families.'
   },
   {
    Id:Date.now(),
    name:'Dr Omer',
    specialist:'Internal Medicine',
    src:'https://media.istockphoto.com/id/2205091537/photo/young-doctor-smiling-with-stethoscope-and-lab-coat.webp?a=1&b=1&s=612x612&w=0&k=20&c=GgpvCNZEB5NyVOeac5M_MUbIM_Xk91GrPevPKlNubgw=',
    experience:'Highly trained in diagnosing and managing complex adult health conditions involving multiple organ systems. With deep knowledge of internal organs and chronic diseases like diabetes, hypertension, and autoimmune disorders, this doctor provides comprehensive, long-term care and often serves as a consultant for other specialists.'
   },
   {
    Id:Date.now(),
    name:'Drs fatima',
    specialist:'Dermatologist',
    experience: 'Treats a wide range of skin, hair, and nail conditions. Offers both medical and cosmetic dermatology services, including acne treatment, mole evaluation, and skin cancer screening.',
    src:'https://plus.unsplash.com/premium_photo-1666299628536-7f8a9faf89e4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHx8'
   },
   {
    Id:Date.now(),
    name:'Dr abdi',
    specialist: 'Cardiologist',
    experience: 'Over 10 years of experience diagnosing and treating heart conditions such as arrhythmias, coronary artery disease, and hypertension. Skilled in using advanced imaging and non-invasive procedures to ensure accurate care.',
    src:'https://media.istockphoto.com/id/956401176/photo/portrait-of-happy-general-practitioner-pointing-with-finger.jpg?s=612x612&w=0&k=20&c=GOtyMLBlxffgau4f3brMNdkRJsd5jvJgxg-mNjpVF_w='
   },
   {
    Id:Date.now(),
    name:'Dr Kaynan',
    specialist: 'Pediatrician',
    experience: 'Dedicated to the health and development of children from infancy through adolescence. Experienced in managing childhood illnesses, vaccinations, and developmental screenings with a gentle, family-focused approach.',
    src:'https://plus.unsplash.com/premium_photo-1661306540580-1e6e374ecf9d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA0fHxtZW4lMjBkb2N0b3J8ZW58MHx8MHx8fDA%3D'
   },
   {
    Id:Date.now(),
    name:'Dr Yuusuf',
    specialist: 'Neurologist',
    experience: 'Specializes in disorders of the brain and nervous system, including epilepsy, migraines, and stroke recovery. Known for combining clinical precision with empathetic patient care.',
    src:'https://plus.unsplash.com/premium_photo-1661551575837-c38f0df699b0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D'
   },
   {
    Id:Date.now(),
    name:'Dr Ahmed',
    specialist: 'Ophthalmologist',
    experience: 'Provides comprehensive eye care, including vision correction, cataract surgery, and treatment for glaucoma and retinal diseases. Committed to preserving and restoring sight.',
    src:'https://images.unsplash.com/photo-1612363584451-cd060fb62018?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHNwZWNpYWxpc3QlMjBkb2N0b3J8ZW58MHx8MHx8fDA%3D'
   },
   {
    Id:Date.now(),
    name:'Drs Najma',
    specialist: 'Gynecologist',
    experience: 'Focused on women’s reproductive health, including menstrual issues, fertility, and prenatal care.',
    src:'https://images.unsplash.com/photo-1576669801945-7a346954da5a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D'
   },
   {
    Id:Date.now(),
    name:'Dr Hussein',
    specialist: 'Orthopedic Surgeon',
    experience: 'Expert in treating bone and joint conditions, including fractures, arthritis, and sports injuries. Performs both surgical and non-surgical interventions to restore mobility and reduce pain.',
    src:'https://media.istockphoto.com/id/1047519500/photo/tell-me-if-this-hurts-at-all.jpg?s=612x612&w=0&k=20&c=EPa4ifEa_6XcHHCwsZj_BYDPPeDNfkdQtajkdGi99ks='
   },
   {
    Id:Date.now(),
    name:'Dr faarax ',
    specialist: 'Pulmonologist',
    experience: 'Specialist in lung and respiratory conditions such as asthma, COPD, and chronic bronchitis. Uses advanced diagnostics and personalized treatment plans to improve breathing and quality of life.',
    src:'https://plus.unsplash.com/premium_photo-1658506671316-0b293df7c72b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZG9jdG9yfGVufDB8fDB8fHww'
   },
   
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

// search form
searchform.addEventListener('submit',function(e){
    e.preventDefault();

    let search = doct.filter(name =>name.specialist === Input.value )
   const n = search.find(name => name)
   const el = document.createElement('div')
   el.classList.add('flex')
   el.innerHTML=`
        <div class="inf-img"> 
             <img src=${n.src} alt="" >
        </div
         <p>${n.name}</p>
         <p id="special">${n.specialist}</p>
         <button id="fl-btn">View More</button>
   `
//    console.log(n.src);

   Divshow.appendChild(el)
   Input.value ='';
   // selecting element
   let btn = el.querySelector('#fl-btn');
   let special = el.querySelector('#special');
  
   // this will handle the elements
    Handlebtn(btn, special)
})
function Handlebtn(btn ,id){
    let search = doct.filter(name => name.specialist == id.textContent)
    const Elem =search.find(name => name)
 
   //  btn
    btn.addEventListener('click', function(){
       const model  = document.querySelector("#model");
      const modelContent = document.querySelector('#model-content');

     model.style .display = 'block';
     modelContent.innerHTML=`
        <span id="spanId">&times;</span> 
        <h3>Hi im ${Elem.name}</h3>
        <p>Specialist : ${Elem.specialist}</p>
        <div>Specialised in ${Elem.experience}</div>
     `
      const span = document.querySelector('#spanId')
       clickSpan(span)
    })
}
function clickSpan(span){
   span.addEventListener('click', function(){
       model.style.display ='none'
   })
}
// add to click window to cancell model
window.addEventListener('click', (e)=>{
  if(e.target === model){
     model.style.display ='none'
  }
})
// showing thanks when booking submited
FormBooking.addEventListener('submit', function(e){
   e.preventDefault();
   // to show the thank
  setTimeout(function(){
      const mdl = document.querySelector('#mdl');
      mdl.style.display = "block"
   },600)
   // to hide the thans
   setTimeout(function(){
      const mdl = document.querySelector('#mdl');
      mdl.style.display = "none"
   },3000)
 const textarea = document.querySelector('#message');
 inputclass[0].value =''
 inputclass[1].value =''
 inputclass[2].value =''
 textarea.value =''
})

// adding consult button function
consultBtn.addEventListener('click',function(){
   showElement.classList.toggle('active')
})


// inputbuuton add click event
  inputBtn.addEventListener('click',async function DataIpa(){
  const url = `https://free-chatgpt-api.p.rapidapi.com/chat-completion-one?prompt=${consultInput.value}`;
 const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '6768778030mshc876ccacf122b5ep1655d5jsn80c07f388628',
		'x-rapidapi-host': 'free-chatgpt-api.p.rapidapi.com',
      'X-RateLimit-Reset': 1691172000

	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
	console.log(result);
   displayResult(result)
} catch (error) {
	console.error(error);
}
   consultInput.value=''
  })

  function displayResult(doct){
   const div = document.createElement('div');
    div.classList.add('medical');
    div.innerHTML =`
       <p>massage : <span class="content-span">${doct.message}</span></p>
       <p>recommendations: <span class="content-span">${doct.recommendations[0]}hello</span></p>

    `
    showElement.appendChild(div)
  }