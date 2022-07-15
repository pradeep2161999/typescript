/* //if statement
let num: number = 5;
if( num > 0){
    console.log("positive");
}
//if else statement
let num : number = 10;
if (num% 2 ===0){
    console.log("even");
}
else{
    console.log("odd");
}
else if statement
let num : number = 2;
if (num <0){
    console.log("negative");
}
else if(num > 0){
    console.log("positive");
}
else{
    console.log("equal")
}
//Switch statement 
let grade : string = "l";
switch(grade){
    case "A":{
        console.log("Excellent");
        break;
        
    }
    case "B":{
        console.log("good");
        break;
    }
    case "c":{
        console.log("Fair");
        break;
    }
    case "D":{
        console.log("bad");
        break;
    }
    case "E":{
        console.log("poor");
        break;
    }
    default:{
        console.log("invalid");
        break;
    }
} */
let n = 10;
do {
   console.log(n);
   n--;
} while (n >= 0);