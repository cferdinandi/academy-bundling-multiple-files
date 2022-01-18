/**
 * Add one or more numbers together
 * @param  {Number} The numbers to add
 * @return {Number} The total
 */
function add (...nums) {

	// Setup a total
	let total = 0;

	// Loop through each number and add it to the total
	for (let num of nums) {
		total = total + num;
	}

	return total;

}

export default add;