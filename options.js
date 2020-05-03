let page = document.getElementById("buttonDiv");

let btn1 =  document.getElementById("btn1");
let btn2 =  document.getElementById("btn2");
let btn3 =  document.getElementById("btn3");
let btn4 =  document.getElementById("btn4");


btn1.addEventListener('click', function() {
	console.log("Work: 25, Break: 5");
	chrome.storage.sync.set({work: 25, break: 5}, function() {
  		console.log("Work: 25, Break: 5");
	})
});

btn2.addEventListener('click', function() {
	chrome.storage.sync.set({work: 45, break: 15}, function() {
  		console.log("Work: 45, Break: 15");
	})
});

btn3.addEventListener('click', function() {
	chrome.storage.sync.set({work: 30, break: 15}, function() {
  		console.log("Work: 30, Break: 15");
	})
});

btn4.addEventListener('click', function() {
	chrome.storage.sync.set({work: 60, break: 15}, function() {
  		console.log("Work: 60, Break: 15");
	})
});
		

