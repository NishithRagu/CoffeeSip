window.addEventListener("DOMContentLoaded",function(){

// Responsive Nav bar

const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('nav.nav');
const navlink = document.querySelectorAll('.nav a');

hamburger.addEventListener("click",() =>{
    hamburger.classList.toggle("active");
    nav.classList.toggle('join');
})


// close menu when any of the link is clicked

navlink.forEach(link =>{
    link.addEventListener("click",() =>{
        nav.classList.remove("join");
        hamburger.classList.toggle("active");
    });
});

// show and password

const password = document.querySelector("#passkey");
const eye = document.querySelector("#eye");

eye.addEventListener("click",function(){
    this.classList.toggle("fa-eye");
    this.classList.toggle("fa-eye-slash");

    if(password.type === "password"){
        password.type = "text";
    }
    else{
        password.type = "password"
    }
})

// Login popup and close popup

const lognav = document.getElementById("log-nav");  
    lognav.addEventListener("click",function(event){
    event.preventDefault();
document.querySelector(".lgbox").classList.toggle("show");

});

// close popup

document.getElementById("close").addEventListener("click",function(){
    document.querySelector(".lgbox").classList.remove("show");

    setTimeout(()=>{
        login.style.opacity = '1';
        login.style.transform = 'translateX(0)';

        input.forEach(inputs =>{
            inputs.style.opacity = '1';
            inputs.style.transform = 'translateX(0)';
        })

        forget.style.opacity = '1';
        forget.style.transform = 'translateX(0)';

        lgbtn.style.opacity = '1';
        lgbtn.style.transform = 'translateX(0)';

        lgbtn.style.pointerEvents = 'auto';
        successfull.classList.remove('attach');
        donelogo.classList.remove('tick');
        goback.style.pointerEvents = 'none';
        goback.classList.remove('attach');
    },500)
})


// swiper

// const slider = document.querySelector('.slider');
// const next = document.querySelector('.next');
// const prev = document.querySelector('.prev');

// let index = 0;

// next.addEventListener("click",() =>{
//     if (index < slider.children.length-1){
//         index++;
//         slider.style.transform = `translateX(-${index * 100}%)`;
//     }
// });

// prev.addEventListener("click",() =>{
//     if (index > 0){
//         index--;
//         slider.style.transform = `translateX(-${index * 100}%)`;
//     }
// });


// login successful

const lgform = document.getElementById('lgform');
const lgbtn = document.getElementById('lgbtn');
const login = document.getElementById('login');
const input = document.querySelectorAll('.inpbox');
const forget = document.getElementById('forget');
const successfull = document.getElementById('login-msg');
const goback = document.getElementById('goback');
const lgbox = document.querySelector('.lgbox');
const donelogo = document.getElementById('done-logo');


document.getElementById('lgform').addEventListener("submit",function(event){

    event.preventDefault();
    if(!lgform.checkValidity()){
        event.preventDefault();
    }

    else{

    login.style.opacity = '0';
    login.style.transform = 'translateX(-50%)';

    input.forEach(inputs =>{
        inputs.style.opacity = '0';
        inputs.style.transform = 'translateX(-50%)';
    })

    forget.style.opacity = '0';
    forget.style.transform = 'translateX(-50%)';

    lgbtn.style.opacity = '0';
    lgbtn.style.transform = 'translateX(-50%)';

    lgbtn.style.pointerEvents = 'none';
    successfull.classList.add('attach');
    donelogo.classList.add('tick');
    goback.style.pointerEvents = 'auto';
    goback.classList.add('attach');
    }

})

// refreshing entire login form
goback.addEventListener('click', ()=>{
    lgbox.classList.remove("show");

    setTimeout(()=>{
        login.style.opacity = '1';
        login.style.transform = 'translateX(0)';

        input.forEach(inputs =>{
            inputs.style.opacity = '1';
            inputs.style.transform = 'translateX(0)';
        })

        forget.style.opacity = '1';
        forget.style.transform = 'translateX(0)';

        lgbtn.style.opacity = '1';
        lgbtn.style.transform = 'translateX(0)';

        lgbtn.style.pointerEvents = 'auto';
        successfull.classList.remove('attach');
        donelogo.classList.remove('tick');
        goback.style.pointerEvents = 'none';
        goback.classList.remove('attach');
    },500)

})

// reset all input boxes
lognav.addEventListener("click",()=>{
    document.getElementById('lgform').reset();
})


})
