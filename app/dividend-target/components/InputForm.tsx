"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { DividendInputParams } from "../types";

export function InputForm() {
    const router = useRouter();
    const [formData, setFormData] = useState<DividendInputParams>({
        currentInvestment: 3000000, // 300万円
        averageYield: 3.5, // 3.5%
        monthlyContribution: 30000, // 3万円
        reinvestDividends: true,
        targetAnnualDividend: 600000, // 60万円
        yieldGrowthRate: 1, // 1%
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // URLパラメータとして結果ページに渡す
        const params = new URLSearchParams({
            currentInvestment: formData.currentInvestment.toString(),
            averageYield: formData.averageYield.toString(),
            monthlyContribution: formData.monthlyContribution.toString(),
            reinvestDividends: formData.reinvestDividends.toString(),
            targetAnnualDividend: formData.targetAnnualDividend.toString(),
            yieldGrowthRate: formData.yieldGrowthRate.toString(),
        });

        router.push(`/dividend-target/result?${params.toString()}`);
    };

    return (
        <form onSubmit={handleSubmit}>
            <Card>
                <CardHeader>
                    <CardTitle>シミュレーション条件を入力</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                    {/* 現在の投資額 */}
                    <div className="space-y-2">
                        <Label htmlFor="currentInvestment">現在の投資額（円）</Label>
                        <Input
                            id="currentInvestment"
                            type="number"
                            min="0"
                            step="10000"
                            value={formData.currentInvestment}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    currentInvestment: Number(e.target.value),
                                })
                            }
                            required
                        />
                        <p className="text-sm text-muted-foreground">
                            例：300万円 = 3000000
                        </p>
                    </div>

                    {/* 平均利回り */}
                    <div className="space-y-2">
                        <Label htmlFor="averageYield">平均利回り（税引き後、%）</Label>
                        <Input
                            id="averageYield"
                            type="number"
                            min="0"
                            max="100"
                            step="0.1"
                            value={formData.averageYield}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    averageYield: Number(e.target.value),
                                })
                            }
                            required
                        />
                        <p className="text-sm text-muted-foreground">
                            例：3.5% （税引き後の実質利回り）
                        </p>
                    </div>

                    {/* 毎月の積立額 */}
                    <div className="space-y-2">
                        <Label htmlFor="monthlyContribution">毎月の積立額（円）</Label>
                        <Input
                            id="monthlyContribution"
                            type="number"
                            min="0"
                            step="1000"
                            value={formData.monthlyContribution}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    monthlyContribution: Number(e.target.value),
                                })
                            }
                            required
                        />
                        <p className="text-sm text-muted-foreground">
                            例：3万円 = 30000
                        </p>
                    </div>

                    {/* 配当金の目標額 */}
                    <div className="space-y-2">
                        <Label htmlFor="targetAnnualDividend">
                            配当金の目標額（年間、円）
                        </Label>
                        <Input
                            id="targetAnnualDividend"
                            type="number"
                            min="0"
                            step="10000"
                            value={formData.targetAnnualDividend}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    targetAnnualDividend: Number(e.target.value),
                                })
                            }
                            required
                        />
                        <p className="text-sm text-muted-foreground">
                            例：60万円（月5万円） = 600000
                        </p>
                    </div>

                    {/* 配当再投資 */}
                    <div className="flex items-center justify-between space-x-2 p-4 border rounded-lg">
                        <div className="space-y-0.5">
                            <Label htmlFor="reinvestDividends" className="text-base">
                                配当再投資
                            </Label>
                            <p className="text-sm text-muted-foreground">
                                受け取った配当金を再投資する
                            </p>
                        </div>
                        <Switch
                            id="reinvestDividends"
                            checked={formData.reinvestDividends}
                            onCheckedChange={(checked) =>
                                setFormData({ ...formData, reinvestDividends: checked })
                            }
                        />
                    </div>

                    {/* 想定利回りの成長率 */}
                    <div className="space-y-2">
                        <Label htmlFor="yieldGrowthRate">
                            想定利回りの成長率（年率、%）
                        </Label>
                        <Input
                            id="yieldGrowthRate"
                            type="number"
                            min="0"
                            max="100"
                            step="0.1"
                            value={formData.yieldGrowthRate}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    yieldGrowthRate: Number(e.target.value),
                                })
                            }
                        />
                        <p className="text-sm text-muted-foreground">
                            例：1%（増配率を考慮する場合）、0%（固定利回り）
                        </p>
                    </div>

                    {/* 送信ボタン */}
                    <Button type="submit" className="w-full" size="lg">
                        シミュレーション実行
                    </Button>
                </CardContent>
            </Card>
        </form>
    );
}
