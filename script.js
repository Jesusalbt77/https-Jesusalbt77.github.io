var typed = new Typed("#typing", {

strings:[
"Software Engineering Student",
"Web Developer",
"Backend Developer"
],

typeSpeed:60,
backSpeed:40,
loop:true

})

AOS.init({
duration:1000
})

const toggle=document.getElementById("themeToggle")

toggle.onclick=function(){
document.body.classList.toggle("light")
}

window.addEventListener("scroll", function(){

const navbar=document.querySelector(".navbar")

if(window.scrollY>50){

navbar.style.background="rgba(15,23,42,0.95)"
navbar.style.backdropFilter="blur(10px)"
navbar.style.boxShadow="0 10px 30px rgba(0,0,0,0.4)"

}else{

navbar.style.background="transparent"
navbar.style.boxShadow="none"

}

})

const sections=document.querySelectorAll("section")
const navLinks=document.querySelectorAll(".nav-links a")

window.addEventListener("scroll",()=>{

let current=""

sections.forEach(section=>{

const sectionTop=section.offsetTop-200
const sectionHeight=section.clientHeight

if(scrollY>=sectionTop){
current=section.getAttribute("id")
}

})

navLinks.forEach(link=>{

link.classList.remove("active")

if(link.getAttribute("href")==="#"+current){
link.classList.add("active")
}

})

})

const skills=document.querySelectorAll(".bar span")
const skillSection=document.querySelector("#skills")

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

skills.forEach(skill=>{

let value=skill.getAttribute("data-skill")
skill.style.width=value+"%"

})

}

})

})

observer.observe(skillSection)

const cursor=document.querySelector(".cursor")

document.addEventListener("mousemove",(e)=>{

cursor.style.left=e.clientX+"px"
cursor.style.top=e.clientY+"px"

})

const repoContainer=document.getElementById("repos")

fetch("https://api.github.com/users/Jesusalbt77/repos")

.then(res=>res.json())

.then(data=>{

data.forEach(repo=>{

const card=document.createElement("div")

card.classList.add("repo-card")

card.innerHTML=`

<h3>${repo.name}</h3>
<p>${repo.description || "Proyecto en GitHub"}</p>
<a href="${repo.html_url}" target="_blank">Ver código</a>

`

repoContainer.appendChild(card)

})

})

particlesJS("particles-js",{

particles:{
number:{value:80},
size:{value:3},
color:{value:"#38bdf8"},
line_linked:{enable:true},
move:{speed:2}
}

})