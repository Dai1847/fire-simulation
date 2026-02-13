"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { SimulationResult } from "@/lib/simulation"
import { CheckCircle2, XCircle, Flame } from "lucide-react"

interface SimulationResultProps {
    result: SimulationResult | null;
    annualExpenses: number;
}

export function SimulationResultDisplay({ result, annualExpenses }: SimulationResultProps) {
    if (!result) return null;

    const isFireYear = result.fireYear !== null;

    // Use fireYear directly if implementing V2 logic (it's null if not achieved)
    // The previous implementation used fireYear to mean "the year it happened".
    // result.fireYear is number | null.

    return (
        <div className="space-y-4">
            {/* FIRE Status Card */}
            <div className={`p-6 rounded-lg border-l-4 ${isFireYear ? 'border-l-red-500 bg-red-50 dark:bg-red-950/20' : 'border-l-slate-400 bg-slate-50 dark:bg-slate-900/50'}`}>
                <div className="flex items-center gap-3 mb-4">
                    {isFireYear ? (
                        <Flame className="h-8 w-8 text-red-500 fill-red-500 animate-pulse" />
                    ) : (
                        <XCircle className="h-8 w-8 text-slate-400" />
                    )}
                    <div>
                        <h3 className="text-xl font-bold">
                            {isFireYear
                                ? `${result.fireYear}年目にFIRE達成可能！`
                                : '40年以内のFIRE達成は困難です'}
                        </h3>
                        {isFireYear && (
                            <p className="text-sm text-slate-600 dark:text-slate-400">
                                税引後配当金が生活費を上回る予測です
                            </p>
                        )}
                    </div>
                </div>

                {isFireYear && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
                        <div className="bg-white dark:bg-slate-800 p-3 rounded shadow-sm">
                            <p className="text-xs text-muted-foreground uppercase tracking-wider">達成時の税引後配当</p>
                            <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                                ¥{result.fireDividendAfterTax?.toLocaleString()}
                            </p>
                        </div>
                        <div className="bg-white dark:bg-slate-800 p-3 rounded shadow-sm">
                            <p className="text-xs text-muted-foreground uppercase tracking-wider">達成時の総資産</p>
                            <p className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">
                                ¥{result.fireAsset?.toLocaleString()}
                            </p>
                        </div>
                    </div>
                )}
            </div>

            {/* Final Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card>
                    <CardHeader className="pb-2">
                        <CardTitle className="text-lg">40年後の総資産</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-3xl font-bold text-emerald-600 dark:text-emerald-400 mb-2">
                            ¥{result.finalAsset.toLocaleString()}
                        </p>
                        <div className="space-y-1 text-sm text-muted-foreground bg-slate-50 dark:bg-slate-900/50 p-3 rounded">
                            <div className="flex justify-between border-b border-slate-200 dark:border-slate-700 pb-1 mb-1">
                                <span>内訳</span>
                            </div>
                            <div className="flex justify-between">
                                <span>日本株資産</span>
                                <span className="font-medium text-slate-700 dark:text-slate-300">
                                    ¥{result.yearlyData[result.yearlyData.length - 1].japanAsset.toLocaleString()}
                                </span>
                            </div>
                            <div className="flex justify-between">
                                <span>海外株資産</span>
                                <span className="font-medium text-slate-700 dark:text-slate-300">
                                    ¥{result.yearlyData[result.yearlyData.length - 1].foreignAsset.toLocaleString()}
                                </span>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="pb-2">
                        <CardTitle className="text-lg">40年後の年間配当金</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                            ¥{result.finalDividendAfterTax.toLocaleString()} <span className="text-sm font-normal text-slate-500">(税引後)</span>
                        </p>
                        <div className="space-y-1 text-sm text-muted-foreground bg-slate-50 dark:bg-slate-900/50 p-3 rounded">
                            <div className="flex justify-between border-b border-slate-200 dark:border-slate-700 pb-1 mb-1">
                                <span>内訳 (税引後)</span>
                            </div>
                            <div className="flex justify-between">
                                <span>日本株</span>
                                <span className="font-medium text-slate-700 dark:text-slate-300">
                                    ¥{result.yearlyData[result.yearlyData.length - 1].japanDividendAfterTax.toLocaleString()}
                                </span>
                            </div>
                            <div className="flex justify-between">
                                <span>海外株</span>
                                <span className="font-medium text-slate-700 dark:text-slate-300">
                                    ¥{result.yearlyData[result.yearlyData.length - 1].foreignDividendAfterTax.toLocaleString()}
                                </span>
                            </div>
                            <div className="flex justify-between pt-2 mt-2 border-t border-slate-200 dark:border-slate-700 text-xs">
                                <span>税引前合計参考</span>
                                <span>¥{result.finalDividendPreTax.toLocaleString()}</span>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
