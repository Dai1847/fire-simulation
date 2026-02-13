
"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { SimulationResult } from "@/lib/simulation"
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
    ReferenceLine,
} from "recharts"

interface SimulationChartProps {
    result: SimulationResult | null;
    annualExpenses: number;
}

export function SimulationChart({ result, annualExpenses }: SimulationChartProps) {
    if (!result) return null;

    return (
        <Card className="w-full h-[500px]">
            <CardHeader>
                <CardTitle>資産・配当推移シミュレーション</CardTitle>
            </CardHeader>
            <CardContent className="h-[400px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                        data={result.yearlyData}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
                        <XAxis
                            dataKey="year"
                            label={{ value: '年数', position: 'insideBottomRight', offset: -5 }}
                        />
                        <YAxis
                            yAxisId="left"
                            orientation="left"
                            tickFormatter={(value) => `¥${(value / 10000).toFixed(0)}万`}
                            label={{ value: '配当金 (円)', angle: -90, position: 'insideLeft' }}
                        />
                        <YAxis
                            yAxisId="right"
                            orientation="right"
                            tickFormatter={(value) => `¥${(value / 100000000).toFixed(1)}億`}
                            label={{ value: '総資産 (円)', angle: 90, position: 'insideRight' }}
                        />
                        <Tooltip
                            formatter={(value: number | string | Array<number | string> | undefined) => {
                                if (typeof value === 'number') {
                                    return new Intl.NumberFormat('ja-JP', { style: 'currency', currency: 'JPY' }).format(value);
                                }
                                return value;
                            }}
                            labelFormatter={(label) => `${label}年後`}
                        />
                        <Legend />
                        <ReferenceLine y={annualExpenses} yAxisId="left" label="生活費" stroke="red" strokeDasharray="3 3" />

                        {result.fireYear && (
                            <ReferenceLine x={result.fireYear} stroke="green" label="FIRE達成" />
                        )}

                        <Line
                            type="monotone"
                            dataKey="dividend"
                            name="年間配当金"
                            stroke="#8884d8"
                            activeDot={{ r: 8 }}
                            yAxisId="left"
                            strokeWidth={2}
                        />
                        <Line
                            type="monotone"
                            dataKey="asset"
                            name="総資産"
                            stroke="#82ca9d"
                            yAxisId="right"
                            strokeWidth={2}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>
    )
}
