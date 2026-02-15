import { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Wallet, Calculator } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
    title: "生活費の平均と節約ポイント【家計管理の基本】",
    description: "世帯別の生活費平均と効果的な節約方法を解説。将来の生活費をシミュレーションできるツールも紹介します。",
    keywords: ["生活費", "家計管理", "節約", "固定費", "変動費", "家計簿"],
    openGraph: {
        title: "生活費の平均と節約ポイント【家計管理の基本】",
        description: "世帯別の生活費平均と効果的な節約方法を解説。将来の生活費をシミュレーションできるツールも紹介します。",
        type: "article",
    }
};

export default function LifeBlogPost() {
    return (
        <main className="min-h-screen bg-slate-50 dark:bg-slate-900">
            <article className="container mx-auto max-w-4xl px-4 py-12">
                {/* Header */}
                <div className="mb-8">
                    <div className="flex items-center gap-2 mb-4">
                        <Badge variant="secondary" className="bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400">
                            生活費・家計
                        </Badge>
                        <time className="text-sm text-slate-500 dark:text-slate-400">
                            2026年2月15日
                        </time>
                    </div>
                    <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100 mb-4">
                        生活費の平均と節約ポイント【家計管理の基本】
                    </h1>
                    <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                        家計管理の第一歩は、自分の生活費を把握することです。この記事では、世帯別の生活費平均と効果的な節約方法を解説します。
                    </p>
                </div>

                {/* Content */}
                <div className="prose prose-slate dark:prose-invert max-w-none">
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mt-12 mb-4 pb-2 border-b">
                        世帯別の生活費平均（結論）
                    </h2>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                        総務省の家計調査（2023年）によると、世帯別の平均生活費は以下の通りです。
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
                        <Card className="border-blue-200 dark:border-blue-800">
                            <CardHeader className="pb-3">
                                <CardTitle className="text-lg text-blue-900 dark:text-blue-100">
                                    単身世帯
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-1">
                                    約16万円
                                </p>
                                <p className="text-sm text-slate-600 dark:text-slate-400">
                                    /月
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="border-blue-200 dark:border-blue-800">
                            <CardHeader className="pb-3">
                                <CardTitle className="text-lg text-blue-900 dark:text-blue-100">
                                    2人世帯
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-1">
                                    約25万円
                                </p>
                                <p className="text-sm text-slate-600 dark:text-slate-400">
                                    /月
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="border-blue-200 dark:border-blue-800">
                            <CardHeader className="pb-3">
                                <CardTitle className="text-lg text-blue-900 dark:text-blue-100">
                                    4人世帯
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-1">
                                    約30万円
                                </p>
                                <p className="text-sm text-slate-600 dark:text-slate-400">
                                    /月
                                </p>
                            </CardContent>
                        </Card>
                    </div>

                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                        ただし、これはあくまで平均値です。住んでいる地域（都市部か地方か）、住居形態（持ち家か賃貸か）、ライフスタイルによって大きく変わります。
                    </p>

                    <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mt-12 mb-4 pb-2 border-b">
                        生活費の内訳
                    </h2>

                    <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mt-8 mb-3">
                        固定費
                    </h3>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                        <strong>毎月ほぼ一定額かかる費用</strong>です。節約効果が大きいため、優先的に見直しましょう。
                    </p>

                    <Card className="my-6 border-slate-200 dark:border-slate-800">
                        <CardContent className="pt-6">
                            <ul className="space-y-3 text-slate-700 dark:text-slate-300">
                                <li className="flex items-start gap-2">
                                    <span className="text-blue-600 dark:text-blue-400 mt-1 font-bold">•</span>
                                    <div>
                                        <strong>住居費:</strong> 家賃・住宅ローン、管理費、固定資産税
                                        <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">目安: 手取り収入の25〜30%</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-blue-600 dark:text-blue-400 mt-1 font-bold">•</span>
                                    <div>
                                        <strong>水道光熱費:</strong> 電気・ガス・水道
                                        <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">目安: 1〜2万円（単身）、2〜3万円（家族）</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-blue-600 dark:text-blue-400 mt-1 font-bold">•</span>
                                    <div>
                                        <strong>通信費:</strong> スマホ・インターネット
                                        <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">目安: 5,000〜10,000円</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-blue-600 dark:text-blue-400 mt-1 font-bold">•</span>
                                    <div>
                                        <strong>保険料:</strong> 生命保険・医療保険・自動車保険
                                        <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">目安: 1〜3万円</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-blue-600 dark:text-blue-400 mt-1 font-bold">•</span>
                                    <div>
                                        <strong>サブスクリプション:</strong> 動画配信・音楽・ジムなど
                                        <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">目安: 3,000〜10,000円</p>
                                    </div>
                                </li>
                            </ul>
                        </CardContent>
                    </Card>

                    <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mt-8 mb-3">
                        変動費
                    </h3>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                        <strong>月によって金額が変わる費用</strong>です。日々の意識で節約できます。
                    </p>

                    <Card className="my-6 border-slate-200 dark:border-slate-800">
                        <CardContent className="pt-6">
                            <ul className="space-y-3 text-slate-700 dark:text-slate-300">
                                <li className="flex items-start gap-2">
                                    <span className="text-blue-600 dark:text-blue-400 mt-1 font-bold">•</span>
                                    <div>
                                        <strong>食費:</strong> 自炊・外食
                                        <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">目安: 3〜5万円（単身）、6〜8万円（家族）</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-blue-600 dark:text-blue-400 mt-1 font-bold">•</span>
                                    <div>
                                        <strong>日用品:</strong> 洗剤・ティッシュなど
                                        <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">目安: 5,000〜10,000円</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-blue-600 dark:text-blue-400 mt-1 font-bold">•</span>
                                    <div>
                                        <strong>交通費:</strong> ガソリン・公共交通機関
                                        <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">目安: 5,000〜20,000円</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-blue-600 dark:text-blue-400 mt-1 font-bold">•</span>
                                    <div>
                                        <strong>娯楽・交際費:</strong> 趣味・飲み会など
                                        <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">目安: 2〜5万円</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-blue-600 dark:text-blue-400 mt-1 font-bold">•</span>
                                    <div>
                                        <strong>被服費:</strong> 衣類・靴など
                                        <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">目安: 5,000〜20,000円</p>
                                    </div>
                                </li>
                            </ul>
                        </CardContent>
                    </Card>

                    <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mt-12 mb-4 pb-2 border-b">
                        効果的な節約ポイント
                    </h2>

                    <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mt-8 mb-3">
                        1. 固定費の見直し（最優先）
                    </h3>
                    <Card className="my-6 border-green-200 dark:border-green-800 bg-green-50/50 dark:bg-green-900/10">
                        <CardContent className="pt-6">
                            <ul className="space-y-3 text-slate-700 dark:text-slate-300">
                                <li className="flex items-start gap-2">
                                    <Wallet className="h-5 w-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <strong>スマホを格安SIMに変更:</strong> 月5,000円以上の節約
                                    </div>
                                </li>
                                <li className="flex items-start gap-2">
                                    <Wallet className="h-5 w-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <strong>保険の見直し:</strong> 不要な特約を削減
                                    </div>
                                </li>
                                <li className="flex items-start gap-2">
                                    <Wallet className="h-5 w-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <strong>サブスク整理:</strong> 使っていないサービスを解約
                                    </div>
                                </li>
                                <li className="flex items-start gap-2">
                                    <Wallet className="h-5 w-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <strong>電力会社の変更:</strong> 電力自由化で安いプランに
                                    </div>
                                </li>
                            </ul>
                        </CardContent>
                    </Card>

                    <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mt-8 mb-3">
                        2. 食費の節約
                    </h3>
                    <ul className="space-y-2 mb-4">
                        <li className="flex items-start gap-2 text-slate-700 dark:text-slate-300">
                            <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                            <span><strong>自炊を増やす:</strong> 外食を週1〜2回に抑える</span>
                        </li>
                        <li className="flex items-start gap-2 text-slate-700 dark:text-slate-300">
                            <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                            <span><strong>まとめ買い:</strong> 週末にまとめて買い物</span>
                        </li>
                        <li className="flex items-start gap-2 text-slate-700 dark:text-slate-300">
                            <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                            <span><strong>冷凍保存:</strong> 食材を無駄にしない</span>
                        </li>
                    </ul>

                    <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mt-8 mb-3">
                        3. 先取り貯蓄
                    </h3>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                        給料が入ったら、<strong>すぐに貯蓄分を別口座に移す</strong>ことで、確実に貯金できます。
                    </p>
                    <div className="bg-slate-100 dark:bg-slate-800 rounded-lg p-6 my-6">
                        <p className="text-center text-lg font-bold text-slate-900 dark:text-slate-100 mb-2">
                            貯蓄の目安
                        </p>
                        <p className="text-center text-2xl font-bold text-blue-600 dark:text-blue-400">
                            手取り収入の20〜30%
                        </p>
                    </div>

                    <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mt-12 mb-4 pb-2 border-b">
                        生活費シミュレーションツールで実践
                    </h2>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                        当サイトでは、将来の生活費をシミュレーションできる無料ツールを提供しています。インフレや教育費を考慮した、リアルな生活費を算出できます。
                    </p>

                    <Card className="my-8 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2 text-blue-900 dark:text-blue-100">
                                <Calculator className="h-6 w-6" />
                                生活費シミュレーション
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-slate-700 dark:text-slate-300 mb-4">
                                インフレや教育費を考慮した、将来必要となるリアルな生活費を算出します。
                            </p>
                            <Link href="/life">
                                <Button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white">
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
                            <span>世帯別の平均生活費を把握しよう</span>
                        </li>
                        <li className="flex items-start gap-2 text-slate-700 dark:text-slate-300">
                            <span className="text-blue-600 dark:text-blue-400 mt-1">✓</span>
                            <span>固定費の見直しが最も効果的な節約方法</span>
                        </li>
                        <li className="flex items-start gap-2 text-slate-700 dark:text-slate-300">
                            <span className="text-blue-600 dark:text-blue-400 mt-1">✓</span>
                            <span>食費は自炊とまとめ買いで節約</span>
                        </li>
                        <li className="flex items-start gap-2 text-slate-700 dark:text-slate-300">
                            <span className="text-blue-600 dark:text-blue-400 mt-1">✓</span>
                            <span>先取り貯蓄で確実に資産形成</span>
                        </li>
                        <li className="flex items-start gap-2 text-slate-700 dark:text-slate-300">
                            <span className="text-blue-600 dark:text-blue-400 mt-1">✓</span>
                            <span>シミュレーションツールで将来の生活費を把握しよう</span>
                        </li>
                    </ul>

                    {/* Related Articles */}
                    <div className="mt-12 pt-8 border-t">
                        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-4">
                            関連記事
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <Link href="/blog/fire" className="group">
                                <Card className="h-full hover:shadow-lg transition-shadow">
                                    <CardHeader>
                                        <CardTitle className="text-base group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                            FIREとは？必要資産の計算方法をわかりやすく解説
                                        </CardTitle>
                                    </CardHeader>
                                </Card>
                            </Link>
                            <Link href="/blog/high-dividend" className="group">
                                <Card className="h-full hover:shadow-lg transition-shadow">
                                    <CardHeader>
                                        <CardTitle className="text-base group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                            高配当株投資のメリット・デメリット完全ガイド
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
