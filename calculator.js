window.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById("calc-form");
    if (form) {
      setupIntialValues();
      form.addEventListener("submit", function(e) {
        e.preventDefault();
        update();
      });
    }
  });
  
  function getCurrentUIValues() {
    return {
      amount: +(document.getElementById("loan-amount").value),
      years: +(document.getElementById("loan-years").value),
      rate: +(document.getElementById("loan-rate").value),
    }
  }
  
  // Get the inputs from the DOM.
  // Put some default values in the inputs
  // Call a function to calculate the current monthly payment
  function setupIntialValues() {
    let values = {amount : 1000, years: 5, rate: 10};
    let newAmount = document.querySelector('#loan-amount');
    let newYears = document.querySelector('#loan-years');
    let newRate = document.querySelector('#loan-rate');
    newAmount.value = values.amount;
    newYears.value = values.years;
    newRate.value = values.rate;
    update();
  }
  
  // Get the current values from the UI
  // Update the monthly payment
  function update() {
    let currentValues = getCurrentUIValues();
    updateMonthly(calculateMonthlyPayment(currentValues));
  }
  
  // Given an object of values (a value has amount, years and rate ),
  // calculate the monthly payment.  The output should be a string
  // that always has 2 decimal places.
  function calculateMonthlyPayment(values) {
  
      let r = values.rate / 100;
      let total = (values.amount * r * values.years) + values.amount;
      return ( total / (values.years * 12)
      ).toFixed(2);
  }
  
  // Given a string representing the monthly payment value,
  // update the UI to show the value.
  function updateMonthly(monthly) {
    let newMonthly = document.getElementById("monthly-payment");
    newMonthly.innerText = "$" + monthly;
  }
  