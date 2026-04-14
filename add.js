let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset-bin");
let msgcontainer=document.querySelector(".msgcontainer");
let msg=document.querySelector("#msg");
let newGameBtn=document.querySelector(".newbtn");

let turn0=true;
let count=0;
const winPatterns=[
  [0,1,2],
  [0,3,6],
  [0,4,8],
  [1,4,7],
  [2,5,8],
  [2,4,6],
  [3,4,5],
  [6,7,8],
  

];
const resetGame=()=>{

  turn0=false;
  count=0;
  enableBoxes();
  msgcontainer.classList.add("hide");
};

boxes.forEach((box)=>{

box.addEventListener("click","touchstar",()=>{
  //let iswinner=checkWinner();//

console.log("this was button");
if(turn0===true){
box.innerText="O";
box.style.fontSize="100px";
box.style.paddingLeft="20px";

turn0=false;


}else{


 box.innerText="X";
  turn0=true;
  box.style.fontSize="100px";
box.style.paddingLeft="20px";
//box.style.paddingBotton="50px";//
//box.style.paddingTOP="40px";//
//box.style.paddingRight="20px";//
//box.style.justifyContent="ceter";//
//box.style.display="flex";//



}
box.disabled=true;
count++;
 

let iswinner=  checkWinner();

if(!iswinner&&  count===9){
gamedraw();

}




})

});




const gamedraw=()=>{
  msg.innerText='Game was a Draw.';
  msgcontainer.classList.remove("hide");
  disabledBoxes();

};
const disabledBoxes=()=>{
  for(let box of boxes){
    box.disabled=true;
    box.innerText="";

  }

};
const enableBoxes=()=>{

for(let box of boxes){
box.disabled=false;

box.innerText="";

}

};
const showWinner=(winner)=>{

msg.innerText=`Congralution,Winner is ${winner}`;
msgcontainer.classList.remove("hide");
disabledBoxes();


};
const checkWinner=()=>{

for (let pattern of winPatterns){

  let pos1Val=boxes[pattern[0]].innerText;
  let pos2Val=boxes[pattern[1]].innerText;
  let pos3Val=boxes[pattern[2]].innerText;

  if(pos1Val!=""&&pos2Val!=""&&pos3Val!=""){

if(pos1Val===pos2Val&&pos2Val===pos3Val){

  showWinner(pos1Val);
  return true;
}

  }
}
return false;
};
newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);
