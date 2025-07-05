import sortByHealth from "../matchers";

test("should sort heroes by health in descending order", () => {
  const heroes = [
    { name: "мечник", health: 10 },
    { name: "маг", health: 100 },
    { name: "лучник", health: 80 },
  ];

  const expected = [
    { name: "маг", health: 100 },
    { name: "лучник", health: 80 },
    { name: "мечник", health: 10 },
  ];

  const result = sortByHealth(heroes);

  expect(result).toEqual(expected);
  expect(heroes).toEqual([
    { name: "мечник", health: 10 },
    { name: "маг", health: 100 },
    { name: "лучник", health: 80 },
  ]);
});

test("should handle empty array", () => {
  expect(sortByHealth([])).toEqual([]);
});

test("should handle single hero", () => {
  const heroes = [{ name: "маг", health: 100 }];
  expect(sortByHealth(heroes)).toEqual([{ name: "маг", health: 100 }]);
});

test("should correctly sort equal health values", () => {
  const heroes = [
    { name: "герой1", health: 50 },
    { name: "герой2", health: 50 },
    { name: "герой3", health: 30 },
  ];

  const expected = [
    { name: "герой1", health: 50 },
    { name: "герой2", health: 50 },
    { name: "герой3", health: 30 },
  ];

  expect(sortByHealth(heroes)).toEqual(expected);
});

test("should sort correctly with negative health values", () => {
  const heroes = [
    { name: "зомби", health: -10 },
    { name: "призрак", health: -5 },
    { name: "демон", health: -20 },
  ];

  const expected = [
    { name: "призрак", health: -5 },
    { name: "зомби", health: -10 },
    { name: "демон", health: -20 },
  ];

  expect(sortByHealth(heroes)).toEqual(expected);
});
