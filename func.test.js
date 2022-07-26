const { sum, obj, api, runCallback } = require("./func");

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
  expect(shoppingList).toHaveLength(5);
  expect(shoppingList[0]).toEqual("diapers");
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

describe("runCallback", () => {
  const callbackMock = jest.fn();
  // const callbackMock = jest.fn(() => "result of some complex logic"); // this way you can mock a complex computation fucntion

  test("should run callback for num < 100", () => {
    runCallback(10, callbackMock);

    expect(callbackMock).toHaveBeenCalled();
    expect(callbackMock).toHaveBeenCalledTimes(1);
    expect(callbackMock).toHaveBeenCalledWith(50);
  });

  test("should run not callback for num >= 100", () => {
    runCallback(30, callbackMock);

    expect(callbackMock).not.toHaveBeenCalled();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});

test("pizza list should have properties id, name, price", () => {
  const pizza = [
    {
      id: 1,
      name: "pizza 1",
      price: 30,
    },
    {
      id: 2,
      name: "pizza 2",
      price: 50,
    },
  ];

  expect(pizza[0]).toHaveProperty("id");
  expect(pizza[0]).toHaveProperty("name");
  expect(pizza[0]).toHaveProperty("price");
});

test("should test mock implementation of a basic function", () => {
  const mock = jest.fn(() => "mock function");

  expect(mock("calling mock function")).toBe("mock function");
  expect(mock).toHaveBeenCalledWith("calling mock function");
  expect(mock).toHaveBeenCalledTimes(1);

  jest.clearAllMocks();
});

test("spying using original implementation", () => {
  const pizza = {
    name: (n) => `Pizza name: ${n}`,
  };

  const spy = jest.spyOn(pizza, "name");

  expect(pizza.name("Cheese")).toBe("Pizza name: Cheese");
  expect(spy).toHaveBeenCalledWith("Cheese");
});

test("spying using mock implementation", () => {
  const pizza = {
    name: (n) => `Pizza name: ${n}`,
  };

  const spy = jest
    .spyOn(pizza, "name")
    .mockImplementation(() => "Mocking the function");

  expect(pizza.name("Cheese")).toBe("Mocking the function");

  spy.mockRestore();
  expect(pizza.name("Cheese")).toBe("Pizza name: Cheese");
});

// use toMatchObject to match a subset and toEqual for deep equality check
test("matcher", () => {
  const received = {
    a: 1,
    b: 2,
  };
  const expected = {
    a: 1,
  };

  expect(received).toMatchObject(expected);
});

test("expect a promise to resolve", async () => {
  const user = {
    getFullName: jest.fn(() => Promise.resolve("James")),
  };

  await expect(user.getFullName()).resolves.toBe("James");
});

test("expect a promise to reject", async () => {
  const user = {
    getFullName: jest.fn(() =>
      Promise.reject(new Error("Something went wrong!"))
    ),
  };

  await expect(user.getFullName()).rejects.toThrow("Something went wrong!");
});
