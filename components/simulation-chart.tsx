
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


const CustomDot = (props: any) => {
    const { cx, cy, payload, fireYear } = props;
    if (payload.year === fireYear) {
        return (
            <svg x={cx - 10} y={cy - 10} width={20} height={20} fill="red" viewBox="0 0 1024 1024">
                <path d="M512 0C229.23 0 0 229.23 0 512s229.23 512 512 512 512-229.23 512-512S794.77 0 512 0zm0 822.86c-171.43 0-310.86-139.43-310.86-310.86S340.57 201.14 512 201.14s310.86 139.43 310.86 310.86S683.43 822.86 512 822.86zm0-566.86c-141.71 0-256 114.29-256 256s114.29 256 256 256 256-114.29 256-256-114.29-256-256-256z" />
                <path d="M512 365.71c-80.57 0-146.29 65.71-146.29 146.29S431.43 658.29 512 658.29s146.29-65.71 146.29-146.29S592.57 365.71 512 365.71zm0 219.43c-40.57 0-73.14-32.57-73.14-73.14s32.57-73.14 73.14-73.14 73.14 32.57 73.14 73.14-32.57 73.14-73.14 73.14z" />
            </svg>
        );
    }
    return <circle cx={cx} cy={cy} r={0} fill="#8884d8" />; // Invisible for other points
};

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
                        <ReferenceLine y={annualExpenses} yAxisId="left" label={{ value: "生活費", position: 'insideTopLeft', fill: 'red' }} stroke="red" strokeDasharray="3 3" />

                        {result.fireYear && (
                            <ReferenceLine x={result.fireYear} stroke="green" strokeDasharray="3 3" label={{ value: "🔥🔥 FIRE達成!", position: 'insideTop', fill: 'green', fontSize: 20, fontWeight: 'bold' }} />
                        )}

                        <Line
                            type="monotone"
                            dataKey="dividend"
                            name="年間配当金"
                            stroke="#8884d8"
                            dot={<CustomDot fireYear={result.fireYear} />}
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
                            dot={false}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>
    )
}
