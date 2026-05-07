// Importing utility functions from the investment utility file
import { calculateInvestmentResults, formatter } from "../util/investment"

// Results component receives input data as props
export default function Results({ input }) {

    // Calculating yearly investment results
    const resultsData = calculateInvestmentResults(input);

    // Calculating the initial investment amount
    const intitialInvestment = resultsData[0].valueEndOfYear -
        resultsData[0].interest -
        resultsData[0].annualInvestment;

    return (
        // Table to display investment results
        <table id="result">

            {/* Table Header */}
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Invested Value</th>
                    <th>Interest (year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>

            {/* Table Body */}
            <tbody>

                {/* Looping through each year's data */}
                {resultsData.map(yearData => {

                    // Calculating total interest earned till current year
                    const totalInterest = yearData.valueEndOfYear -
                        yearData.annualInvestment * yearData.year -
                        intitialInvestment;

                    // Calculating total amount invested till current year
                    const totalAmmountInvested = yearData.valueEndOfYear - totalInterest;

                    return (
                        // Table row for each year
                        <tr key={yearData.year}>

                            {/* Displaying year number */}
                            <td>{yearData.year}</td>

                            {/* Displaying total value at end of year */}
                            <td>{formatter.format(yearData.valueEndOfYear)}</td>

                            {/* Displaying interest earned in current year */}
                            <td>{formatter.format(yearData.interest)}</td>

                            {/* Displaying total accumulated interest */}
                            <td>{formatter.format(totalInterest)}</td>

                            {/* Displaying total invested capital */}
                            <td>{formatter.format(totalAmmountInvested)}</td>

                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}