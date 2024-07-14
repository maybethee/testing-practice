import { experiments } from "webpack";
import {
  capitalize,
  reverse,
  calculator,
  caesarCipher,
  analyzeArray,
} from "./index";

describe("Capitalization", () => {
  test("Capitalize first character", () => {
    const string = "string";

    expect(capitalize(string)).toMatch(/String/);
  });

  test("Capitalize first character of any string", () => {
    const string2 = "helvetica";
    expect(capitalize(string2)).toMatch(/Helvetica/);
  });
});

describe("Reverse String", () => {
  test("Reverses a string", () => {
    const string = "string";

    expect(reverse(string)).toMatch(/gnirts/);
  });

  test("Reverses a string correctly despite capitalization", () => {
    const string2 = "sTrInG";

    expect(reverse(string2)).toMatch(/GnIrTs/);
  });

  test("Reverses a string correctly including whitespace", () => {
    const string3 = "This sentence will be totally backwards!!";

    expect(reverse(string3)).toMatch(
      /!!sdrawkcab yllatot eb lliw ecnetnes sihT/
    );
  });
});

describe("Calculator", () => {
  test("Should add two numbers together", () => {
    expect(calculator.add(372, 48)).toBe(420);
  });

  test("Should subtract two numbers", () => {
    expect(calculator.subtract(2, 48)).toBe(-46);
  });

  test("Should multiply two numbers", () => {
    expect(calculator.multiply(23947, 22)).toBe(526834);
  });

  test("Should divide two numbers", () => {
    expect(calculator.divide(8777, 7)).toBe(1253);
  });
});

describe("Caesar Cipher", () => {
  test("Wraps across end of alphabet", () => {
    expect(caesarCipher("xyz", 3)).toMatch(/abc/);
  });

  test("Does not change capitalization", () => {
    expect(caesarCipher("HeLLo", 3)).toMatch(/KhOOr/);
  });

  test("Retains white space and punctuation", () => {
    expect(caesarCipher("Hello, World!", 3)).toMatch(/Khoor, Zruog!/);
  });
});

describe("Analyze Array", () => {
  test("should return an object correctly analyzing an array", () => {
    expect(analyzeArray([30, 50, 123, 939, 10101, 5, 22])).toEqual({
      average: 1610,
      min: 5,
      max: 10101,
      length: 7,
    });
  });
});
