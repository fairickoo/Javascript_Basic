//else- if
var fai ='fai';
var pumz='fai';
var num=22;
if (num===22){
   // alert("yes");
}
else{
   // alert("No")
}


/*var randonNumber= Math.floor(Math.random()*5)+1;
var inputgame=prompt("input number 1-5");
console.log(randonNumber);
if (parseInt(inputgame)===randonNumber){
    document.write('<h2>YOU WON</h2>');
}
else{
    document.write('<h2>YOU LOST</h2>');
}


//*************************************** */
//loop

var inputNumberLoop=prompt("input Jaa");
for (var x=0;x<5;x++){
    console.log(inputNumberLoop);
    document.write(inputNumberLoop+'<br>  ');
}
var i=2;
while(i>=2){
    i=i+2;
    document.write(i);
    if (i==16){
        document.write('stop');
        break;
    }
}

var s=0;
do{
    s=s+6
    document.write(s);
}while(s<=36);
document.write('stop');