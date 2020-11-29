import { formatDate } from '../formatDate';

// const origDateNow = Date.now;

// describe('formatDate tests', () => {
//   beforeAll(() => {
//     Date.now = () => new Date("Tue Nov 24 2020 11:07:46 GMT+0300").getTime();
//   });

//   it('returns string with amount of days passed', () => {
//     const date = new Date("Sun Nov 22 2020 11:07:46 GMT+0300");
//     const expected = '2 days ago';

//     const received = formatDate(date);
//     expect(received).toEqual(expected);
//   });

//   afterAll(() => {
//     Date.now = origDateNow;
//   });
// });

describe('formatDate tests', () => {
  it('returns formatted date string', () => {
    const date = new Date();
    const expected = date.toDateString();

    const received = formatDate(date);
    expect(received).toEqual(expected);
  });

  it('throws if argument is not a date obj', () => {
    expect(() => formatDate()).toThrow();
  });
});
