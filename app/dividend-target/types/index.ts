// 入力パラメータの型定義
export interface DividendInputParams {
    currentInvestment: number; // 現在の投資額（円）
    averageYield: number; // 平均利回り（税引き後、%）
    monthlyContribution: number; // 毎月の積立額（円）
    reinvestDividends: boolean; // 配当再投資のON/OFF
    targetAnnualDividend: number; // 配当金の目標額（年間、円）
    yieldGrowthRate: number; // 想定利回りの成長率（年率、%）
}

// 年次データの型定義
export interface YearlyData {
    year: number; // 経過年数
    principal: number; // 投資元本（円）
    yield: number; // 利回り（%）
    annualDividend: number; // 年間配当金（円）
}

// 計算結果の型定義
export interface SimulationResult {
    yearsToGoal: number; // 目標達成までの年数
    finalPrincipal: number; // 達成時の投資元本（円）
    finalYield: number; // 達成時の利回り（%）
    yearlyData: YearlyData[]; // 年次データの配列
    targetReached: boolean; // 目標達成したかどうか
}
