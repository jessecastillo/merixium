import React from "react";
import "../components/CallingCard.css"


function CallingCard(){

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

document.querySelector("h3").onmouseover = event => {
  let iterations = 0
  
  const interval = setInterval(() => {
    event.target.innerText = event.target.innerText.split("")
    .map((_letter, index) => {
    if(index < iterations ) {
      return event.target.dataset.value[index];
    }
    
    return letters[Math.floor(Math.random() * 26)]
  })
  .join("");
   
  if(iterations >= event.target.dataset.value.length){
    clearInterval(interval);
    
  }
    
   iterations += 1 / 3;
    
  }, 30);
}

}

export default CallingCard
