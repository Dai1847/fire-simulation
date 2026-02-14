import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { getModelByScore } from "../data/models";
import { AllocationChart } from "./AllocationChart";

type ResultCardProps = {
    score: number;
};

export function ResultCard({ score }: ResultCardProps) {
    const model = getModelByScore(score);

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
        >
            <Card className="w-full max-w-3xl mx-auto shadow-lg">
                <CardHeader className="text-center space-y-4">
                    <CardTitle className="text-2xl">診断結果</CardTitle>
                    <div className="relative pt-4">
                        <span className="text-sm text-muted-foreground absolute top-0 left-0 w-full text-center">
                            あなたの最適プランは...
                        </span>
                        <h2 className="text-4xl font-bold mt-2 text-blue-600 dark:text-blue-400">
                            {model.name}
                        </h2>
                    </div>
                    <CardDescription className="text-lg mt-2">
                        株式 {model.stock}% / 債券 {model.bond}% / 現金 {model.cash}%
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-8">

                    {/* Chart Section */}
                    <div className="flex justify-center items-center py-4 bg-slate-50 dark:bg-slate-900/50 rounded-xl">
                        <AllocationChart model={model} />
                    </div>

                    {/* Description Section */}
                    <div className="space-y-4">
                        <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border border-blue-100 dark:border-blue-800">
                            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2 flex items-center gap-2">
                                📊 このポートフォリオの特徴
                            </h3>
                            <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300 mb-4">
                                {model.description}
                            </p>
                            <ul className="list-disc list-inside space-y-1 text-sm text-slate-600 dark:text-slate-400">
                                {model.features.map((feature, idx) => (
                                    <li key={idx}>{feature}</li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Links Section */}
                    <div className="grid gap-4 sm:grid-cols-2">
                        <Button asChild variant="default" className="w-full h-auto py-4 flex flex-col items-center gap-1 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
                            <Link href="/fire">
                                <span className="font-bold text-lg">FIREシミュレーション</span>
                                <span className="text-xs font-normal opacity-90 text-blue-100">モデルを使って資産推移を予測</span>
                            </Link>
                        </Button>
                        <Button asChild variant="outline" className="w-full h-auto py-4 flex flex-col items-center gap-1">
                            <Link href="/risk-check">
                                <span className="font-bold text-lg">リスク許容度診断</span>
                                <span className="text-xs font-normal opacity-70">リスク耐性を詳しくチェック</span>
                            </Link>
                        </Button>
                        <Button asChild variant="secondary" className="w-full h-auto py-4 flex flex-col items-center gap-1 sm:col-span-2">
                            <Link href="/crash">
                                <span className="font-bold text-lg">暴落シミュレーション</span>
                                <span className="text-xs font-normal opacity-70">この配分での暴落耐性をテスト</span>
                            </Link>
                        </Button>
                    </div>

                    <div className="text-center mt-4">
                        <Button variant="ghost" asChild>
                            <Link href="/asset-allocation">もう一度診断する</Link>
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </motion.div>
    );
}
