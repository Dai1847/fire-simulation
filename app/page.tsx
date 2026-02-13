
"use client"

import { useState } from "react"
import { calculateFireSimulation, SimulationInput, SimulationResult } from "@/lib/simulation"
import { SimulationForm } from "@/components/simulation-form"
import { SimulationResultDisplay } from "@/components/simulation-result"
import { SimulationChart } from "@/components/simulation-chart"

export default function Home() {
  const defaultValues: SimulationInput = {
    initialAsset: 2852896,
    annualInvestment: 400000,
    dividendYield: 5.25,
    dividendGrowthRate: 5,
    stockGrowthRate: 1,
    annualExpenses: 3600000,
  }

  const [simulationResult, setSimulationResult] = useState<SimulationResult | null>(null)
  const [currentExpenses, setCurrentExpenses] = useState<number>(defaultValues.annualExpenses)

  const handleCalculate = (input: SimulationInput) => {
    const result = calculateFireSimulation(input)
    setSimulationResult(result)
    setCurrentExpenses(input.annualExpenses)
  }

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-12 px-4 shadow-lg">
        <div className="max-w-7xl mx-auto container">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl mb-2">
            FIRE Simulation
          </h1>
          <p className="text-blue-100 text-lg sm:text-xl max-w-2xl">
            高配当株投資による経済的自立への道筋をシミュレーション。
            <br className="hidden sm:inline" />
            配当金の成長と複利効果を視覚化します。
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto container px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

          {/* Input Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            <SimulationForm
              defaultValues={defaultValues}
              onCalculate={handleCalculate}
            />
            <div className="text-xs text-slate-400 dark:text-slate-500 text-center">
              ※ シミュレーション結果は予測であり、将来の運用成果を保証するものではありません。
            </div>
          </div>

          {/* Results Area */}
          <div className="lg:col-span-8 space-y-8">
            {simulationResult ? (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-8">
                <SimulationResultDisplay
                  result={simulationResult}
                  annualExpenses={currentExpenses}
                />
                <SimulationChart
                  result={simulationResult}
                  annualExpenses={currentExpenses}
                />
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center h-64 border-2 border-dashed border-slate-300 dark:border-slate-700 rounded-lg bg-slate-100 dark:bg-slate-800/50">
                <p className="text-slate-500 dark:text-slate-400 font-medium">
                  左側のフォームから条件を入力し、「シミュレーション開始」を押してください
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}
