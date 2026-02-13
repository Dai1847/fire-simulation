"use client"

import { useState } from "react"
import { LifeCostForm } from "@/components/life-cost-form"
import { LifeCostResultDisplay } from "@/components/life-cost-result"
import { calculateLifeCost, LifeCostInput, LifeCostResult, DEFAULT_LIFE_COST_INPUT } from "@/lib/life-simulation"

export default function LifeCostPage() {
    const [result, setResult] = useState<LifeCostResult | null>(null);

    const handleCalculate = (input: LifeCostInput) => {
        const calculated = calculateLifeCost(input);
        setResult(calculated);
    };

    return (
        <main className="min-h-screen bg-slate-50 dark:bg-slate-900 py-12 px-4 transition-colors">
            <div className="max-w-4xl mx-auto space-y-8">
                <div className="text-center space-y-2">
                    <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
                        生活費シミュレーション
                    </h1>
                    <p className="text-slate-500 dark:text-slate-400">
                        現在の支出と将来の変化から、リアルな年間生活費を算出します。
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-8">
                    <LifeCostForm onCalculate={handleCalculate} />

                    {result && (
                        <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
                            <LifeCostResultDisplay result={result} />
                        </div>
                    )}
                </div>
            </div>
        </main>
    )
}
