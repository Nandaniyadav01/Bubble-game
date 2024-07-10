let hitrn=0;
let score=0;
function createBubble(){
    let temp="";
    for(let i=0;i<90;i++){
     temp+=`<div class="bubble"> ${Math.floor(Math.random()*10)}</div>`;
         
    }
    document.querySelector("#bottum").innerHTML=temp;
}


let timer=60;
let id =setInterval(()=>{
    if(timer>=0){
        document.querySelector("#timer").textContent=timer;
        timer--;
    }
    else{
        clearInterval(id);
        document.querySelector("#bottum").innerHTML=`<h2>Your Score is ${score} <\h2>`;
    }

},1000);

function newHit(){
    hitrn=Math.floor(Math.random()*10);
    document.querySelector("#hit").innerHTML=hitrn;
}
 function newScore(){
     score+=10;
     document.querySelector("#score").innerHTML=score;
}

document.querySelector("#bottum").addEventListener("click",(btn)=>{
    let clickedVal=btn.target.textContent;
    if(clickedVal==hitrn){
        newHit();
        createBubble();
        newScore();
    }
    else{
        clearInterval(id);
        document.querySelector("#bottum").innerHTML=`<h2>Your Score is ${score} <\h2>`;
    }
});
createBubble();
newHit();


