
"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { SimulationResult } from "@/lib/simulation"
import { BadgeCheck, Ban } from "lucide-react"

interface SimulationResultDisplayProps {
    result: SimulationResult | null;
    annualExpenses: number;
}

export function SimulationResultDisplay({ result, annualExpenses }: SimulationResultDisplayProps) {
    if (!result) return null;

    // Format currency helper
    const formatCurrency = (val: number) => {
        return new Intl.NumberFormat('ja-JP', { style: 'currency', currency: 'JPY' }).format(val);
    };

    const isFireAchieved = result.fireYear !== null;

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <Card>
                <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-muted-foreground">現在の年間配当金 (予測)</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">{formatCurrency(result.yearlyData[0].dividend)}</div>
                    <p className="text-xs text-muted-foreground">初年度</p>
                </CardContent>
            </Card>

            <Card className={isFireAchieved ? "border-green-500 bg-green-50 dark:bg-green-950/20" : ""}>
                <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-muted-foreground">FIRE 達成予測</CardTitle>
                </CardHeader>
                <CardContent>
                    {isFireAchieved ? (
                        <div className="flex items-center space-x-2">
                            <BadgeCheck className="h-6 w-6 text-green-600" />
                            <div className="text-2xl font-bold">{result.fireYear}年後</div>
                        </div>
                    ) : (
                        <div className="flex items-center space-x-2">
                            <Ban className="h-6 w-6 text-red-500" />
                            <div className="text-xl font-bold">40年以内未達成</div>
                        </div>
                    )}
                    <p className="text-xs text-muted-foreground">生活費: {formatCurrency(annualExpenses)}</p>
                </CardContent>
            </Card>

            <Card>
                <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-muted-foreground">FIRE達成時の配当金</CardTitle>
                </CardHeader>
                <CardContent>
                    {isFireAchieved && result.fireDividend !== null ? (
                        <div className="text-2xl font-bold">{formatCurrency(result.fireDividend)}</div>
                    ) : (
                        <div className="text-xl font-bold">-</div>
                    )}
                    <p className="text-xs text-muted-foreground">目標: {formatCurrency(annualExpenses)}</p>
                </CardContent>
            </Card>

            <Card>
                <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-muted-foreground">FIRE達成時の総資産</CardTitle>
                </CardHeader>
                <CardContent>
                    {isFireAchieved && result.fireAsset !== null ? (
                        <div className="text-2xl font-bold">{formatCurrency(result.fireAsset)}</div>
                    ) : (
                        <div className="text-xl font-bold">-</div>
                    )}
                </CardContent>
            </Card>
        </div>
    )
}
