import { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Landmark, TrendingUp } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
    title: "新NISAの使い方完全ガイド【2024年最新版】",
    description: "2024年から始まった新NISA制度の使い方を徹底解説。つみたて投資枠と成長投資枠の違い、高配当株投資での活用方法を紹介します。",
    keywords: ["新NISA", "NISA", "つみたて投資枠", "成長投資枠", "非課税", "資産運用"],
    openGraph: {
        title: "新NISAの使い方完全ガイド【2024年最新版】",
        description: "2024年から始まった新NISA制度の使い方を徹底解説。つみたて投資枠と成長投資枠の違い、高配当株投資での活用方法を紹介します。",
        type: "article",
    }
};

export default function NisaBlogPost() {
    return (
        <main className="min-h-screen bg-slate-50 dark:bg-slate-900">
            <article className="container mx-auto max-w-4xl px-4 py-12">
                {/* Header */}
                <div className="mb-8">
                    <div className="flex items-center gap-2 mb-4">
                        <Badge variant="secondary" className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">
                            新NISA
                        </Badge>
                        <time className="text-sm text-slate-500 dark:text-slate-400">
                            2026年2月15日
                        </time>
                    </div>
                    <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100 mb-4">
                        新NISAの使い方完全ガイド【2024年最新版】
                    </h1>
                    <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                        2024年から始まった新NISA制度は、投資の非課税枠が大幅に拡大されました。この記事では、新NISAの基本と効果的な活用方法を解説します。
                    </p>
                </div>

                {/* Content */}
                <div className="prose prose-slate dark:prose-invert max-w-none">
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mt-12 mb-4 pb-2 border-b">
                        新NISAとは？（結論）
                    </h2>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                        新NISAとは、<strong>投資で得た利益が非課税になる制度</strong>で、2024年から大幅に拡充されました。
                    </p>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                        年間投資枠が最大360万円、非課税保有限度額が1,800万円に拡大され、非課税期間も無期限になりました。
                    </p>

                    <Card className="my-6 border-green-200 dark:border-green-800 bg-green-50/50 dark:bg-green-900/10">
                        <CardHeader>
                            <CardTitle className="text-lg flex items-center gap-2 text-green-900 dark:text-green-100">
                                <Landmark className="h-5 w-5" />
                                新NISAの主な特徴
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                                <li className="flex items-start gap-2">
                                    <span className="text-green-600 dark:text-green-400 mt-1">•</span>
                                    <span><strong>年間投資枠:</strong> つみたて投資枠120万円 + 成長投資枠240万円 = 最大360万円</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-green-600 dark:text-green-400 mt-1">•</span>
                                    <span><strong>非課税保有限度額:</strong> 1,800万円（成長投資枠は1,200万円まで）</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-green-600 dark:text-green-400 mt-1">•</span>
                                    <span><strong>非課税期間:</strong> 無期限</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-green-600 dark:text-green-400 mt-1">•</span>
                                    <span><strong>対象年齢:</strong> 18歳以上</span>
                                </li>
                            </ul>
                        </CardContent>
                    </Card>

                    <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mt-12 mb-4 pb-2 border-b">
                        つみたて投資枠と成長投資枠
                    </h2>

                    <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mt-8 mb-3">
                        つみたて投資枠（年間120万円）
                    </h3>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                        <strong>長期・積立・分散投資に適した投資信託</strong>が対象です。
                    </p>
                    <ul className="space-y-2 mb-4">
                        <li className="flex items-start gap-2 text-slate-700 dark:text-slate-300">
                            <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                            <span><strong>対象商品:</strong> 金融庁が認めた低コストのインデックスファンドなど</span>
                        </li>
                        <li className="flex items-start gap-2 text-slate-700 dark:text-slate-300">
                            <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                            <span><strong>購入方法:</strong> 定期的な積立購入のみ</span>
                        </li>
                        <li className="flex items-start gap-2 text-slate-700 dark:text-slate-300">
                            <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                            <span><strong>おすすめ:</strong> 投資初心者、長期投資を考えている人</span>
                        </li>
                    </ul>

                    <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mt-8 mb-3">
                        成長投資枠（年間240万円）
                    </h3>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                        <strong>個別株やETFなど幅広い商品</strong>に投資できます。
                    </p>
                    <ul className="space-y-2 mb-4">
                        <li className="flex items-start gap-2 text-slate-700 dark:text-slate-300">
                            <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                            <span><strong>対象商品:</strong> 上場株式、ETF、REITなど（一部除外銘柄あり）</span>
                        </li>
                        <li className="flex items-start gap-2 text-slate-700 dark:text-slate-300">
                            <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                            <span><strong>購入方法:</strong> スポット購入・積立購入どちらも可能</span>
                        </li>
                        <li className="flex items-start gap-2 text-slate-700 dark:text-slate-300">
                            <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                            <span><strong>おすすめ:</strong> 高配当株投資、個別株投資をしたい人</span>
                        </li>
                    </ul>

                    <div className="bg-slate-100 dark:bg-slate-800 rounded-lg p-6 my-6">
                        <h4 className="font-bold text-slate-900 dark:text-slate-100 mb-3">
                            2つの枠は併用可能
                        </h4>
                        <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                            つみたて投資枠と成長投資枠は<strong>同時に利用できます</strong>。例えば、つみたて投資枠で全世界株式インデックスファンドを積立て、成長投資枠で高配当株を購入するといった使い分けが可能です。
                        </p>
                    </div>

                    <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mt-12 mb-4 pb-2 border-b">
                        高配当株投資での活用方法
                    </h2>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                        新NISAの<strong>成長投資枠</strong>を使えば、高配当株の配当金を非課税で受け取れます。
                    </p>

                    <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mt-8 mb-3">
                        活用例
                    </h3>
                    <Card className="my-6 border-blue-200 dark:border-blue-800 bg-blue-50/50 dark:bg-blue-900/10">
                        <CardContent className="pt-6">
                            <div className="space-y-4">
                                <div>
                                    <p className="font-semibold text-slate-900 dark:text-slate-100 mb-2">
                                        1. 国内高配当株を購入
                                    </p>
                                    <p className="text-slate-700 dark:text-slate-300 text-sm">
                                        商社株（三菱商事、三井物産など）や通信株（NTT、KDDIなど）を成長投資枠で購入
                                    </p>
                                </div>
                                <div>
                                    <p className="font-semibold text-slate-900 dark:text-slate-100 mb-2">
                                        2. 米国高配当ETFを購入
                                    </p>
                                    <p className="text-slate-700 dark:text-slate-300 text-sm">
                                        VYM、HDV、SPYDなどの米国高配当ETFを成長投資枠で購入
                                    </p>
                                </div>
                                <div>
                                    <p className="font-semibold text-slate-900 dark:text-slate-100 mb-2">
                                        3. 配当金を再投資
                                    </p>
                                    <p className="text-slate-700 dark:text-slate-300 text-sm">
                                        受け取った配当金を再投資して複利効果を最大化
                                    </p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mt-8 mb-3">
                        節税効果
                    </h3>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                        通常、配当金には約20%の税金がかかりますが、NISA口座なら<strong>非課税</strong>です。
                    </p>
                    <div className="bg-slate-100 dark:bg-slate-800 rounded-lg p-6 my-6">
                        <p className="text-center text-lg font-bold text-slate-900 dark:text-slate-100 mb-4">
                            節税効果の例
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="text-center">
                                <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">課税口座</p>
                                <p className="text-2xl font-bold text-red-600 dark:text-red-400">年間配当金40万円</p>
                                <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">→ 税引後 約32万円</p>
                            </div>
                            <div className="text-center">
                                <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">NISA口座</p>
                                <p className="text-2xl font-bold text-green-600 dark:text-green-400">年間配当金40万円</p>
                                <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">→ 税引後 40万円（非課税）</p>
                            </div>
                        </div>
                        <p className="text-center text-sm text-slate-600 dark:text-slate-400 mt-4">
                            <strong className="text-green-600 dark:text-green-400">年間8万円の節税効果！</strong>
                        </p>
                    </div>

                    <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mt-12 mb-4 pb-2 border-b">
                        高配当株ポートフォリオを診断
                    </h2>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                        新NISAで高配当株投資を始めるなら、まずは自分に合ったポートフォリオを診断してみましょう。当サイトの無料診断ツールで、最適な資産配分を確認できます。
                    </p>

                    <Card className="my-8 border-green-200 dark:border-green-800 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2 text-green-900 dark:text-green-100">
                                <TrendingUp className="h-6 w-6" />
                                高配当株 資産配分診断
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-slate-700 dark:text-slate-300 mb-4">
                                あなたに最適な高配当株ポートフォリオを診断。新NISAでの活用方法もアドバイスします。
                            </p>
                            <Link href="/high-dividend-allocation">
                                <Button className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white">
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
                            <span>新NISAは年間最大360万円、総額1,800万円まで非課税で投資できる</span>
                        </li>
                        <li className="flex items-start gap-2 text-slate-700 dark:text-slate-300">
                            <span className="text-blue-600 dark:text-blue-400 mt-1">✓</span>
                            <span>つみたて投資枠と成長投資枠を併用できる</span>
                        </li>
                        <li className="flex items-start gap-2 text-slate-700 dark:text-slate-300">
                            <span className="text-blue-600 dark:text-blue-400 mt-1">✓</span>
                            <span>成長投資枠で高配当株を購入すれば配当金が非課税になる</span>
                        </li>
                        <li className="flex items-start gap-2 text-slate-700 dark:text-slate-300">
                            <span className="text-blue-600 dark:text-blue-400 mt-1">✓</span>
                            <span>長期投資で複利効果を最大化しよう</span>
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
                            <Link href="/blog/fire" className="group">
                                <Card className="h-full hover:shadow-lg transition-shadow">
                                    <CardHeader>
                                        <CardTitle className="text-base group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                            FIREとは？必要資産の計算方法をわかりやすく解説
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
