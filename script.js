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