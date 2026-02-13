
import { calculateFireSimulation, SimulationInput } from '../lib/simulation';

// User example values
// 資産額（例：2,852,896円）
// 配当利回り（例：5.25%）
// 年間投資額（例：400,000円）
// 増配率（例：5%）
// 株価成長率（例：1%）
// 年間生活費（例：3,600,000円）

const input: SimulationInput = {
    initialAsset: 2852896,
    dividendYield: 5.25,
    annualInvestment: 400000,
    dividendGrowthRate: 5,
    stockGrowthRate: 1,
    annualExpenses: 3600000
};

console.log("Running simulation with input:", input);

const result = calculateFireSimulation(input);

console.log("FIRE Achieved Year:", result.fireYear);
console.log("FIRE Dividend:", result.fireDividend?.toLocaleString());
console.log("FIRE Asset:", result.fireAsset?.toLocaleString());
console.log("Final Dividend (Year 40):", result.finalDividend.toLocaleString());
console.log("Final Asset (Year 40):", result.finalAsset.toLocaleString());

console.log("\nYearly Data (First 5 years):");
result.yearlyData.slice(0, 5).forEach((d) => {
    console.log(`Year ${d.year}: Div=${d.dividend.toLocaleString()}, Asset=${d.asset.toLocaleString()}, Fire=${d.isFire}`);
});

console.log("\nYearly Data (Last 5 years):");
result.yearlyData.slice(-5).forEach((d) => {
    console.log(`Year ${d.year}: Div=${d.dividend.toLocaleString()}, Asset=${d.asset.toLocaleString()}, Fire=${d.isFire}`);
});

if (result.fireYear) {
    console.log(`\nFIRE achieved in Year ${result.fireYear}`);
} else {
    console.log("\nFIRE not achieved within 40 years");
}
