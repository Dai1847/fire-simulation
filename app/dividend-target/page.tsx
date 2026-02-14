"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { InputForm } from "./components/InputForm";
import { Target } from "lucide-react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function DividendTargetPage() {
    return (
        <main className="min-h-screen bg-slate-50 dark:bg-slate-900">
            {/* ヘッダー */}
            <div className="bg-gradient-to-r from-teal-600 to-teal-700 text-white py-12 px-4">
                <div className="container mx-auto max-w-4xl">
                    <Link href="/">
                        <Button
                            variant="ghost"
                            className="mb-4 text-white hover:bg-teal-700 hover:text-white"
                        >
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            ホームに戻る
                        </Button>
                    </Link>
                    <div className="flex items-center gap-4 mb-4">
                        <div className="p-3 rounded-full bg-white/20">
                            <Target className="w-10 h-10" />
                        </div>
                        <div>
                            <h1 className="text-3xl font-bold">配当金目標達成シミュレーション</h1>
                            <p className="text-teal-100 mt-2">
                                目標配当金額に到達するまでの年数を可視化
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* メインコンテンツ */}
            <div className="container mx-auto max-w-4xl px-4 py-8">
                {/* 説明カード */}
                <Card className="mb-8 border-teal-200 dark:border-teal-800">
                    <CardHeader>
                        <CardTitle className="text-teal-700 dark:text-teal-300">
                            このツールについて
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2 text-slate-600 dark:text-slate-400">
                        <p>
                            現在の投資額、利回り、毎月の積立額から、目標とする年間配当金に到達するまでの年数をシミュレーションします。
                        </p>
                        <ul className="list-disc list-inside space-y-1 ml-4">
                            <li>配当再投資の有無を選択可能</li>
                            <li>増配率（利回りの成長率）を考慮可能</li>
                            <li>年次推移をグラフで可視化</li>
                        </ul>
                    </CardContent>
                </Card>

                {/* 入力フォーム */}
                <InputForm />
            </div>
        </main>
    );
}
