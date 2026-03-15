// EMAILJS INIT
(function(){
emailjs.init("YOUR_k2-3QiBGwgy_VuVr3");
})();

// CONTACT FORM

const form = document.getElementById("contactForm");
const msg = document.getElementById("msg");

form.addEventListener("submit", function(e){

e.preventDefault();

emailjs.sendForm(
"service_ngih3ki",
"template_93zsfnc",
this
).then(function(){

msg.innerText="Message Sent Successfully!";
msg.style.color="lightgreen";
form.reset();

}, function(){

msg.innerText="Failed to send message!";
msg.style.color="red";

});

});


// TYPING ANIMATION

const text = ["Web Developer","Programmer","Student"];

let count=0;
let index=0;
let currentText="";
let letter="";

function type(){

if(count===text.length){
count=0;
}

currentText=text[count];
letter=currentText.slice(0,++index);

document.getElementById("typing").textContent=letter;

if(letter.length===currentText.length){
count++;
index=0;
}

setTimeout(type,150);

}

type();


// SCROLL ANIMATION

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){
entry.target.classList.add("show");
}

});

});

document.querySelectorAll(".hidden")
.forEach(el=>observer.observe(el));


// PARTICLES BACKGROUND

particlesJS("particles-js",{
particles:{
number:{value:80},
color:{value:"#ffffff"},
shape:{type:"circle"},
opacity:{value:0.5},
size:{value:3},
line_linked:{
enable:true,
distance:150,
color:"#ffffff",
opacity:0.4,
width:1
},
move:{
enable:true,
speed:3
}
},

interactivity:{
events:{
onhover:{
enable:true,
mode:"repulse"
}
}
},

retina_detect:true
});