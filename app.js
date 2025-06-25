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

// arrays of doctors
let doct= [
   {
    Id:Date.now(),
    name:'Dr abdi',
    specialist:'General doctor',
    src:'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGRvY3RvcnN8ZW58MHx8MHx8fDA%3D',
    experience:'i have more experience in general desieases'
   },
   {
    Id:Date.now(),
    name:'Dr Omer',
    specialist:'Inner specialist',
    src:'https://media.istockphoto.com/id/2205091537/photo/young-doctor-smiling-with-stethoscope-and-lab-coat.webp?a=1&b=1&s=612x612&w=0&k=20&c=GgpvCNZEB5NyVOeac5M_MUbIM_Xk91GrPevPKlNubgw=',
    experience:'i have more experience in general desieases'
   },
   {
    Id:Date.now(),
    name:'Dr abdi',
    specialist:'Dermatologist',
    experience: 'Treats skin, hair, and nail conditions such as acne, eczema, and skin cancer with both medical and cosmetic solutions.',
    src:'https://media.istockphoto.com/id/956401176/photo/portrait-of-happy-general-practitioner-pointing-with-finger.jpg?s=612x612&w=0&k=20&c=GOtyMLBlxffgau4f3brMNdkRJsd5jvJgxg-mNjpVF_w='
   },
   {
    Id:Date.now(),
    name:'Dr abdi',
    specialist: 'Cardiologist',
    experience: 'Expert in diagnosing and treating heart-related conditions such as hypertension, arrhythmias, and heart failure.',
    src:'https://media.istockphoto.com/id/956401176/photo/portrait-of-happy-general-practitioner-pointing-with-finger.jpg?s=612x612&w=0&k=20&c=GOtyMLBlxffgau4f3brMNdkRJsd5jvJgxg-mNjpVF_w='
   },
   {
    Id:Date.now(),
    name:'Dr abdi',
    specialist: 'Pediatrician',
    experience: 'Specializes in the care of infants, children, and adolescents, focusing on growth, development, and preventive care.',
    src:'https://media.istockphoto.com/id/956401176/photo/portrait-of-happy-general-practitioner-pointing-with-finger.jpg?s=612x612&w=0&k=20&c=GOtyMLBlxffgau4f3brMNdkRJsd5jvJgxg-mNjpVF_w='
   },
   {
    Id:Date.now(),
    name:'Dr abdi',
    specialist: 'Neurologist',
    experience: 'Experienced in managing disorders of the brain and nervous system, including epilepsy, migraines, and stroke recovery.',
    src:'https://media.istockphoto.com/id/956401176/photo/portrait-of-happy-general-practitioner-pointing-with-finger.jpg?s=612x612&w=0&k=20&c=GOtyMLBlxffgau4f3brMNdkRJsd5jvJgxg-mNjpVF_w='
   },
   {
    Id:Date.now(),
    name:'Dr abdi',
    specialist: 'Ophthalmologist',
    experience: 'Specialist in eye care, including vision correction, cataract surgery, and treatment of eye diseases.',
    src:'https://media.istockphoto.com/id/956401176/photo/portrait-of-happy-general-practitioner-pointing-with-finger.jpg?s=612x612&w=0&k=20&c=GOtyMLBlxffgau4f3brMNdkRJsd5jvJgxg-mNjpVF_w='
   },
   {
    Id:Date.now(),
    name:'Dr abdi',
    specialist: 'Gynecologist',
    experience: 'Focused on women’s reproductive health, including menstrual issues, fertility, and prenatal care.',
    src:'https://media.istockphoto.com/id/956401176/photo/portrait-of-happy-general-practitioner-pointing-with-finger.jpg?s=612x612&w=0&k=20&c=GOtyMLBlxffgau4f3brMNdkRJsd5jvJgxg-mNjpVF_w='
   },
   {
    Id:Date.now(),
    name:'Dr abdi',
    specialist: 'Orthopedic Surgeon',
    experience: 'Skilled in treating musculoskeletal issues such as fractures, joint pain, and sports injuries through surgical and non-surgical methods.',
    src:'https://media.istockphoto.com/id/956401176/photo/portrait-of-happy-general-practitioner-pointing-with-finger.jpg?s=612x612&w=0&k=20&c=GOtyMLBlxffgau4f3brMNdkRJsd5jvJgxg-mNjpVF_w='
   },
   {
    Id:Date.now(),
    name:'Dr abdi',
    specialist: 'Pulmonologist',
    experience: 'Expert in respiratory system conditions such as asthma, COPD, and chronic bronchitis.',
    src:'https://media.istockphoto.com/id/956401176/photo/portrait-of-happy-general-practitioner-pointing-with-finger.jpg?s=612x612&w=0&k=20&c=GOtyMLBlxffgau4f3brMNdkRJsd5jvJgxg-mNjpVF_w='
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
