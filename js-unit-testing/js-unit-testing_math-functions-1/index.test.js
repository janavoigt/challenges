import { add } from "./index.js";

test("returns 5 if called add(2, 3))", () => {
  expect(add(2, 3)).toBe(5);
});

test("returns a negative value if the greater argument is add(-2, -3)", () => {
  expect(add(-2, -3)).toBeLessThan(0);
});

test("returns a value close to 0.3 if called with add(0.1, 0.2)", () => {
  expect(add(0.1, 0.2)).toBeCloseTo(0.3);
});

//   - returns a value close to 0.3 if called with add(0.1, 0.2) (Hint: use the matcher `toBeCloseTo()`)
