let cominp = Math.floor(Math.random()*10);
let guess = false 

for(let i =1; i<=3; i++){
let number = Number(prompt(`Attempt ${i} : guess a number between 1 and 10`));
    if (cominp === number){
        alert("you won bro")
        guess = true;
        break;
    }else{
       if(i < 3){
        alert(`wrong guess you have ${3-i} attempts left`);
       }
    }
  }
  
  if (!guess){
    alert(`game over the number picked by the computer was ${cominp}`);
  }


