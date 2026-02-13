export type SimulationInput = {
  initialAsset: number;
  dividendYield: number; // percentage (e.g. 5.25)
  annualInvestment: number;
  dividendGrowthRate: number; // percentage (e.g. 5)
  stockGrowthRate: number; // percentage (e.g. 1)
  annualExpenses: number;
};

export type SimulationYearResult = {
  year: number; // 1-based index (1, 2, 3...)
  dividend: number;
  asset: number;
  isFire: boolean;
};

export type SimulationResult = {
  yearlyData: SimulationYearResult[];
  fireYear: number | null; // null if not achieved within simulation period
  finalDividend: number;
  finalAsset: number;
  fireDividend: number | null;
  fireAsset: number | null;
};

export function calculateFireSimulation(input: SimulationInput): SimulationResult {
  const {
    initialAsset,
    dividendYield,
    annualInvestment,
    dividendGrowthRate,
    stockGrowthRate,
    annualExpenses,
  } = input;

  const yieldRate = dividendYield / 100;
  const divGrowthRate = dividendGrowthRate / 100;
  const stockGrowth = stockGrowthRate / 100;

  const yearlyData: SimulationYearResult[] = [];
  let currentAsset = initialAsset;
  let currentDividend = initialAsset * yieldRate; // Initial year dividend
  let fireYear: number | null = null;
  let fireDividend: number | null = null;
  let fireAsset: number | null = null;

  // Annual dividend increase from new investment
  const annualDividendIncrease = annualInvestment * yieldRate;

  // Simulation for 40 years
  for (let year = 1; year <= 40; year++) {
    const isFire = currentDividend >= annualExpenses;

    if (isFire && fireYear === null) {
      fireYear = year;
      fireDividend = currentDividend;
      fireAsset = currentAsset;
    }

    yearlyData.push({
      year,
      dividend: Math.floor(currentDividend),
      asset: Math.floor(currentAsset),
      isFire,
    });

    // Calculate next year's values
    // Next Dividend = Current Dividend * (1 + Growth Rate) + Annual Investment Yield
    const nextDividend = currentDividend * (1 + divGrowthRate) + annualDividendIncrease;
    
    // Next Asset = Current Asset * (1 + Stock Growth Rate) + Annual Investment
    const nextAsset = currentAsset * (1 + stockGrowth) + annualInvestment;

    currentDividend = nextDividend;
    currentAsset = nextAsset;
  }

  // Final values (at end of year 40)
  const finalYearData = yearlyData[yearlyData.length - 1];

  return {
    yearlyData,
    fireYear, // 1-based year index
    finalDividend: finalYearData.dividend,
    finalAsset: finalYearData.asset,
    fireDividend: fireDividend ? Math.floor(fireDividend) : null,
    fireAsset: fireAsset ? Math.floor(fireAsset) : null,
  };
}
