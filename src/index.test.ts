import { sum } from "./index";

describe("index", () => {
  test("foo", () => {
    expect(sum(2, 4)).toEqual(6);
  });
});
