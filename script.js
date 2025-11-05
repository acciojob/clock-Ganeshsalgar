//your JS code here. If required.
function updataTimer(){
	let now =new Date().toLocaleString();
	document.getElementById("timer").textContent = now;
}

updataTimer();

setInterval(updataTimer , 1000);