const s1=document.getElementById("s1")
const s2=document.getElementById("s2")
const s3=document.getElementById("s3")
const s4=document.getElementById("s4")

function movexl(el,x,y){
    let id= null;
    clearInterval(id)
    let posl =x
    
    el.style.left=posl+"px";
    id=setInterval(frame, 1);
    function frame(){
        if(posl ==0){
            clearInterval(id)
            el.style.top=0+"px"
        }else{
            posl -=y
            el.style.left=posl+"px"
        }
        
        
        console.log(el.style.top)
    }
}
function movexr(el ,x,y){
    let id= null;
    clearInterval(id)
    let posl =-x
    
    el.style.left=posl+"px";
    id=setInterval(frame, 1);
    function frame(){
        if(posl ==0){
            clearInterval(id)
            el.style.top=0+"px"
        }else{
            posl +=y
            el.style.left=posl+"px"
        }
        
        
        console.log(el.style.top)
    }
}
function movez(el ,x){
    let id= null;
    clearInterval(id)
    let posl =-1200
    
    el.style.left=posl+"px";
    id=setInterval(frame, 1);
    function frame(){
        if(posl ==0){
            clearInterval(id)
            el.style.top=0+"px"
        }else{
            posl +=x
            el.style.left=posl+"px"
        }
        
        
        console.log(el.style.top)
    }
}



movexl(s1,1500,4)
movexr(s2,1200,5)
movexl(s3,1200,5)
movexr(s4,1500,4)

const portfoliocont = document.getElementById("portfoliocont")
const infocont=document.getElementById("infocont")
const certficatescont=document.getElementById("certficatescont")
const info=document.getElementById("info")
const portfolio=document.getElementById("portfolio")
const certificats=document.getElementById("certificats")
window.onload=(start)
function start(){
    portfoliocont.style.display="block";
}


var frames = [portfoliocont,infocont,certficatescont]
portfolio.addEventListener("click",show1)
function show1(){
    frames.forEach(frame => {
        frame.style.display="none"
    });
    portfoliocont.style.display="block"
}
info.addEventListener("click",show2)
function show2(){
    frames.forEach(frame => {
        frame.style.display="none"
    });
    infocont.style.display="block"
}
info.addEventListener("click",show3)
function show3(){
    frames.forEach(frame => {
        frame.style.display="none"
    });
    certficatescont.style.display="block"
}