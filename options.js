let page = document.getElementbyID("buttonDiv");

const ButtonCombos = [
	{work: 25, break: 5}, 
	{work: 45, break: 15},
	{work: 30, break: 15},
	{work: 60, break: 15}
];

function constructOps(combosList) {
	for (let item of combosList) {
		let button = document.createElement('button');
		button.innerHTML = "Work: " + item["work"] + " Break: " + item["break"];
		button.addEventListener('click', function() {
        chrome.storage.sync.set({work: item["work"], break: item["break"]}, function() {
          console.log("Work: " + item["work"] + " Break: " + item["break"]);
        })
      });
	}
}