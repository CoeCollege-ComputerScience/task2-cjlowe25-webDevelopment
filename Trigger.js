
function noSubmit(component){
	var sbmt = document.getElementById("btnSubmit");
	if (component.value){
		sbmt.disabled = false;	
	}
	else{
		sbmt.disabled = true;
	}
}

document.getElementById("someData").oninput = function(){
	noSubmit(this);
}

function hello(){
	alert("Hello World!");
}

var button = document.getElementById("button1");
button.addEventListener("click", hello)

document.getElementById("button3").onclick = hello;

document.onload = function(){
	hello();
}

document.getElementById("text").onpaste = hello;
document.getElementById("text").oncopy = hello;
document.getElementById("prompt").onchange = hello;