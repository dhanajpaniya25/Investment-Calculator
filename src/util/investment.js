// This function calculates yearly investment growth results
// It expects an object with the following properties:
// - initialInvestment: Starting investment amount
// - annualInvestment: Amount added every year
// - expectedReturn: Expected annual return rate (in percentage)
// - duration: Total investment duration in years

export function calculateInvestmentResults({
  initialInvestment,
  annualInvestment,
  expectedReturn,
  duration,
}) {

  // Array to store yearly investment data
  const annualData = [];

  // Initial investment value
  let investmentValue = initialInvestment;

  // Loop through each year of the investment duration
  for (let i = 0; i < duration; i++) {

    // Calculate interest earned for the current year
    const interestEarnedInYear =
      investmentValue * (expectedReturn / 100);

    // Update investment value by adding:
    // current value + earned interest + yearly investment
    investmentValue +=
      interestEarnedInYear + annualInvestment;

    // Store yearly investment details
    annualData.push({

      // Current year number
      year: i + 1,

      // Interest earned in current year
      interest: interestEarnedInYear,

      // Total investment value at end of year
      valueEndOfYear: investmentValue,

      // Amount invested during the year
      annualInvestment: annualInvestment,
    });
  }

  // Return complete yearly investment data
  return annualData;
}


// Formatter object for Indian currency format (INR)
// Used to display numbers like ₹1,00,000
export const formatter = new Intl.NumberFormat('en-IN', {

  // Currency formatting style
  style: 'currency',

  // Currency type: Indian Rupee
  currency: 'INR',

  // No decimal values
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});