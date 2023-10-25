const userAnswer_1 = prompt("Скільки буде 2+2?");
const userAnswer_2 = prompt("Сонце встає на сході?");
const userAnswer_3 = prompt("Скільки буде 5 / 0?");
const userAnswer_4 = prompt("Якого кольору небо?");
const userAnswer_5 = prompt(
	"Яка правильна відповідь на головне питання життя?"
);

let result = 0;

userAnswer_1 === "4" ? (result += 10) : (result += 0);
userAnswer_2 === "так" ? (result += 10) : (result += 0);
userAnswer_3 === "undefined" ? (result += 10) : (result += 0);
userAnswer_4 === "блакитне" ? (result += 10) : (result += 0);
userAnswer_5 === "42" ? (result += 10) : (result += 0);

alert(`За результатами опитування Ви набрали - ${result} балів`);
