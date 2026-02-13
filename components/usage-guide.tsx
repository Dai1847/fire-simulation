"use client"

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { HelpCircle } from "lucide-react"

export function UsageGuide() {
    return (
        <Card className="w-full bg-slate-50 dark:bg-slate-900 border-dashed">
            <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center gap-2 text-slate-700 dark:text-slate-300">
                    <HelpCircle className="h-5 w-5" />
                    シミュレーションの使い方・用語解説
                </CardTitle>
            </CardHeader>
            <CardContent>
                <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                        <AccordionTrigger>各項目の意味について</AccordionTrigger>
                        <AccordionContent className="text-slate-600 dark:text-slate-400 space-y-2">
                            <p><strong>初期資産額:</strong> 現在保有している株式資産の合計額です。</p>
                            <p><strong>年間投資額:</strong> 毎年追加で投資する金額です。「日本株比率」に応じて日本株・海外株に配分されます。</p>
                            <p><strong>日本株比率:</strong> 資産全体における日本株の割合です（残りは海外株となります）。</p>
                            <p><strong>配当利回り:</strong> 現在の株価に対する年間配当金の割合（税引前）です。</p>
                            <p><strong>増配率:</strong> 年ごとに配当金がどれくらい増えるかの予測率です。</p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-2">
                        <AccordionTrigger>税制パターンについて</AccordionTrigger>
                        <AccordionContent className="text-slate-600 dark:text-slate-400 space-y-2">
                            <ul className="list-disc pl-5 space-y-1">
                                <li><strong>NISA (1800万以下):</strong> 日本株は非課税(0%)、海外株は約20%課税される簡易モードです。</li>
                                <li><strong>日本株のみ課税:</strong> 日本株に約20%課税、海外株は非課税(0%)とします。</li>
                                <li><strong>海外株のみ課税:</strong> 海外株に約28%（現地税+国内税）課税、日本株は非課税(0%)とします。</li>
                                <li><strong>日本株＋海外株:</strong> 両方にそれぞれの税率がかかる現実的な特定口座パターンです。</li>
                                <li><strong>NISA (1800万以上):</strong> 特定口座と同じ扱い（両方課税）となります。</li>
                            </ul>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-3">
                        <AccordionTrigger>配当再投資率とは？</AccordionTrigger>
                        <AccordionContent className="text-slate-600 dark:text-slate-400">
                            <p>受け取った配当金（税引後）のうち、何%を再び投資に回すかの設定です。</p>
                            <p className="mt-2 text-sm text-amber-600 dark:text-amber-500">
                                ※ 100%にすると複利効果が最大化され、資産と配当金の伸びが早くなります。<br />
                                ※ 0%にすると配当金をすべて生活費や娯楽に使う想定となります。
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-4">
                        <AccordionTrigger>FIREの判定基準</AccordionTrigger>
                        <AccordionContent className="text-slate-600 dark:text-slate-400">
                            <p>
                                「<strong>税引後の年間配当金</strong>」が「<strong>年間生活費</strong>」を上回った年をFIRE達成と判定しています。
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </CardContent>
        </Card>
    )
}
