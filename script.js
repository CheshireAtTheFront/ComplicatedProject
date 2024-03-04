"use strict";

const forString = "Привет";

const editingLine = function (text) {
  if (text.trim().length > 30) {
		console.log(text.trim().slice(0, 30).concat("..."));
	} else if (typeof text === 'string') {
		console.log(text.trim());
	} else {
		console.log("Ввод не верный, необходимо ввести текст");
	}
	return text
}

editingLine(forString);