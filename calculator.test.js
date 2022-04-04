
it('should calculate the monthly rate correctly', function () {
    let values = {amount: 1000, years: 5, rate: 10};
    expect(calculateMonthlyPayment(values)).toEqual('25.00');
  });
  
  
  it("should return a result with 2 decimal places", function() {
    let values = {amount: 1228, years: 17, rate: 41};
    expect(calculateMonthlyPayment(values)).toEqual('47.98');
  });
  
  it("should handle a 0 interest rate", function () {
    let values = {amount: 10000, years: 3, rate: 0};
    expect(calculateMonthlyPayment(values)).toEqual('277.78');
  });
  