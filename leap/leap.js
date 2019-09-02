export const isLeap = number =>
  (divBy4(number) && !divBy100(number)) ||
  (divBy4(number) && divBy100(number) && divBy400(number));

const divBy = dividend => number => number % dividend === 0;
const divBy4 = divBy(4);
const divBy100 = divBy(100);
const divBy400 = divBy(400);
