/**
 * Subtract one or more numbers from each other
 * @param  {Number} The numbers to subtract
 * @return {Number} The total
 */
function subtract (...nums) {

	// Setup a total
	let total = 0;

	// Loop through each number and add it to the total
	for (let num of nums) {
		total = total - num;
	}

	return total;

}

export default subtract;