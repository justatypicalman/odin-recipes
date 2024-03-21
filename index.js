let answer = parseInt(
  prompt("Please enter the number you would like to FizzBuzz up to: ")
);

for (let i = 0; i < answer; i++) {
  if (i == 0) {
    continue;
  }
  document.getElementById("answer").innerHTML =
    document.getElementById("answer").textContent + " " + i;
}
document.getElementById("answer").innerHTML =
  document.getElementById("answer").textContent + ". <br />";
let names = ["Roy", "Eric", "Michael"];
for (let i = 0; i < names.length; i++) {
  if (names[i] == "Eric") {
    continue;
  } else {
    document.getElementById("answer").innerHTML =
      document.getElementById("answer").textContent + " " + names[i];
  }
}
