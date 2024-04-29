import { add } from "./index.js";
import { subtract } from "./index.js";
import { multiply } from "./index.js";
import { divide } from "./index.js";

test("returns 5 if called add(2, 3))", () => {
  expect(add(2, 3)).toBe(5);
});

test("returns a negative value if the greater argument is add(-2, -3)", () => {
  expect(add(-2, -3)).toBeLessThan(0);
});

test("returns a value close to 0.3 if called with add(0.1, 0.2)", () => {
  expect(add(0.1, 0.2)).toBeCloseTo(0.3);
});

test("returns 10 if called with subtract(15, 5)", () => {
  expect(subtract(15, 5)).toBe(10);
});

test("returns a negative value if the second argument is greater than the first one", () => {
  expect(subtract(2, 3)).toBeLessThan(0);
});

test("returns 8 if called with multiply(2, 4)", () => {
  expect(multiply(2, 4)).toBe(8);
});

test("returns a negative value if only the first argument is negative", () => {
  expect(multiply(-2, 3)).toBeLessThan(0);
});

test("returns a negative value if only the second argument is negative", () => {
  expect(multiply(2, -3)).toBeLessThan(0);
});

test("returns a positive value if called with two negative arguments", () => {
  expect(multiply(-2, -4)).toBe(8);
});

test("returns 3 if called with divide(9, 3)", () => {
  expect(divide(9, 3)).toBe(3);
});

test("returns 'You should not do this!' if called with 0 as second argument", () => {
  expect(divide(9, 0)).toBe("You should not do this!");
});
