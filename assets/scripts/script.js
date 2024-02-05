window.addEventListener("load", (event) => {
	setInterval(() => {
		countdown();
	});
});

function countdown() {
	const curentDate = new Date().getTime();
	const endDate = new Date("2025/1/1 00:01:00").getTime();
	const gapTime = endDate - curentDate;
	
	const second = 1000; 
	const minute = second * 60;
	const hour = minute * 60;
	const day = hour * 24;

	const cDay = Math.floor(gapTime / day);
	const cHour = Math.floor((gapTime % day) / hour);
	const cMinute = Math.floor((gapTime % hour) / minute);
	const cSecond = Math.floor((gapTime % minute) / second);
	
	// console.log(cDay);
	// console.log(cHour);
	// console.log(cMinute);
	// console.log(cSecond);
	
	updateView(cDay, cHour, cMinute, cSecond);
}

function updateView(dayValue, hourValue, minuteValue, secondValue) {
	const dayView = document.querySelector("#day");
	const hourView = document.querySelector("#hour");
	const minuteView = document.querySelector("#minute");
	const secondView = document.querySelector("#second");
	
	dayView.innerText = dayValue;
	hourView.innerText = hourValue;
	minuteView.innerText = minuteValue;
	secondView.innerText = secondValue;
}
