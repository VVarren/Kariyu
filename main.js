const choices = document.querySelectorAll(".choice");
let player = 0;
let computer = 0;
let a = ["Rock", "Paper", "Snip"];

function getComputerChoice() {
	let number = Math.random() * 3;
	number = Math.floor(number);
	console.log(number);
	return a[number];
}

choices.forEach(function (choice) {
	choice.onclick = function (e) {
		console.log(choice.dataset.name);
		const computerChoice = getComputerChoice();
		const playerChoice = choice.dataset.name;
		if (computerChoice == playerChoice) {
			alert("you tied");
		} else if (
			(playerChoice == "Rock" && computerChoice == "Snip") ||
			(playerChoice == "Paper" && computerChoice == "Rock") ||
			(playerChoice == "Snip" && computerChoice == "Paper")
		) {
			player += 1;
			alert("player wins");
		} else {
			computer += 1;
			alert("computer wins");
		}
	};
});
