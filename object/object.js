//chap1
/*var programmer ={
    fullName : 'Piyathida Choojan',
    age :19,
    call :'0863115961',
    skills : ['HTML','CSS'],
    //methot
    showData : function(){
        return 'my name is'+this.fullName;
    }
}

console.log(programmer.fullName+' '+programmer.skills[0]);

programmer.age=20;
console.log(programmer.age);

console.log(programmer.showData());*/

//chap2
var programmer ={
    fullName : 'Piyathida Choojan',
    age :19,
    call :'0863115961',
    skills : ['HTML','CSS'],
    //methot
    showData : function(){
        return 'my name is'+this.fullName;
    }
}

for (var prop in programmer){
    console.log(prop);
}


for (var prop in programmer){
    console.log(programmer[prop]);
}