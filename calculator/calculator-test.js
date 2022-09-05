
it('should calculate the monthly rate correctly', function () {
  const values = { amount: 20000, years: 5, rate: 10 };
  expect(calculateMonthlyPayment(values)).toEqual('424.94')
});


it("should return a result with 2 decimal places", function () {
  const values = { amount: 50000, years: 10, rate: 5 };
  expect(calculateMonthlyPayment(values)).toEqual('530.33')
});

