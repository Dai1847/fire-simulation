"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { LifeCostResult } from "@/lib/life-simulation"
import { ArrowRight, Plane, ShoppingCart, Home } from "lucide-react"
import Link from "next/link"
import {
    PieChart, Pie, Cell, ResponsiveContainer, Tooltip as RechartsTooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend
} from "recharts"

interface LifeCostResultProps {
    result: LifeCostResult | null;
}

const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

export function LifeCostResultDisplay({ result }: LifeCostResultProps) {
    if (!result) return null;

    const pieData = [
        { name: '年間固定費', value: result.annualFixed },
        { name: '年間変動費', value: result.annualVariable },
        { name: '年間特別費', value: result.annualSpecial },
    ];

    const formatCurrency = (val: number) => new Intl.NumberFormat('ja-JP', { style: 'currency', currency: 'JPY' }).format(val);

    return (
        <div className="space-y-6">

            {/* Main Result Card */}
            <Card className="bg-slate-900 text-white border-0 shadow-lg">
                <CardHeader>
                    <CardTitle className="text-xl">シミュレーション結果</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <p className="text-slate-400 text-sm mb-1">現在の年間生活費合計</p>
                            <p className="text-3xl font-bold">{formatCurrency(result.currentAnnualCost)}</p>

                            <div className="mt-4 space-y-2 text-sm text-slate-300">
                                <div className="flex justify-between border-b border-slate-700 pb-1">
                                    <span>月間固定費合計</span>
                                    <span>{formatCurrency(result.monthlyFixed)}</span>
                                </div>
                                <div className="flex justify-between border-b border-slate-700 pb-1">
                                    <span>月間変動費合計</span>
                                    <span>{formatCurrency(result.monthlyVariable)}</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-slate-800 p-4 rounded-lg">
                            <p className="text-emerald-400 text-sm font-bold mb-1">FIREシミュレーション用 (インフレ + 教育費込)</p>
                            <p className="text-slate-400 text-xs mb-2">将来の生活費 ({Math.floor(result.futureAnnualCost / 10000)}万) + 教育費 ({Math.floor(result.totalEducationCost / 10000)}万)</p>
                            <p className="text-3xl font-bold text-emerald-400">{formatCurrency(result.finalAnnualCost)}</p>
                            <p className="text-xs text-slate-500 mt-2">※この金額をFIREシミュレーションの「年間生活費」として使用します</p>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Graphs Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

                {/* Breakdown Pie Chart */}
                <Card>
                    <CardHeader>
                        <CardTitle className="text-lg">支出内訳 (年間)</CardTitle>
                    </CardHeader>
                    <CardContent className="h-[250px]">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={pieData}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={50}
                                    outerRadius={80}
                                    paddingAngle={5}
                                    dataKey="value"
                                >
                                    {pieData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                                <RechartsTooltip formatter={(val: number | undefined) => formatCurrency(val || 0)} />
                                <Legend />
                            </PieChart>
                        </ResponsiveContainer>
                    </CardContent>
                </Card>

                {/* Education Education Cost (if children exist) */}
                {result.educationCosts.length > 0 && (
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-lg">教育費シミュレーション</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="text-center">
                                <p className="text-sm text-muted-foreground">指定年数後の教育費合計</p>
                                <p className="text-2xl font-bold text-blue-600">{formatCurrency(result.totalEducationCost)}</p>
                            </div>
                            <div className="space-y-2 text-sm max-h-[150px] overflow-y-auto">
                                {result.educationCosts.map((cost, idx) => (
                                    <div key={idx} className="flex justify-between items-center border-b pb-1">
                                        <span>子ども {idx + 1}</span>
                                        <span className="font-medium">{formatCurrency(cost)}</span>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                )}
            </div>

            {/* Action with Query Param */}
            <div className="flex justify-center pt-4">
                <Link href={`/fire?expenses=${result.finalAnnualCost}`}>
                    <Button size="lg" className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white shadow-lg">
                        この生活費でFIREシミュレーションへ <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                </Link>
            </div>

            <p className="text-center text-xs text-muted-foreground">
                ※ FIREシミュレーションページに遷移し、「年間生活費」に自動入力されます
            </p>
        </div>
    )
}
