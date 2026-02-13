"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { SimulationInput, TaxPattern } from "@/lib/simulation"

import { Slider } from "@/components/ui/slider"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

interface SimulationFormProps {
    defaultValues: SimulationInput;
    onCalculate: (input: SimulationInput) => void;
}

export function SimulationForm({ defaultValues, onCalculate }: SimulationFormProps) {
    // Local state to handle empty strings during input
    const [formData, setFormData] = useState<Record<keyof Omit<SimulationInput, 'taxPattern'>, number | string> & { taxPattern: TaxPattern }>(defaultValues);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        // Allow empty string or valid number input
        setFormData(prev => ({
            ...prev,
            [name]: value === '' ? '' : value,
        }));
    };

    const handleSliderChange = (name: keyof SimulationInput) => (value: number[]) => {
        setFormData(prev => ({
            ...prev,
            [name]: value[0],
        }));
    };

    const handleSelectChange = (value: string) => {
        setFormData(prev => ({
            ...prev,
            taxPattern: value as TaxPattern,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Convert state back to stricter SimulationInput numbers
        const submittedData: SimulationInput = {
            initialAsset: Number(formData.initialAsset) || 0,
            annualInvestment: Number(formData.annualInvestment) || 0,
            initialStockRatio: Number(formData.initialStockRatio) || 0,

            japanYield: Number(formData.japanYield) || 0,
            foreignYield: Number(formData.foreignYield) || 0,

            japanDividendGrowth: Number(formData.japanDividendGrowth) || 0,
            foreignDividendGrowth: Number(formData.foreignDividendGrowth) || 0,

            stockGrowthRate: Number(formData.stockGrowthRate) || 0,
            annualExpenses: Number(formData.annualExpenses) || 0,

            taxPattern: formData.taxPattern,
            dividendReinvestmentRate: Number(formData.dividendReinvestmentRate) ?? 100,
        };

        onCalculate(submittedData);
    };

    return (
        <Card className="w-full">
            <CardHeader>
                <CardTitle>シミュレーション条件 (詳細版)</CardTitle>
                <CardDescription>各項目を入力して「計算」ボタンを押してください。</CardDescription>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">

                    {/* 資産・投資額 */}
                    <div className="space-y-4">
                        <h3 className="text-sm font-semibold border-b pb-2">資産設定</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="initialAsset">初期資産額 (円)</Label>
                                <Input
                                    id="initialAsset"
                                    name="initialAsset"
                                    type="number"
                                    value={formData.initialAsset}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="annualInvestment">年間投資額 (円)</Label>
                                <Input
                                    id="annualInvestment"
                                    name="annualInvestment"
                                    type="number"
                                    value={formData.annualInvestment}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>
                    </div>

                    {/* 資産配分 */}
                    <div className="space-y-4">
                        <h3 className="text-sm font-semibold border-b pb-2">資産配分 (日本株 : 海外株)</h3>
                        <div className="space-y-2">
                            <div className="flex justify-between items-center mb-2">
                                <Label htmlFor="initialStockRatio">日本株比率 (%)</Label>
                                <span className="text-sm font-medium">
                                    日本株 {formData.initialStockRatio}% : 海外株 {100 - (Number(formData.initialStockRatio) || 0)}%
                                </span>
                            </div>
                            <Slider
                                id="initialStockRatio"
                                min={0}
                                max={100}
                                step={1}
                                value={[Number(formData.initialStockRatio) || 0]}
                                onValueChange={handleSliderChange('initialStockRatio')}
                                className="py-2"
                            />
                        </div>
                    </div>

                    {/* 利回り設定 */}
                    <div className="space-y-4">
                        <h3 className="text-sm font-semibold border-b pb-2">利回り・成長率設定</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="japanYield">日本株 配当利回り (%)</Label>
                                <Input
                                    id="japanYield"
                                    name="japanYield"
                                    type="number"
                                    step="0.01"
                                    value={formData.japanYield}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="foreignYield">海外株 配当利回り (%)</Label>
                                <Input
                                    id="foreignYield"
                                    name="foreignYield"
                                    type="number"
                                    step="0.01"
                                    value={formData.foreignYield}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="japanDividendGrowth">日本株 増配率 (%)</Label>
                                <Input
                                    id="japanDividendGrowth"
                                    name="japanDividendGrowth"
                                    type="number"
                                    step="0.01"
                                    value={formData.japanDividendGrowth}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="foreignDividendGrowth">海外株 増配率 (%)</Label>
                                <Input
                                    id="foreignDividendGrowth"
                                    name="foreignDividendGrowth"
                                    type="number"
                                    step="0.01"
                                    value={formData.foreignDividendGrowth}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="space-y-2 md:col-span-2">
                                <Label htmlFor="stockGrowthRate">株価成長率 (共通) (%)</Label>
                                <Input
                                    id="stockGrowthRate"
                                    name="stockGrowthRate"
                                    type="number"
                                    step="0.01"
                                    value={formData.stockGrowthRate}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>
                    </div>

                    {/* 税金・生活費 */}
                    <div className="space-y-4">
                        <h3 className="text-sm font-semibold border-b pb-2">税金・生活費・再投資</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="annualExpenses">年間生活費 (円)</Label>
                                <Input
                                    id="annualExpenses"
                                    name="annualExpenses"
                                    type="number"
                                    value={formData.annualExpenses}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="taxPattern">税制パターン</Label>
                                <Select value={formData.taxPattern} onValueChange={handleSelectChange}>
                                    <SelectTrigger id="taxPattern">
                                        <SelectValue placeholder="税制パターンを選択" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="nisa_under_18m">NISA (1800万以下)</SelectItem>
                                        <SelectItem value="japan_only">日本株のみ課税</SelectItem>
                                        <SelectItem value="foreign_only">海外株のみ課税</SelectItem>
                                        <SelectItem value="mixed">日本株＋海外株 (課税)</SelectItem>
                                        <SelectItem value="nisa_over_18m">NISA (1800万以上)</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>

                        <div className="space-y-2 pt-2">
                            <div className="flex justify-between items-center mb-2">
                                <Label htmlFor="dividendReinvestmentRate">配当再投資率 (%)</Label>
                                <span className="text-sm font-medium">{formData.dividendReinvestmentRate}%</span>
                            </div>
                            <Slider
                                id="dividendReinvestmentRate"
                                min={0}
                                max={100}
                                step={1}
                                value={[Number(formData.dividendReinvestmentRate) || 0]}
                                onValueChange={handleSliderChange('dividendReinvestmentRate')}
                            />
                            <p className="text-xs text-muted-foreground pt-1">
                                税引後配当金の {formData.dividendReinvestmentRate}% を再投資に回します
                            </p>
                        </div>
                    </div>

                    <Button type="submit" className="w-full mt-4 text-lg py-6">シミュレーション開始</Button>
                </form>
            </CardContent>
        </Card>
    )
}
