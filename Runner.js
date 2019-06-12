const LS = window.location.href.split(".");

if(LS[LS.length-1].toUpperCase() === "JS")CompileJS();


chrome.runtime.onMessage.addListener(messaeHandler);
function messaeHandler (msg, sender, res){
	if(msg.code === "CompileJS"){
		CompileJS();
	}
}

function CompileJS(){
	let code = document.body.innerText;
	document.body.innerHTML = "";
	let script = document.createElement("script");
	script.innerHTML = code;
	document.body.appendChild(script);
}