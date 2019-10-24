import { getLetterMatchCount } from './';


describe('getLetterMatchingCount', () => {
	const str1 = 'consuming';
	test('returns 0 when there are no matching letters ', () => {
		const str2 = 'party';
		expect(getLetterMatchCount(str1,str2)).toBe(0);
	});

	test('returns the correct count when there are 3 matching letters ', () => {
		const str2 = 'tiring';
		expect(getLetterMatchCount(str1,str2)).toBe(3);

	});

	test('returns correct count when strings are duplicated', () => {
		expect(getLetterMatchCount(str1, str1)).toBe(str1.length);

	});

	test('return the same count if strings switch places', () => {
		const str2 = 'can';
		expect(getLetterMatchCount(str1, str2)).toBe(getLetterMatchCount(str2, str1));
	});
});
