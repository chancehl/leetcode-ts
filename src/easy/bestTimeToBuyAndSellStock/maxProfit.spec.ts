import { maxProfit } from './maxProfit'

describe('maxProfit', () => {
	test('test case 1', () => {
		expect(maxProfit([7, 1, 5, 3, 6, 4])).toEqual(5)
	})

	test('test case 2', () => {
		expect(maxProfit([7, 6, 4, 3, 2, 1])).toEqual(0)
	})

	test('test case 3', () => {
		expect(maxProfit([2, 4, 1])).toEqual(2)
	})
})
