"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SimulationResult } from "../types";
import { formatCurrency, formatPercent } from "../lib/calculations";
import { TrendingUp, Target, Wallet } from "lucide-react";

interface ResultSummaryProps {
    result: SimulationResult;
    targetDividend: number;
}

export function ResultSummary({ result, targetDividend }: ResultSummaryProps) {
    const { yearsToGoal, finalPrincipal, finalYield, targetReached } = result;

    return (
        <div className="space-y-6">
            {/* メイン結果カード */}
            <Card className="border-2 border-teal-200 dark:border-teal-800 bg-gradient-to-br from-teal-50 to-white dark:from-teal-950 dark:to-slate-900">
                <CardHeader className="text-center pb-4">
                    <div className="flex justify-center mb-4">
                        <div className="p-4 rounded-full bg-teal-100 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400">
                            <Target className="w-12 h-12" />
                        </div>
                    </div>
                    <CardTitle className="text-3xl font-bold text-teal-700 dark:text-teal-300">
                        {targetReached ? (
                            <>
                                🎉 目標達成まで <span className="text-5xl">{yearsToGoal}</span> 年
                            </>
                        ) : (
                            <>
                                ⚠️ {yearsToGoal}年以内に目標未達成
                            </>
                        )}
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-center text-lg text-slate-600 dark:text-slate-400">
                        {targetReached
                            ? `${yearsToGoal}年後に年間${formatCurrency(targetDividend)}（月${formatCurrency(targetDividend / 12)}）の配当金に到達します。`
                            : `現在の条件では${yearsToGoal}年以内に目標に到達しません。積立額の増加や利回りの見直しを検討してください。`}
                    </p>
                </CardContent>
            </Card>

            {/* 詳細情報カード */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card>
                    <CardHeader className="pb-3">
                        <div className="flex items-center gap-2">
                            <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30">
                                <Wallet className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                            </div>
                            <CardTitle className="text-lg">達成時の投資元本</CardTitle>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                            {formatCurrency(finalPrincipal)}
                        </p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="pb-3">
                        <div className="flex items-center gap-2">
                            <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/30">
                                <TrendingUp className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                            </div>
                            <CardTitle className="text-lg">達成時の利回り</CardTitle>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <p className="text-3xl font-bold text-purple-600 dark:text-purple-400">
                            {formatPercent(finalYield)}
                        </p>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
