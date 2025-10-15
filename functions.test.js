import {capitalize, reverseString, Calculator, caesarCipher} from "./functions.js";

describe('capitalize',() => {
    test('returns first letter capitalized',() => {
        const result = capitalize("my string");
        expect(result).toBe("My string");
    });

    test('returns empty string if empty string passed',() => {
        const result = capitalize("");
        expect(result).toBe("");
    });
        test('capitalize returns empty string if nullish input passed',() => {
        const result = capitalize(undefined);
        expect(result).toBe("");
    });
});

describe('reverseString', () => {
    test('returns inverse of a string',() => {
        const result = reverseString("rainbows");
        expect(result).toBe("swobniar");
    });

    test('returns empty string if the same is supplied',() => {
        const result = reverseString("");
        expect(result).toBe("");
    });

});

describe('calculator', () => {
    const calculator = new Calculator ();

    test('adds numbers correctly',() => {
        const result = calculator.add(7,4);
        expect(result).toBe(11);
    });

    test('throws error when one of the supplied parameters is not a valid number',() => {
        expect(() => calculator.add("chad",4)).toThrow();
    });

    test('subtracts numbers correctly',() => {
        const result = calculator.subtract(7,4);
        expect(result).toBe(3);
    });

    test('subtracts numbers with negative output correctly',() => {
        const result = calculator.subtract(3,20);
        expect(result).toBe(-17);
    });

    test('multiplies numbers correctly',() => {
        const result = calculator.multiply(3,20);
        expect(result).toBe(60);
    });

    test('divides numbers correctly',() => {
        const result = calculator.divide(100,20);
        expect(result).toBe(5);
    });
    test('divides numbers with decimal output correctly',() => {
        const result = calculator.divide(8,3);
        expect(result).toBeCloseTo(2.667);
    });

});

describe("caeser cipher" , () => {
    test("returns correct cipher of string with only lower case alphabetical characters", () => {
        result = caesarCipher("symposium",4);
        expect(result).toBe("wcqtswmyq");
    })
})










