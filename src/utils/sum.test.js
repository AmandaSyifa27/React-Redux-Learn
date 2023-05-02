import { sum } from "./sum";

describe('sum test', () => {
    test('should return correctly', () => {
        const result = sum(10, 40);
        expect(result).toBe(50);
    });
    test('should return error', () => {
        const result = sum(true, 10);
        expect(result).toBe(false);
        expect(result).toBeFalsy();
    });
});