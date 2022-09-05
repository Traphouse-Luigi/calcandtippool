window.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentStartValues() {
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
  const values = { amount: 10000, years: 10, rate: 5 };
  const amountStart = document.getElementById("loan-amount");
  amountStart.value = values.amount;
  const yearsStart = document.getElementById("loan-years");
  yearsStart.value = values.years;
  const rateStart = document.getElementById("loan-rate");
  rateStart.value = values.rate;
  update();
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  const currentStartValues = getCurrentStartValues();
  updateMonthly(calculateMonthlyPayment(currentStartValues));
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  const monthlyRate = (values.rate / 100) / 12;
  const n = Math.floor(values.years * 12);
  return (
    (monthlyRate * values.amount) /
    (1 - Math.pow((1 + monthlyRate), -n))
  ).toFixed(2)
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  const monthlyStart = document.getElementById("monthly-payment");
  monthlyStart.innerText = "$" + monthly;
}
