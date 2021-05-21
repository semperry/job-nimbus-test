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

// Iterative
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

// Recursion
function matchingBracketsRecursive(str, idx, countObj, skipValidation = false) {
	idx = idx || 0;
	const count = countObj || {
		"{": 0,
		"}": 0,
	};

	if (!skipValidation) {
		if (!hasBrackets(str)) return true;
		if (isPreceded(str)) return false;
	}

	if (idx < str.length) {
		if (count.hasOwnProperty(str[idx])) {
			count[str[idx]] += 1;
		}

		return matchingBracketsRecursive(str, idx + 1, count, true);
	} else {
		return count["{"] === count["}"];
	}
}

console.log("Recursively: ", matchingBracketsRecursive("{}")); // true
console.log("Recursively: ", matchingBracketsRecursive("}{")); // false
console.log("Recursively: ", matchingBracketsRecursive("{{}")); // false
console.log("Recursively: ", matchingBracketsRecursive("No Brackets")); // true
console.log("Recursively: ", matchingBracketsRecursive("{abcdef}")); // true

// For Each
function matchingBracketsFunctional(str) {
	const count = {
		"{": 1,
		"}": 1,
	};

	if (!hasBrackets(str)) return true;
	if (isPreceded(str)) return false;

	str.split("").forEach((char) => {
		if (count[char]) {
			count[char] += 1;
		}
	});

	return count["{"] === count["}"];
}

console.log("Functional: ", matchingBracketsFunctional("{}")); // true
console.log("Functional: ", matchingBracketsFunctional("}{")); // false
console.log("Functional: ", matchingBracketsFunctional("{{}")); // false
console.log("Functional: ", matchingBracketsFunctional("No Brackets")); // true
console.log("Functional: ", matchingBracketsFunctional("{abcdef}")); // true
