
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




const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){
entry.target.classList.add("show");
}

});

});

document.querySelectorAll(".hidden")
.forEach(el=>observer.observe(el));



const skillSection=document.querySelector("#skills");

const skillObserver=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

document.querySelector(".html").style.width="90%";
document.querySelector(".css").style.width="85%";
document.querySelector(".js").style.width="75%";
document.querySelector(".java").style.width="80%";

}

});

});

skillObserver.observe(skillSection);




fetch("https://api.github.com/users/anishdas6704-svg/repos")

.then(response=>response.json())

.then(data=>{

const container=document.getElementById("github-projects");

data.slice(0,6).forEach(repo=>{

const card=document.createElement("div");

card.className="card";

card.innerHTML=`
<h3>${repo.name}</h3>
<p>${repo.description || "No description available."}</p>
<a href="${repo.html_url}" target="_blank">View Project</a>
`;

container.appendChild(card);

});

});



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