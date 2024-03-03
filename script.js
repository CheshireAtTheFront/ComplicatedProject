"use strict";

const forString = "Привет";

const editingLine = function (text) {
	let notification = null;
  if (text === Number()) {
		notification = "Ввод не верный, необходимо ввести текст";
	} else if (text.length > 30) {
		notification = text.slice(0, 30).concat("...");
	} else {
		notification = text.trim();
	}
}

editingLine(forString);