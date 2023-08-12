import {movexl,movexr} from "./main1.js"

/*for the import*/

const s1=document.getElementById("s1")
const s2=document.getElementById("s2")
const s3=document.getElementById("s3")
const s4=document.getElementById("s4")

/*-------------------*/


const portfoliocont = document.getElementById("portfoliocont")
const infocont=document.getElementById("infocont")
const certficatescont=document.getElementById("certficatescont")
const contactcont=document.getElementById("contactcont")
const othercont=document.getElementById("othercont")

const portfolio=document.getElementById("portfolio")
const info=document.getElementById("info")
const certificats=document.getElementById("certificats")
const contact=document.getElementById("contact")
const other=document.getElementById("other")

window.onload=(start)
function start(){
    portfoliocont.style.display="block";
}


var frames = [portfoliocont,infocont,certficatescont,contactcont,othercont]



portfolio.addEventListener("click",show1)
function show1(){
    frames.forEach(frame => {
        frame.style.display="none"
    });
    portfoliocont.style.display="block"
    movexl(s1,1500,4)
    movexr(s2,1200,5)
    movexl(s3,1200,5)
    movexr(s4,1500,4)
}
info.addEventListener("click",show2)
function show2(){
    frames.forEach(frame => {
        frame.style.display="none"
    });
    infocont.style.display="block"
}
certificats.addEventListener("click",show3)
function show3(){
    frames.forEach(frame => {
        frame.style.display="none"
    });
    certficatescont.style.display="block"
}
contact.addEventListener("click",show4)
function show4(){
    frames.forEach(frame => {
        frame.style.display="none"
    });
    contactcont.style.display="block"
}
other.addEventListener("click",show5)
function show5(){
    frames.forEach(frame => {
        frame.style.display="none"
    });
    othercont.style.display="block"
}