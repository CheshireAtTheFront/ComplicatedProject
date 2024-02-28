// 1. переменная со начением числа
let num = 266219
let inString = String(num)

// 2. произведение чисел
let result = 1; 
for(let i = 0; i < inString.length; i++) {
  result *= +inString[i]
}
console.log(result);

// 3. Полученный результат возвести в степень 3
let raisedInDegree = result**3
console.log(raisedInDegree);

// 4. Первые 2 цифры полученного числа
let firstTwoDigits = +String(raisedInDegree).slice(0,2);
console.log(firstTwoDigits);

// lesson03

let lang = prompt("Введите 'ru' или 'en'");
// через if
if(lang == "ru") {
	console.log("Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье");
}else if (lang == "en") {
	console.log("Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday");
}else {
	console.log("Ввели не верное значение");
}

// через switch-case
switch (lang) {
	case 'ru':
		console.log("Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье");
		break;
	case 'en':
		console.log("Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday");
		break;
	default:
		console.log("Ввели не верное значение");
		break;
}

// через многомерный массив 
const weekday = [] ;
weekday['ru'] = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];
weekday['en'] = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
console.log(weekday[lang]);

let namePerson = prompt("Введите имя");
// с использованием тернарного оператора
let user = (namePerson == "Артем") ? console.log("директор") :
		(namePerson == "Александр") ? console.log("преподаватель") :
		console.log("студент");



