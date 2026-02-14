import { DividendInputParams, SimulationResult, YearlyData } from "../types";

/**
 * 配当金シミュレーションを実行
 * @param params 入力パラメータ
 * @returns シミュレーション結果
 */
export function calculateDividendSimulation(
    params: DividendInputParams
): SimulationResult {
    const {
        currentInvestment,
        averageYield,
        monthlyContribution,
        reinvestDividends,
        targetAnnualDividend,
        yieldGrowthRate,
    } = params;

    const yearlyData: YearlyData[] = [];
    const maxYears = 50; // 最大シミュレーション年数

    let principal = currentInvestment;
    let currentYield = averageYield / 100; // パーセントを小数に変換
    let yearsToGoal = -1;
    let targetReached = false;

    for (let year = 0; year <= maxYears; year++) {
        // 年間配当金を計算
        const annualDividend = principal * currentYield;

        // 年次データを記録
        yearlyData.push({
            year,
            principal,
            yield: currentYield * 100, // 小数をパーセントに戻す
            annualDividend,
        });

        // 目標達成判定
        if (annualDividend >= targetAnnualDividend && yearsToGoal === -1) {
            yearsToGoal = year;
            targetReached = true;
        }

        // 目標達成後も数年分データを追加（グラフ表示用）
        if (targetReached && year >= yearsToGoal + 5) {
            break;
        }

        // 次年度の元本を計算
        const annualContribution = monthlyContribution * 12;
        if (reinvestDividends) {
            principal = principal + annualContribution + annualDividend;
        } else {
            principal = principal + annualContribution;
        }

        // 次年度の利回りを計算（増配率を適用）
        if (yieldGrowthRate > 0) {
            currentYield = currentYield * (1 + yieldGrowthRate / 100);
        }
    }

    // 目標未達成の場合
    if (yearsToGoal === -1) {
        yearsToGoal = maxYears;
    }

    const finalData = yearlyData[yearlyData.length - 1];

    return {
        yearsToGoal,
        finalPrincipal: finalData.principal,
        finalYield: finalData.yield,
        yearlyData,
        targetReached,
    };
}

/**
 * 数値を日本円形式でフォーマット
 * @param value 数値
 * @returns フォーマットされた文字列
 */
export function formatCurrency(value: number): string {
    return new Intl.NumberFormat("ja-JP", {
        style: "currency",
        currency: "JPY",
        maximumFractionDigits: 0,
    }).format(value);
}

/**
 * 数値をパーセント形式でフォーマット
 * @param value 数値
 * @param decimals 小数点以下の桁数
 * @returns フォーマットされた文字列
 */
export function formatPercent(value: number, decimals: number = 2): string {
    return `${value.toFixed(decimals)}%`;
}
