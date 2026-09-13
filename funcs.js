var type = "f";
var currentNum = 50;

document.getElementById("random").onclick = function(){
	currentNum = Math.floor(Math.random() *100);
	// document.getElementById("result").innerHTML = num;
	document.getElementById("temperature").value = currentNum;
	if (currentNum >= 70){
		document.getElementById("temperature").style.color = "red";
	}
	else if (currentNum <= 32){
		document.getElementById("temperature").style.color = "blue";
	}
	else {
		document.getElementById("temperature").style.color = "black";
	}
	
};

document.getElementById("f2c").onclick = function(){
	if (type === "f"){
		result.innerHTML = currentNum;
	}
	else {
		result.innerHTML = (currentNum - 32) / 1.8 + "";
		type = "c";
	}
};

document.getElementById("c2f").onclick = function(){
	if (type === "c"){
		result.innerHTML = currentNum;
	}
	else {
		result.innerHTML = ((currentNum - 32) * (5 / 9)) + "";
		type = "f";
	}
};

document.getElementById("CF").onclick = function(){
	if (currentNum >= 70){
		clothesWear.innerHTML = "Wear short sleeves";
	}
	else if (currentNum <= 32){
		clothesWear.innerHTML = "Wear a coat";
	}
	else {
		clothesWear.innerHTML = "Wear anything neutral";
	}
};




