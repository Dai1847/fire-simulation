"use client";

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
} from "recharts";
import { YearlyData } from "../types";
import { formatCurrency } from "../lib/calculations";

interface DividendChartProps {
    data: YearlyData[];
    targetDividend: number;
}

export function DividendChart({ data, targetDividend }: DividendChartProps) {
    // グラフ用にデータを整形
    const chartData = data.map((item) => ({
        year: `${item.year}年`,
        配当金: Math.round(item.annualDividend),
    }));

    return (
        <div className="w-full h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                    data={chartData}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" className="stroke-slate-200 dark:stroke-slate-700" />
                    <XAxis
                        dataKey="year"
                        className="text-xs text-slate-600 dark:text-slate-400"
                        interval="preserveStartEnd"
                    />
                    <YAxis
                        className="text-xs text-slate-600 dark:text-slate-400"
                        tickFormatter={(value) => `${(value / 10000).toFixed(0)}万`}
                    />
                    <Tooltip
                        contentStyle={{
                            backgroundColor: "rgba(255, 255, 255, 0.95)",
                            border: "1px solid #e2e8f0",
                            borderRadius: "8px",
                        }}
                        formatter={(value: number | undefined) =>
                            value !== undefined ? [formatCurrency(value), "年間配当金"] : ["", ""]
                        }
                    />
                    <Legend />
                    <ReferenceLine
                        y={targetDividend}
                        stroke="#ef4444"
                        strokeDasharray="5 5"
                        label={{
                            value: "目標",
                            position: "right",
                            fill: "#ef4444",
                            fontSize: 12,
                        }}
                    />
                    <Line
                        type="monotone"
                        dataKey="配当金"
                        stroke="#14b8a6"
                        strokeWidth={3}
                        dot={{ fill: "#14b8a6", r: 4 }}
                        activeDot={{ r: 6 }}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}
