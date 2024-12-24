let gameSeq=[];
let userSeq=[];
let btns=["yellow",'green','red','blue'];

let start=false;
let level = 0;
let h3 = document.querySelector("h3");

document.addEventListener("keypress",function(){

    
   if(start==false){
    console.log(" game started");
    start=true;
    levelUp();
   }
});


function levelUp(){
 userSeq =[]   
 level++;
 h3.innerText=`Level ${level}`;

 let randIndex=Math.floor(Math.random()*3);
 let randColor=btns[randIndex];
 
 let randBtn = document.querySelector(`.${randColor}`);
 gameSeq.push(randColor);
 console.log(gameSeq)
 gameFlash(randBtn);
 
}

function gameFlash(btn){
 btn.classList.add("gameFlash");

 setTimeout(function(){
    btn.classList.remove("gameFlash");
 },250);
}

function userFlash(btn){
    btn.classList.add("userFlash");

    setTimeout(function(){
    btn.classList.remove("userFlash");
 },250);
}

function checkAns(idx){
    if(userSeq[idx]==gameSeq[idx]){

      if(userSeq.length==gameSeq.length){
        setTimeout(levelUp,1000);
      }
    }else{
        // console.log("game over,press any ket to start game!")
    h3.innerHTML = `Game Over! Your score was <b>${level}</b> <br> Press any key to start.`;
    document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function () {
        document.querySelector("body").style.backgroundColor = "#272727";
        }, 150);
     reset();
    }
}
function btnPress(){

    let btn = this;
    
    userFlash(btn);
    let userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
}


let allbtns = document.querySelectorAll(".btn");
for(btn of allbtns){

        btn.addEventListener("click",btnPress);

     }

function reset(){
  console.log("game reset");  
  start= false;
  gameSeq = [];
  userSeq = [];
  level = 0;
}     