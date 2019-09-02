export class Triangle {
  constructor(...sides) {
    this.sides = [...sides];
  }

  kind() {
    if (isInvalidInput(this.sides)) throw new Error();
    if (isTriangleInequality(this.sides)) throw new Error();
    if (hasEqualSides(this.sides)) return hasEqualSides(this.sides);
    return triangTypes.SCALENE;
  }
}

const isInvalidInput = sides =>
  sides.filter(element => element && element > 0).length !== 3;

const isTriangleInequality = sides => {
  const sum = sides.reduce((a, b) => a + b, 0);
  for (const item of sides) {
    if (sum - item < item) return true;
  }
  return false;
};

const hasEqualSides = sides => {
  const occurences = sides.reduce((acc, current) => {
    acc[current] = acc[current] ? acc[current] + 1 : 1;
    return acc;
  }, {});

  const equalSides = Object.keys(occurences).length;

  return equalSides === 1
    ? triangTypes.EQUILATERAL
    : equalSides === 2
    ? triangTypes.ISOSCELES
    : null;
};

const triangTypes = {
  EQUILATERAL: "equilateral",
  SCALENE: "scalene",
  ISOSCELES: "isosceles"
};
