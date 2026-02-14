import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { getModelByScore } from "../data/models";
import { TrendingUp, Sparkles } from "lucide-react";

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
            <Card className="w-full max-w-4xl mx-auto shadow-lg">
                <CardHeader className="text-center space-y-4">
                    <CardTitle className="text-2xl">診断結果</CardTitle>
                    <div className="relative pt-4">
                        <span className="text-sm text-muted-foreground absolute top-0 left-0 w-full text-center">
                            あなたに最適な高配当株ポートフォリオは...
                        </span>
                        <h2 className="text-4xl font-bold mt-2 text-amber-600 dark:text-amber-400">
                            {model.name}
                        </h2>
                    </div>
                    <CardDescription className="text-lg mt-2">
                        スコア: {score}点
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-8">

                    {/* Allocation Table */}
                    <div className="overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800">
                        <table className="w-full">
                            <thead className="bg-amber-50 dark:bg-amber-900/20">
                                <tr>
                                    <th className="px-6 py-3 text-left text-sm font-semibold text-slate-700 dark:text-slate-300">
                                        資産クラス
                                    </th>
                                    <th className="px-6 py-3 text-right text-sm font-semibold text-slate-700 dark:text-slate-300">
                                        比率
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                                <tr className="hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-colors">
                                    <td className="px-6 py-4 text-sm font-medium text-slate-900 dark:text-slate-100">
                                        🇯🇵 国内高配当株
                                    </td>
                                    <td className="px-6 py-4 text-sm text-right font-semibold text-amber-600 dark:text-amber-400">
                                        {model.jpStock}%
                                    </td>
                                </tr>
                                <tr className="hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-colors">
                                    <td className="px-6 py-4 text-sm font-medium text-slate-900 dark:text-slate-100">
                                        🇺🇸 米国高配当ETF
                                    </td>
                                    <td className="px-6 py-4 text-sm text-right font-semibold text-amber-600 dark:text-amber-400">
                                        {model.usEtf}%
                                    </td>
                                </tr>
                                {model.growth !== undefined && model.growth > 0 && (
                                    <tr className="hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-colors">
                                        <td className="px-6 py-4 text-sm font-medium text-slate-900 dark:text-slate-100">
                                            📈 グロース株
                                        </td>
                                        <td className="px-6 py-4 text-sm text-right font-semibold text-amber-600 dark:text-amber-400">
                                            {model.growth}%
                                        </td>
                                    </tr>
                                )}
                                <tr className="hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-colors">
                                    <td className="px-6 py-4 text-sm font-medium text-slate-900 dark:text-slate-100">
                                        🏦 債券
                                    </td>
                                    <td className="px-6 py-4 text-sm text-right font-semibold text-amber-600 dark:text-amber-400">
                                        {model.bond}%
                                    </td>
                                </tr>
                                <tr className="hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-colors">
                                    <td className="px-6 py-4 text-sm font-medium text-slate-900 dark:text-slate-100">
                                        💵 現金
                                    </td>
                                    <td className="px-6 py-4 text-sm text-right font-semibold text-amber-600 dark:text-amber-400">
                                        {model.cash}%
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* Description Section */}
                    <div className="space-y-4">
                        <div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-lg border border-amber-100 dark:border-amber-800">
                            <h3 className="font-semibold text-amber-800 dark:text-amber-300 mb-2 flex items-center gap-2">
                                <Sparkles className="w-5 h-5" />
                                このポートフォリオの特徴
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

                    {/* Stock Examples */}
                    <div className="grid gap-6 md:grid-cols-2">
                        <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border border-blue-100 dark:border-blue-800">
                            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-3 flex items-center gap-2">
                                🇯🇵 国内高配当株の例
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {model.jpStockExamples.map((stock, idx) => (
                                    <span
                                        key={idx}
                                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium"
                                    >
                                        {stock}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="bg-indigo-50 dark:bg-indigo-900/20 p-6 rounded-lg border border-indigo-100 dark:border-indigo-800">
                            <h3 className="font-semibold text-indigo-800 dark:text-indigo-300 mb-3 flex items-center gap-2">
                                🇺🇸 米国高配当ETFの例
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {model.usEtfExamples.map((etf, idx) => (
                                    <span
                                        key={idx}
                                        className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300 rounded-full text-sm font-medium"
                                    >
                                        {etf}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Notes Section */}
                    <div className="bg-slate-50 dark:bg-slate-900/50 p-6 rounded-lg border border-slate-200 dark:border-slate-800">
                        <h3 className="font-semibold text-slate-800 dark:text-slate-300 mb-3">
                            ⚠️ 注意点
                        </h3>
                        <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                            {model.notes.map((note, idx) => (
                                <li key={idx} className="flex items-start gap-2">
                                    <span className="text-amber-500 mt-0.5">•</span>
                                    <span>{note}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Links Section */}
                    <div className="grid gap-4 sm:grid-cols-2">
                        <Button asChild variant="default" className="w-full h-auto py-4 flex flex-col items-center gap-1 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700">
                            <Link href="/fire">
                                <span className="font-bold text-lg">FIREシミュレーション</span>
                                <span className="text-xs font-normal opacity-90 text-amber-100">配当金で資産推移を予測</span>
                            </Link>
                        </Button>
                        <Button asChild variant="outline" className="w-full h-auto py-4 flex flex-col items-center gap-1">
                            <Link href="/risk-check">
                                <span className="font-bold text-lg">リスク許容度診断</span>
                                <span className="text-xs font-normal opacity-70">リスク耐性を詳しくチェック</span>
                            </Link>
                        </Button>
                        <Button asChild variant="secondary" className="w-full h-auto py-4 flex flex-col items-center gap-1 sm:col-span-2">
                            <Link href="/asset-allocation">
                                <span className="font-bold text-lg">資産配分診断（通常版）</span>
                                <span className="text-xs font-normal opacity-70">一般的な資産配分を診断</span>
                            </Link>
                        </Button>
                    </div>

                    <div className="text-center mt-4">
                        <Button variant="ghost" asChild>
                            <Link href="/high-dividend-allocation">もう一度診断する</Link>
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </motion.div>
    );
}
