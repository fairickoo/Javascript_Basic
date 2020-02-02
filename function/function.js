function add (num1,num2){
    var result=num1+num2;
    document.write(result);
}

add(10,5);

function getMessage(msg){
    return 'Hello'+msg;
}
document.write(getMessage('fuck'));

var showName = function(){
    document.write('FAI');
}
showName();