import { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, AlertCircle, CheckCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
    title: "高配当株投資のメリット・デメリット完全ガイド",
    description: "高配当株投資の特徴、メリット・デメリットを徹底解説。最適な資産配分を診断できるツールも紹介します。",
    keywords: ["高配当株", "配当金", "インカムゲイン", "資産運用", "ポートフォリオ", "ETF"],
    openGraph: {
        title: "高配当株投資のメリット・デメリット完全ガイド",
        description: "高配当株投資の特徴、メリット・デメリットを徹底解説。最適な資産配分を診断できるツールも紹介します。",
        type: "article",
    }
};

export default function HighDividendBlogPost() {
    return (
        <main className="min-h-screen bg-slate-50 dark:bg-slate-900">
            <article className="container mx-auto max-w-4xl px-4 py-12">
                {/* Header */}
                <div className="mb-8">
                    <div className="flex items-center gap-2 mb-4">
                        <Badge variant="secondary" className="bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400">
                            高配当投資
                        </Badge>
                        <time className="text-sm text-slate-500 dark:text-slate-400">
                            2026年2月15日
                        </time>
                    </div>
                    <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100 mb-4">
                        高配当株投資のメリット・デメリット完全ガイド
                    </h1>
                    <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                        高配当株投資は、安定した配当収入を得られる人気の投資手法です。この記事では、高配当株投資の特徴、メリット・デメリット、そして最適なポートフォリオの組み方を解説します。
                    </p>
                </div>

                {/* Content */}
                <div className="prose prose-slate dark:prose-invert max-w-none">
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mt-12 mb-4 pb-2 border-b">
                        高配当株投資とは？（結論）
                    </h2>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                        高配当株投資とは、<strong>配当利回りが高い株式に投資し、定期的な配当収入（インカムゲイン）を得る投資手法</strong>です。
                    </p>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                        一般的に、配当利回り3〜5%以上の銘柄を「高配当株」と呼びます。日本株では商社株や通信株、米国株ではETF（VYM、HDV、SPYDなど）が人気です。
                    </p>

                    <div className="bg-slate-100 dark:bg-slate-800 rounded-lg p-6 my-6">
                        <p className="text-center text-xl font-bold text-slate-900 dark:text-slate-100 mb-2">
                            配当利回り = 年間配当金 ÷ 株価 × 100
                        </p>
                        <p className="text-center text-sm text-slate-600 dark:text-slate-400 mt-4">
                            例: 株価1,000円、年間配当金40円 → 配当利回り4%
                        </p>
                    </div>

                    <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mt-12 mb-4 pb-2 border-b">
                        メリット
                    </h2>

                    <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mt-8 mb-3">
                        1. 安定したキャッシュフロー
                    </h3>
                    <Card className="my-6 border-green-200 dark:border-green-800 bg-green-50/50 dark:bg-green-900/10">
                        <CardContent className="pt-6">
                            <div className="flex items-start gap-3">
                                <CheckCircle className="h-6 w-6 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                                <div>
                                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-2">
                                        <strong>定期的な配当収入が得られる</strong>ため、生活費の一部を賄ったり、再投資に回したりできます。
                                    </p>
                                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                                        株価が下落しても配当金が維持されれば、心理的な安心感があります。
                                    </p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mt-8 mb-3">
                        2. 複利効果による資産拡大
                    </h3>
                    <Card className="my-6 border-green-200 dark:border-green-800 bg-green-50/50 dark:bg-green-900/10">
                        <CardContent className="pt-6">
                            <div className="flex items-start gap-3">
                                <CheckCircle className="h-6 w-6 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                                <div>
                                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-2">
                                        <strong>配当金を再投資する</strong>ことで、複利効果により資産が加速度的に増えていきます。
                                    </p>
                                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                                        長期投資では、この複利効果が大きな差を生み出します。
                                    </p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mt-8 mb-3">
                        3. 下落相場でも収入が得られる
                    </h3>
                    <Card className="my-6 border-green-200 dark:border-green-800 bg-green-50/50 dark:bg-green-900/10">
                        <CardContent className="pt-6">
                            <div className="flex items-start gap-3">
                                <CheckCircle className="h-6 w-6 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                                <div>
                                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                                        株価が下落しても、企業が配当を維持していれば収入は途絶えません。市場の変動に左右されにくい投資手法です。
                                    </p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mt-12 mb-4 pb-2 border-b">
                        デメリット
                    </h2>

                    <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mt-8 mb-3">
                        1. 減配リスク
                    </h3>
                    <Card className="my-6 border-red-200 dark:border-red-800 bg-red-50/50 dark:bg-red-900/10">
                        <CardContent className="pt-6">
                            <div className="flex items-start gap-3">
                                <AlertCircle className="h-6 w-6 text-red-600 dark:text-red-400 mt-0.5 flex-shrink-0" />
                                <div>
                                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-2">
                                        <strong>業績悪化により配当金が減額される</strong>リスクがあります。
                                    </p>
                                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                                        特に景気後退期には、多くの企業が減配や無配に転じる可能性があります。
                                    </p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mt-8 mb-3">
                        2. 成長性の制約
                    </h3>
                    <Card className="my-6 border-red-200 dark:border-red-800 bg-red-50/50 dark:bg-red-900/10">
                        <CardContent className="pt-6">
                            <div className="flex items-start gap-3">
                                <AlertCircle className="h-6 w-6 text-red-600 dark:text-red-400 mt-0.5 flex-shrink-0" />
                                <div>
                                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-2">
                                        高配当企業は成熟企業が多く、<strong>株価の大幅な上昇は期待しにくい</strong>傾向があります。
                                    </p>
                                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                                        成長株と比べると、キャピタルゲイン（値上がり益）は限定的です。
                                    </p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mt-8 mb-3">
                        3. 税金の負担
                    </h3>
                    <Card className="my-6 border-red-200 dark:border-red-800 bg-red-50/50 dark:bg-red-900/10">
                        <CardContent className="pt-6">
                            <div className="flex items-start gap-3">
                                <AlertCircle className="h-6 w-6 text-red-600 dark:text-red-400 mt-0.5 flex-shrink-0" />
                                <div>
                                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-2">
                                        配当金には<strong>約20%の税金</strong>がかかります（日本株・米国株ともに）。
                                    </p>
                                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                                        NISA口座を活用すれば非課税になるため、積極的に活用しましょう。
                                    </p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mt-12 mb-4 pb-2 border-b">
                        高配当株ポートフォリオ診断ツールで実践
                    </h2>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                        当サイトでは、あなたに最適な高配当株ポートフォリオを診断できる無料ツールを提供しています。年齢、リスク許容度、投資経験などの質問に答えるだけで、国内高配当株・米国ETF・債券・現金の最適比率を提案します。
                    </p>

                    <Card className="my-8 border-amber-200 dark:border-amber-800 bg-gradient-to-br from-amber-50 to-yellow-50 dark:from-amber-900/20 dark:to-yellow-900/20">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2 text-amber-900 dark:text-amber-100">
                                <TrendingUp className="h-6 w-6" />
                                高配当株 資産配分診断
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-slate-700 dark:text-slate-300 mb-4">
                                高配当株投資に特化した資産配分を診断。国内高配当株・米国ETF・債券・現金の最適比率を提案します。
                            </p>
                            <Link href="/high-dividend-allocation">
                                <Button className="w-full sm:w-auto bg-amber-600 hover:bg-amber-700 text-white">
                                    診断を始める
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
                            <span>高配当株投資は安定したキャッシュフローが得られる</span>
                        </li>
                        <li className="flex items-start gap-2 text-slate-700 dark:text-slate-300">
                            <span className="text-blue-600 dark:text-blue-400 mt-1">✓</span>
                            <span>配当再投資による複利効果で資産が拡大する</span>
                        </li>
                        <li className="flex items-start gap-2 text-slate-700 dark:text-slate-300">
                            <span className="text-blue-600 dark:text-blue-400 mt-1">✓</span>
                            <span>減配リスクや成長性の制約に注意が必要</span>
                        </li>
                        <li className="flex items-start gap-2 text-slate-700 dark:text-slate-300">
                            <span className="text-blue-600 dark:text-blue-400 mt-1">✓</span>
                            <span>NISA口座を活用して税負担を軽減しよう</span>
                        </li>
                        <li className="flex items-start gap-2 text-slate-700 dark:text-slate-300">
                            <span className="text-blue-600 dark:text-blue-400 mt-1">✓</span>
                            <span>診断ツールで自分に合ったポートフォリオを見つけよう</span>
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
                            <Link href="/blog/nisa" className="group">
                                <Card className="h-full hover:shadow-lg transition-shadow">
                                    <CardHeader>
                                        <CardTitle className="text-base group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                            新NISAの使い方完全ガイド【2024年最新版】
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
