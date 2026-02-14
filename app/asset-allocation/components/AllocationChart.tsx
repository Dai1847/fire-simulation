"use client";

import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";
import { AllocationModel } from "../data/models";

const COLORS = ["#ef4444", "#3b82f6", "#eab308"]; // Red, Blue, Yellow

type AllocationChartProps = {
    model: AllocationModel;
};

export function AllocationChart({ model }: AllocationChartProps) {
    const data = [
        { name: "株式", value: model.stock },
        { name: "債券", value: model.bond },
        { name: "現金", value: model.cash },
    ].filter((item) => item.value > 0);

    return (
        <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                    <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={100}
                        paddingAngle={2}
                        dataKey="value"
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Tooltip
                        formatter={(value: number) => [`${value}%`, '配分比率']}
                        contentStyle={{ backgroundColor: 'var(--background)', borderColor: 'var(--border)' }}
                    />
                    <Legend verticalAlign="bottom" height={36} />
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
}
