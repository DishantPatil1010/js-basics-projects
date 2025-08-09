let score = 0;

let q1 = prompt("what is the capital of maharshtra")
if(q1 === 'mumbai'){
    alert("your anw is correct ")
    score ++
} else {
    alert("sorry ! wrong anw")
}

let q2 = Number(prompt("2+5=?"))
if(q2 === 7){
    alert("your anw is correct ")
    score ++
} else {
    alert("sorry ! wrong anw")
}

let q3 = prompt("who is a pime minister of india")
if(q3 === "narendra modi"){
    alert("your anw is correct ")
    score ++
} else {
    alert("sorry ! wrong anw")
}

let q4 = prompt("who is leading indian test team in cricket")
if(q4 === "gill"){
    alert("your anw is correct ")
    score ++
} else {
    alert("sorry ! wrong anw")
}
  
alert(`you got ${score} out of 4`)