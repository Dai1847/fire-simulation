import { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calculator, TrendingUp, Wallet } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
    title: "FIREとは？必要資産の計算方法をわかりやすく解説",
    description: "FIRE（経済的自立・早期退職）の基本と必要資産の計算方法を解説。4%ルールを使った具体的なシミュレーションツールも紹介します。",
    keywords: ["FIRE", "経済的自立", "早期退職", "4%ルール", "資産形成", "配当金"],
    openGraph: {
        title: "FIREとは？必要資産の計算方法をわかりやすく解説",
        description: "FIRE（経済的自立・早期退職）の基本と必要資産の計算方法を解説。4%ルールを使った具体的なシミュレーションツールも紹介します。",
        type: "article",
    }
};

export default function FireBlogPost() {
    return (
        <main className="min-h-screen bg-slate-50 dark:bg-slate-900">
            <article className="container mx-auto max-w-4xl px-4 py-12">
                {/* Header */}
                <div className="mb-8">
                    <div className="flex items-center gap-2 mb-4">
                        <Badge variant="secondary" className="bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400">
                            FIRE
                        </Badge>
                        <time className="text-sm text-slate-500 dark:text-slate-400">
                            2026年2月15日
                        </time>
                    </div>
                    <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100 mb-4">
                        FIREとは？必要資産の計算方法をわかりやすく解説
                    </h1>
                    <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                        FIRE（Financial Independence, Retire Early）は、経済的自立を達成し早期退職を目指すライフスタイルです。この記事では、FIREの基本概念と必要資産の計算方法をわかりやすく解説します。
                    </p>
                </div>

                {/* Content */}
                <div className="prose prose-slate dark:prose-invert max-w-none">
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mt-12 mb-4 pb-2 border-b">
                        FIREとは？（結論）
                    </h2>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                        FIREとは、<strong>「経済的自立（Financial Independence）」</strong>を達成し、<strong>「早期退職（Retire Early）」</strong>を実現するライフスタイルのことです。
                    </p>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                        具体的には、資産運用による収入（配当金や利息）だけで生活費を賄えるようになり、働かなくても生活できる状態を目指します。
                    </p>

                    <Card className="my-6 border-blue-200 dark:border-blue-800 bg-blue-50/50 dark:bg-blue-900/10">
                        <CardHeader>
                            <CardTitle className="text-lg flex items-center gap-2 text-blue-900 dark:text-blue-100">
                                <TrendingUp className="h-5 w-5" />
                                FIREの基本原則
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                                <li className="flex items-start gap-2">
                                    <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                                    <span><strong>4%ルール:</strong> 年間生活費の25倍の資産があれば、年4%の取り崩しで生活できる</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                                    <span><strong>高い貯蓄率:</strong> 収入の50〜70%を貯蓄・投資に回す</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                                    <span><strong>インデックス投資:</strong> 低コストで分散投資を行う</span>
                                </li>
                            </ul>
                        </CardContent>
                    </Card>

                    <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mt-12 mb-4 pb-2 border-b">
                        必要資産の計算方法
                    </h2>

                    <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mt-8 mb-3">
                        4%ルールとは
                    </h3>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                        4%ルールは、アメリカの研究に基づく資産取り崩しの指標です。年間生活費の25倍の資産があれば、年4%ずつ取り崩しても30年以上資産が持続する可能性が高いとされています。
                    </p>

                    <div className="bg-slate-100 dark:bg-slate-800 rounded-lg p-6 my-6">
                        <p className="text-center text-2xl font-bold text-slate-900 dark:text-slate-100 mb-2">
                            必要資産 = 年間生活費 × 25
                        </p>
                        <p className="text-center text-sm text-slate-600 dark:text-slate-400">
                            または
                        </p>
                        <p className="text-center text-2xl font-bold text-slate-900 dark:text-slate-100 mt-2">
                            必要資産 = 年間生活費 ÷ 0.04
                        </p>
                    </div>

                    <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mt-8 mb-3">
                        具体例で計算してみよう
                    </h3>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                        例えば、年間生活費が300万円の場合：
                    </p>
                    <ul className="space-y-2 mb-4">
                        <li className="flex items-start gap-2 text-slate-700 dark:text-slate-300">
                            <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                            <span>必要資産 = 300万円 × 25 = <strong className="text-blue-600 dark:text-blue-400">7,500万円</strong></span>
                        </li>
                        <li className="flex items-start gap-2 text-slate-700 dark:text-slate-300">
                            <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                            <span>年間4%の取り崩し = 7,500万円 × 0.04 = 300万円</span>
                        </li>
                    </ul>

                    <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mt-8 mb-3">
                        注意点
                    </h3>
                    <Card className="my-6 border-amber-200 dark:border-amber-800 bg-amber-50/50 dark:bg-amber-900/10">
                        <CardContent className="pt-6">
                            <ul className="space-y-3 text-slate-700 dark:text-slate-300">
                                <li className="flex items-start gap-2">
                                    <Wallet className="h-5 w-5 text-amber-600 dark:text-amber-400 mt-0.5 flex-shrink-0" />
                                    <span><strong>インフレ:</strong> 物価上昇を考慮した生活費の見積もりが必要</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <Wallet className="h-5 w-5 text-amber-600 dark:text-amber-400 mt-0.5 flex-shrink-0" />
                                    <span><strong>税金:</strong> 配当金や売却益には税金がかかる</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <Wallet className="h-5 w-5 text-amber-600 dark:text-amber-400 mt-0.5 flex-shrink-0" />
                                    <span><strong>医療費:</strong> 退職後の健康保険料や医療費を考慮する</span>
                                </li>
                            </ul>
                        </CardContent>
                    </Card>

                    <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mt-12 mb-4 pb-2 border-b">
                        FIREシミュレーションツールで実践
                    </h2>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                        当サイトでは、あなたのFIRE達成年度を予測できる無料シミュレーションツールを提供しています。現在の資産、年間貯蓄額、期待リターンを入力するだけで、資産と配当金の推移をグラフで確認できます。
                    </p>

                    <Card className="my-8 border-red-200 dark:border-red-800 bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2 text-red-900 dark:text-red-100">
                                <Calculator className="h-6 w-6" />
                                FIRE資産形成シミュレーション
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-slate-700 dark:text-slate-300 mb-4">
                                高配当株投資によるFIRE達成年度を予測し、資産と配当金の推移をグラフ化します。
                            </p>
                            <Link href="/fire">
                                <Button className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white">
                                    シミュレーションを始める
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </Link>
                        </CardContent>
                    </Card>

                    <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mt-12 mb-4 pb-2 border-b">
                        まとめ
                    </h2>
                    <ul className="space-y-2 mb-8">
                        <li className="flex items-start gap-2 text-slate-700 dark:text-slate-300">
                            <span className="text-blue-600 dark:text-blue-400 mt-1">✓</span>
                            <span>FIREは経済的自立と早期退職を目指すライフスタイル</span>
                        </li>
                        <li className="flex items-start gap-2 text-slate-700 dark:text-slate-300">
                            <span className="text-blue-600 dark:text-blue-400 mt-1">✓</span>
                            <span>4%ルールでは年間生活費の25倍の資産が必要</span>
                        </li>
                        <li className="flex items-start gap-2 text-slate-700 dark:text-slate-300">
                            <span className="text-blue-600 dark:text-blue-400 mt-1">✓</span>
                            <span>インフレや税金を考慮した計画が重要</span>
                        </li>
                        <li className="flex items-start gap-2 text-slate-700 dark:text-slate-300">
                            <span className="text-blue-600 dark:text-blue-400 mt-1">✓</span>
                            <span>シミュレーションツールで具体的な計画を立てよう</span>
                        </li>
                    </ul>

                    {/* Related Articles */}
                    <div className="mt-12 pt-8 border-t">
                        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-4">
                            関連記事
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <Link href="/blog/high-dividend" className="group">
                                <Card className="h-full hover:shadow-lg transition-shadow">
                                    <CardHeader>
                                        <CardTitle className="text-base group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                            高配当株投資のメリット・デメリット完全ガイド
                                        </CardTitle>
                                    </CardHeader>
                                </Card>
                            </Link>
                            <Link href="/blog/life" className="group">
                                <Card className="h-full hover:shadow-lg transition-shadow">
                                    <CardHeader>
                                        <CardTitle className="text-base group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                            生活費の平均と節約ポイント【家計管理の基本】
                                        </CardTitle>
                                    </CardHeader>
                                </Card>
                            </Link>
                        </div>
                    </div>
                </div>
            </article>
        </main>
    );
}
