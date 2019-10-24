/**
 * @function getLetterMatchCount
 * @param {string} str1 - String to compare.
 * @param {string} str2 - String to compare.
 * @returns {number} - Returns a number of matching letters between two strings.
 */

export const getLetterMatchCount = (str1, str2) => {
	return Array.from(str1).reduce((result, letter) => {
		for (let i = 0; i < str2.length; i++) {
			if (str2[ i ] === letter) {
				++result;
				str2 = str2.replace(str2[ i ], '');
				break;
			}

		}

		return result;
	}, 0);
};