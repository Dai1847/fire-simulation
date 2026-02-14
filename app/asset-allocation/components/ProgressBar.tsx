import React from "react";

type ProgressBarProps = {
    current: number;
    total: number;
};

export function ProgressBar({ current, total }: ProgressBarProps) {
    const percentage = Math.round((current / total) * 100);

    return (
        <div className="w-full space-y-2">
            <div className="flex justify-between text-sm text-muted-foreground">
                <span>質問 {current} / {total}</span>
                <span>{percentage}%</span>
            </div>
            <div className="h-2 w-full overflow-hidden rounded-full bg-secondary">
                <div
                    className="h-full bg-blue-600 transition-all duration-300 ease-in-out"
                    style={{ width: `${percentage}%` }}
                />
            </div>
        </div>
    );
}
