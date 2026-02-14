import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

type RiskType = {
    name: string;
    description: string;
    style: string;
    advice: string;
    color: string;
};

type ResultCardProps = {
    score: number;
};

const getRiskType = (score: number): RiskType => {
    if (score <= 15) {
        return {
            name: "超保守型",
            description: "元本割れを極端に嫌い、安全性を最優先するタイプです。",
            style: "預金・個人向け国債・MMFなど、元本保証に近い商品中心。",
            advice: "インフレリスクには注意が必要です。少額から投資に触れてみるのも良いでしょう。",
            color: "text-blue-500",
        };
    } else if (score <= 20) {
        return {
            name: "安定型",
            description: "リスクは避けたいものの、資産運用には前向きなタイプです。",
            style: "債券中心のバランスファンドや、低リスクな投資信託。",
            advice: "長期投資を心がけ、時間を味方につける運用を目指しましょう。",
            color: "text-green-500",
        };
    } else if (score <= 24) {
        return {
            name: "バランス型",
            description: "リスクとリターンのバランスを重視する、標準的なタイプです。",
            style: "全世界株式やバランス型ファンド（株式:債券=50:50など）。",
            advice: "NISAやiDeCoを活用し、分散投資を基本にコツコツ積み立てましょう。",
            color: "text-yellow-500",
        };
    } else if (score <= 28) {
        return {
            name: "成長型",
            description: "多少のリスクをとっても、長期で資産を増やしたいタイプです。",
            style: "株式中心（S&P500、先進国株式など）の積極的な運用。",
            advice: "市場の変動に一喜一憂せず、積立を継続することが重要です。",
            color: "text-orange-500",
        };
    } else {
        return {
            name: "積極型",
            description: "大きなリターンを狙い、一時的な暴落も許容できるタイプです。",
            style: "株式100%（新興国やナスダック含む）や個別株投資。",
            advice: "リスク管理を徹底しつつ、余剰資金で果敢に攻めるスタイルです。",
            color: "text-red-500",
        };
    }
};

export function ResultCard({ score }: ResultCardProps) {
    const result = getRiskType(score);

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
        >
            <Card className="w-full max-w-2xl mx-auto shadow-lg">
                <CardHeader className="text-center space-y-4">
                    <CardTitle className="text-2xl">診断結果</CardTitle>
                    <div className="relative pt-4">
                        <span className="text-sm text-muted-foreground absolute top-0 left-0 w-full text-center">あなたの投資タイプは...</span>
                        <h2 className={`text-4xl font-bold mt-2 ${result.color}`}>{result.name}</h2>
                    </div>
                    <CardDescription className="text-lg mt-2">
                        スコア: {score} / 30
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="bg-muted p-6 rounded-lg space-y-4">
                        <div>
                            <h3 className="font-semibold mb-1">📝 タイプ説明</h3>
                            <p className="text-sm text-muted-foreground">{result.description}</p>
                        </div>
                        <div>
                            <h3 className="font-semibold mb-1">📈 向いている投資スタイル</h3>
                            <p className="text-sm text-muted-foreground">{result.style}</p>
                        </div>
                        <div>
                            <h3 className="font-semibold mb-1">💡 アドバイス</h3>
                            <p className="text-sm text-muted-foreground">{result.advice}</p>
                        </div>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                        <Button asChild variant="default" className="w-full h-auto py-4 flex flex-col items-center gap-1">
                            <Link href="/fire">
                                <span className="font-bold text-lg">FIREシミュレーション</span>
                                <span className="text-xs font-normal opacity-90">目標額を計算してみる</span>
                            </Link>
                        </Button>
                        <Button asChild variant="secondary" className="w-full h-auto py-4 flex flex-col items-center gap-1">
                            <Link href="/crash">
                                <span className="font-bold text-lg">暴落シミュレーション</span>
                                <span className="text-xs font-normal opacity-90">暴落時の資産推移を見る</span>
                            </Link>
                        </Button>
                        <Button asChild variant="outline" className="w-full h-auto py-4 flex flex-col items-center gap-1 col-span-2">
                            <Link href="/life">
                                <span className="font-bold text-lg">生活費シミュレーション</span>
                                <span className="text-xs font-normal opacity-90">家計を見直してみる</span>
                            </Link>
                        </Button>
                    </div>

                    <div className="text-center mt-4">
                        <Button variant="ghost" asChild>
                            <Link href="/risk-check">もう一度診断する</Link>
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </motion.div>
    );
}
