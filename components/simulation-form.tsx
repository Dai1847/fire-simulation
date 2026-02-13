
"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { SimulationInput } from "@/lib/simulation"

interface SimulationFormProps {
    defaultValues: SimulationInput;
    onCalculate: (input: SimulationInput) => void;
}

export function SimulationForm({ defaultValues, onCalculate }: SimulationFormProps) {
    const [formData, setFormData] = useState<SimulationInput>(defaultValues);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: parseFloat(value) || 0,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onCalculate(formData);
    };

    return (
        <Card className="w-full">
            <CardHeader>
                <CardTitle>シミュレーション条件</CardTitle>
                <CardDescription>各項目を入力して「計算」ボタンを押してください。</CardDescription>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
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
                        <div className="space-y-2">
                            <Label htmlFor="dividendYield">配当利回り (%)</Label>
                            <Input
                                id="dividendYield"
                                name="dividendYield"
                                type="number"
                                step="0.01"
                                value={formData.dividendYield}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="dividendGrowthRate">増配率 (%)</Label>
                            <Input
                                id="dividendGrowthRate"
                                name="dividendGrowthRate"
                                type="number"
                                step="0.01"
                                value={formData.dividendGrowthRate}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="stockGrowthRate">株価成長率 (%)</Label>
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
                    </div>
                    <Button type="submit" className="w-full mt-4">シミュレーション開始</Button>
                </form>
            </CardContent>
        </Card>
    )
}
