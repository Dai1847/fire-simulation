"use client";

import { useSearchParams } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ResultSummary } from "../components/ResultSummary";
import { DividendChart } from "../components/DividendChart";
import { calculateDividendSimulation } from "../lib/calculations";
import { DividendInputParams } from "../types";
import Link from "next/link";
import { ArrowLeft, RotateCcw } from "lucide-react";
import { Suspense } from "react";

function ResultContent() {
    const searchParams = useSearchParams();

    // URLパラメータから入力値を取得
    const params: DividendInputParams = {
        currentInvestment: Number(searchParams.get("currentInvestment")) || 0,
        averageYield: Number(searchParams.get("averageYield")) || 0,
        monthlyContribution: Number(searchParams.get("monthlyContribution")) || 0,
        reinvestDividends: searchParams.get("reinvestDividends") === "true",
        targetAnnualDividend: Number(searchParams.get("targetAnnualDividend")) || 0,
        yieldGrowthRate: Number(searchParams.get("yieldGrowthRate")) || 0,
    };

    // シミュレーション実行
    const result = calculateDividendSimulation(params);

    return (
        <main className="min-h-screen bg-slate-50 dark:bg-slate-900">
            {/* ヘッダー */}
            <div className="bg-gradient-to-r from-teal-600 to-teal-700 text-white py-8 px-4">
                <div className="container mx-auto max-w-5xl">
                    <div className="flex items-center justify-between">
                        <h1 className="text-3xl font-bold">シミュレーション結果</h1>
                        <div className="flex gap-2">
                            <Link href="/dividend-target">
                                <Button
                                    variant="secondary"
                                    className="bg-white/20 hover:bg-white/30 text-white border-none"
                                >
                                    <RotateCcw className="mr-2 h-4 w-4" />
                                    再計算
                                </Button>
                            </Link>
                            <Link href="/">
                                <Button
                                    variant="secondary"
                                    className="bg-white/20 hover:bg-white/30 text-white border-none"
                                >
                                    <ArrowLeft className="mr-2 h-4 w-4" />
                                    ホーム
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* メインコンテンツ */}
            <div className="container mx-auto max-w-5xl px-4 py-8 space-y-8">
                {/* 結果サマリー */}
                <ResultSummary result={result} targetDividend={params.targetAnnualDividend} />

                {/* グラフ */}
                <Card>
                    <CardHeader>
                        <CardTitle>年間配当金の推移</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <DividendChart
                            data={result.yearlyData}
                            targetDividend={params.targetAnnualDividend}
                        />
                    </CardContent>
                </Card>

                {/* 入力条件の確認 */}
                <Card>
                    <CardHeader>
                        <CardTitle>シミュレーション条件</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                            <div className="flex justify-between p-3 bg-slate-50 dark:bg-slate-800 rounded-lg">
                                <span className="text-slate-600 dark:text-slate-400">現在の投資額</span>
                                <span className="font-semibold">
                                    {params.currentInvestment.toLocaleString()}円
                                </span>
                            </div>
                            <div className="flex justify-between p-3 bg-slate-50 dark:bg-slate-800 rounded-lg">
                                <span className="text-slate-600 dark:text-slate-400">平均利回り</span>
                                <span className="font-semibold">{params.averageYield}%</span>
                            </div>
                            <div className="flex justify-between p-3 bg-slate-50 dark:bg-slate-800 rounded-lg">
                                <span className="text-slate-600 dark:text-slate-400">毎月の積立額</span>
                                <span className="font-semibold">
                                    {params.monthlyContribution.toLocaleString()}円
                                </span>
                            </div>
                            <div className="flex justify-between p-3 bg-slate-50 dark:bg-slate-800 rounded-lg">
                                <span className="text-slate-600 dark:text-slate-400">配当再投資</span>
                                <span className="font-semibold">
                                    {params.reinvestDividends ? "あり" : "なし"}
                                </span>
                            </div>
                            <div className="flex justify-between p-3 bg-slate-50 dark:bg-slate-800 rounded-lg">
                                <span className="text-slate-600 dark:text-slate-400">目標配当金（年間）</span>
                                <span className="font-semibold">
                                    {params.targetAnnualDividend.toLocaleString()}円
                                </span>
                            </div>
                            <div className="flex justify-between p-3 bg-slate-50 dark:bg-slate-800 rounded-lg">
                                <span className="text-slate-600 dark:text-slate-400">利回り成長率</span>
                                <span className="font-semibold">{params.yieldGrowthRate}%</span>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* 補足情報 */}
                <Card className="border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/20">
                    <CardHeader>
                        <CardTitle className="text-amber-700 dark:text-amber-300">
                            💡 シミュレーション結果の活用方法
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                        <p>
                            <strong>目標達成を早めるには：</strong>
                        </p>
                        <ul className="list-disc list-inside space-y-1 ml-4">
                            <li>毎月の積立額を増やす</li>
                            <li>配当再投資を有効にして複利効果を活用する</li>
                            <li>より高利回りの銘柄を検討する（ただしリスクも考慮）</li>
                            <li>増配が期待できる銘柄を選ぶ</li>
                        </ul>
                        <p className="mt-4">
                            <strong>注意事項：</strong>
                        </p>
                        <ul className="list-disc list-inside space-y-1 ml-4">
                            <li>このシミュレーションは簡易的な試算です</li>
                            <li>実際の投資では市場変動や減配リスクがあります</li>
                            <li>税金は考慮済みの利回りを入力してください</li>
                        </ul>
                    </CardContent>
                </Card>
            </div>
        </main>
    );
}

export default function ResultPage() {
    return (
        <Suspense fallback={<div className="min-h-screen bg-slate-50 dark:bg-slate-900 flex items-center justify-center">読み込み中...</div>}>
            <ResultContent />
        </Suspense>
    );
}
