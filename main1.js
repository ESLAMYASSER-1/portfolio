export function movexl(el,x,y){
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
        
        
    }
}
export function movexr(el ,x,y){
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
        
        
        
    }
}

export const s1=document.getElementById("s1")
export const s2=document.getElementById("s2")
export const s3=document.getElementById("s3")
export const s4=document.getElementById("s4")

movexl(s1,1500,4)
movexr(s2,1200,5)
movexl(s3,1200,5)
movexr(s4,1500,4)
