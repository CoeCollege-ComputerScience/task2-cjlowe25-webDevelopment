document.getElementById("creditCardForm").onsubmit = function(){
    console.log("Starting:");
var valid = true;
var number = document.getElementById("creditCardNumber").value;
var sum = 0;
if (number.length !== 16){
    valid = false;
    console.log("not 16 characters");
}
var list = Array.from(number, Number);
for (var i = 14; i > -1; i -= 2){
    console.log("numbers doubled: " + list[i]);
        list[i] = list[i] * 2;
        if (list[i] > 9){
            list[i] -= 9;
        }
    }
for (var j = 0; j < 16; j++){
    sum += list[j];
}
if (sum % 10 !== 0){
    valid = false;
    console.log("not divisible by 10");
}
alert(valid);
return valid;
}