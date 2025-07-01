const authForm = document.querySelector('#authForm');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirmPassword');
const authButton = document.querySelector('#authButton');
const authSwitch = document.querySelector('#authSwitch');
const switchForm = document.querySelector('#switchForm');
const formtitle = document.querySelector('#form-title');


document.body.addEventListener('click', (e)=>{
    if(e.target.id !== 'switchForm') return;
      switchBtn()
})
let signin = false;
function switchBtn(){
   signin = !signin

   if(signin){
       authButton.textContent ='sign up'
       formtitle.textContent ='sign up'
       username.style .display = 'block'
       confirmPassword.style .display = 'block'
       authSwitch.innerHTML=`Already have an acount ? <a hreff = "#" id="switchForm">sign In</a>`
   }else{
       authButton.textContent ='sign In'
       formtitle.textContent ='sign In'
       username.style .display = 'none'
       confirmPassword.style .display = 'none'
       username.value = ''
       email.value = ''
       password.value = ''
       confirmPassword.value = ''
       authSwitch.innerHTML=`New to Medico ?<a hreff = "#" id="switchForm" >Register</a>`
   }
}

authForm.addEventListener('submit', function (e){
    e.preventDefault();
  const user = {
    username:!signin ? undefined : username.value ,
    email:email.value,
    password:password.value,
  }
  

   if(!signin){
     const users = JSON.parse(localStorage.getItem('users'))|| [];
     const existinguser = users.find((user) => user.email == email.value  && user.password == password.value);
       if(existinguser){
          localStorage.setItem('onlineUser', JSON.stringify(existinguser));
          window.location.href="index.html";
       }else{
             alert('invalid credentials')
             return
       }
   }else{
      
     const users = JSON.parse(localStorage.getItem('users'))|| [];
     const existinguser = users.find((user) => user.username == username.value  && user.email == email.value);
       if(existinguser){
          alert(`user ${existinguser.username} Already exists`)
          return
       }
       if(confirmPassword.value !== password.value){
         alert("password mismatch")
         return
     }

     users.push(user)
      localStorage.setItem('users', JSON.stringify(users))  
      alert('registration succesfullly')
       switchBtn()
   }


})