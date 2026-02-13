"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { tools } from "@/lib/tools-config"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function Dashboard() {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-900">

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-slate-800 to-slate-900 text-white py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl mb-4">
            Life Simulation Tools
          </h1>
          <p className="text-slate-300 text-lg sm:text-xl max-w-2xl">
            あなたの人生設計をサポートする、便利なシミュレーションツール集。
          </p>
        </div>
      </div>

      {/* Tools Grid */}
      <div className="container mx-auto max-w-5xl px-4 py-12">
        <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-8 border-b pb-4">
          利用可能なツール
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool) => (
            <Link key={tool.id} href={tool.href} className="group block h-full">
              <Card className="h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border-slate-200 dark:border-slate-800 overflow-hidden">
                <div className={`h-2 w-full bg-gradient-to-r ${tool.bgGradient || 'from-slate-500 to-slate-600'}`} />
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <div className={`p-3 rounded-lg bg-slate-100 dark:bg-slate-800 ${tool.color}`}>
                      <tool.icon className="h-6 w-6" />
                    </div>
                    <ArrowRight className="h-5 w-5 text-slate-300 group-hover:text-slate-600 dark:text-slate-600 dark:group-hover:text-slate-400 transition-colors" />
                  </div>
                  <CardTitle className="text-xl group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {tool.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {tool.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}
