
import { calculateFireSimulation, SimulationInput } from '../lib/simulation';

const input: SimulationInput = {
    initialAsset: 1000000,
    annualInvestment: 0,
    initialStockRatio: 50,
    japanYield: 4,
    foreignYield: 4,
    japanDividendGrowth: 0,
    foreignDividendGrowth: 0,
    stockGrowthRate: 0,
    annualExpenses: 50000,
    taxPattern: 'mixed',
    dividendReinvestmentRate: 0,
};

console.log("--- Running V2 Verification ---");
console.log("Input:", JSON.stringify(input, null, 2));

const result = calculateFireSimulation(input);
const y1 = result.yearlyData[0];

console.log(`\nYear 1 Result:`);
console.log(`Total Asset: ${y1.totalAsset}`);
console.log(`Japan Asset: ${y1.japanAsset}`);
console.log(`Foreign Asset: ${y1.foreignAsset}`);
console.log(`Total Div Pre-Tax: ${y1.totalDividendPreTax}`);
console.log(`Total Div Post-Tax: ${y1.totalDividendAfterTax}`);
console.log(`Japan Div Pre: ${y1.japanDividendPreTax}`);
console.log(`Japan Div Post: ${y1.japanDividendAfterTax}`);
console.log(`Foreign Div Pre: ${y1.foreignDividendPreTax}`);
console.log(`Foreign Div Post: ${y1.foreignDividendAfterTax}`);

// Check logic manually
const expectedJapanDivPre = 500000 * 0.04;
const expectedForeignDivPre = 500000 * 0.04;
const expectedJapanDivPost = expectedJapanDivPre * (1 - 0.20315);
const expectedForeignDivPost = expectedForeignDivPre * (1 - 0.2828);
const expectedTotalDivPost = expectedJapanDivPost + expectedForeignDivPost;

console.log(`\nExpected Logic Check:`);
console.log(`Exp Japan Div Pre: ${expectedJapanDivPre} vs Actual: ${y1.japanDividendPreTax}`);
console.log(`Exp Japan Div Post: ${Math.floor(expectedJapanDivPost)} vs Actual: ${y1.japanDividendAfterTax}`);
console.log(`Exp Foreign Div Post: ${Math.floor(expectedForeignDivPost)} vs Actual: ${y1.foreignDividendAfterTax}`);

if (Math.abs(y1.totalDividendAfterTax - Math.floor(expectedTotalDivPost)) <= 1) {
    console.log("SUCCESS: Tax calculation matches expected values.");
} else {
    console.log("FAILURE: Tax calculation mismatch.");
}
