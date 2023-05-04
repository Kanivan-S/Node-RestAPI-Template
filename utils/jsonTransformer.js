/**
 * String joins all the values of a JSON object, including nested keys
 * 
 * @param {any} obj JSON object
 * @param {string} delimiter Delimiter of final string
 * @returns 
 */
const getNestedValuesString = (obj, delimiter) => {
	let values = [];
	for (key in obj) {
		if (typeof obj[key] !== "object") {
			values.push(obj[key]);
		} else {
			values = values.concat(getNestedValuesString(obj[key]));
		}
	}

	return delimiter ? values.join(delimiter) : values.join();
}

module.exports = {
	getNestedValuesString
}
