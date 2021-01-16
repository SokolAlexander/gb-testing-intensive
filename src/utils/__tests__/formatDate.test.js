import { formatDate } from "../formatDate";

describe('formateDate tests', () => {
  it('returns formatted date string', () => {
    const date = new Date();
    const expected = date.toDateString();

    const received = formatDate(date);

    expect(expected).toEqual(received);
  });

  it("throws if no argument provided", () => {
    expect(() => formatDate()).toThrow();
  });
});
