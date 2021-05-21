"use strict";

/**
 * Determines if a string contains opening or closing curly brackets
 * @param {string} str
 * @returns {boolean} boolean
 */
const hasBrackets = (str) => str.includes("{") || str.includes("}");

/**
 * Determines if a closing bracket preceeds opening brackets in a string
 * @param {string} str
 * @returns {boolean} boolean
 */
const isPreceded = (str) => str.indexOf("}") < str.indexOf("{");

function matchingBrackets(str) {
	const count = {
		"{": 0,
		"}": 0,
	};

	if (!hasBrackets(str)) return true;
	if (isPreceded(str)) return false;

	for (let char of str) {
		if (Object.keys(count).includes(char)) {
			count[char] += 1;
		}
	}

	return count["{"] === count["}"];
}

console.log(matchingBrackets("{}")); // true
console.log(matchingBrackets("}{")); // false
console.log(matchingBrackets("{{}")); // false
console.log(matchingBrackets("No Brackets")); // true
console.log(matchingBrackets("{abcdef}")); // true
