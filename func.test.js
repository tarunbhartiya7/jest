const { sum, obj, api } = require("./func");

it("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toEqual(3);
  expect(sum(3, 4)).toBe(7);
  expect(sum(3, 4)).not.toBe(0);
  expect(sum(2, 2)).toBeGreaterThan(1);
});

it("should return an object format", () => {
  expect(obj("sam")).toEqual({ name: "sam" });
});

test("the shopping list has milk on it", () => {
  const shoppingList = [
    "diapers",
    "kleenex",
    "trash bags",
    "paper towels",
    "milk",
  ];
  expect(shoppingList).toContain("milk");
});

test("compiling android goes as expected", () => {
  function compileAndroidCode() {
    throw new Error("you are using the wrong JDK");
  }
  expect(() => compileAndroidCode()).toThrow("you are using the wrong JDK");
});

test("should test asynchronous function", () => {
  return api().then((res) => {
    expect(res.data.id).toBe(1);
  });
});

test("should test asynchronous function with async await syntax", async () => {
  const res = await api();
  expect(res.data.id).toBe(1);
  // await expect(api()).resolves.toBe("peanut butter");
});
