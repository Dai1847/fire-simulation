"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger
} from "@/components/ui/accordion"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { LifeCostInput, DEFAULT_LIFE_COST_INPUT, ChildInput, EducationType } from "@/lib/life-simulation"
import { PlusCircle, Trash2 } from "lucide-react"

interface LifeCostFormProps {
    onCalculate: (input: LifeCostInput) => void;
}

export function LifeCostForm({ onCalculate }: LifeCostFormProps) {
    const [formData, setFormData] = useState<LifeCostInput>(DEFAULT_LIFE_COST_INPUT);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value === '' ? 0 : Number(value),
        }));
    };

    // Helper for updating nested children array
    const updateChild = (index: number, field: keyof ChildInput, value: string | number) => {
        const newChildren = [...formData.children];
        newChildren[index] = { ...newChildren[index], [field]: value };
        setFormData(prev => ({ ...prev, children: newChildren }));
    };

    const addChild = () => {
        if (formData.children.length >= 3) return; // Max 3 per spec? Spec says "0~3"
        setFormData(prev => ({
            ...prev,
            children: [...prev.children, { age: 0, educationType: 'public' }]
        }));
    };

    const removeChild = (index: number) => {
        setFormData(prev => ({
            ...prev,
            children: prev.children.filter((_, i) => i !== index)
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onCalculate(formData);
    };

    return (
        <Card className="w-full">
            <CardHeader>
                <CardTitle>生活費入力</CardTitle>
                <CardDescription>現在の支出と将来の予定を入力してください。</CardDescription>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <Accordion type="single" collapsible className="w-full" defaultValue="basic">

                        {/* 1. 基本生活費 (固定費) */}
                        <AccordionItem value="basic">
                            <AccordionTrigger>基本生活費 (固定)</AccordionTrigger>
                            <AccordionContent>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                                    <div className="space-y-2">
                                        <Label htmlFor="rent">家賃 (月額)</Label>
                                        <Input id="rent" name="rent" type="number" value={formData.rent || ''} onChange={handleChange} />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="communication">通信費 (スマホ/ネット)</Label>
                                        <Input id="communication" name="communication" type="number" value={formData.communication || ''} onChange={handleChange} />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="utilities">光熱費 (電気/ガス/水道)</Label>
                                        <Input id="utilities" name="utilities" type="number" value={formData.utilities || ''} onChange={handleChange} />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="insurance">保険料 (月額)</Label>
                                        <Input id="insurance" name="insurance" type="number" value={formData.insurance || ''} onChange={handleChange} />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="subscription">サブスク・月額サービス</Label>
                                        <Input id="subscription" name="subscription" type="number" value={formData.subscription || ''} onChange={handleChange} />
                                    </div>
                                </div>
                            </AccordionContent>
                        </AccordionItem>

                        {/* 2. 基本生活費 (変動費) */}
                        <AccordionItem value="variable">
                            <AccordionTrigger>基本生活費 (変動)</AccordionTrigger>
                            <AccordionContent>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                                    <div className="space-y-2">
                                        <Label htmlFor="food">食費 (月額)</Label>
                                        <Input id="food" name="food" type="number" value={formData.food || ''} onChange={handleChange} />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="transport">交通費 (月額)</Label>
                                        <Input id="transport" name="transport" type="number" value={formData.transport || ''} onChange={handleChange} />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="hobby">趣味・娯楽 (月額)</Label>
                                        <Input id="hobby" name="hobby" type="number" value={formData.hobby || ''} onChange={handleChange} />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="dailyGoods">日用品・雑費 (月額)</Label>
                                        <Input id="dailyGoods" name="dailyGoods" type="number" value={formData.dailyGoods || ''} onChange={handleChange} />
                                    </div>
                                </div>
                            </AccordionContent>
                        </AccordionItem>

                        {/* 3. 年間特別費 */}
                        <AccordionItem value="special">
                            <AccordionTrigger>年間特別費 (年1回など)</AccordionTrigger>
                            <AccordionContent>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                                    <div className="space-y-2">
                                        <Label htmlFor="homecoming">帰省・旅行費 (年額)</Label>
                                        <Input id="homecoming" name="homecoming" type="number" value={formData.homecoming || ''} onChange={handleChange} />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="car">自動車関連・車検 (年額)</Label>
                                        <Input id="car" name="car" type="number" value={formData.car || ''} onChange={handleChange} />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="medical">医療費 (年額)</Label>
                                        <Input id="medical" name="medical" type="number" value={formData.medical || ''} onChange={handleChange} />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="otherSpecial">その他特別費 (年額)</Label>
                                        <Input id="otherSpecial" name="otherSpecial" type="number" value={formData.otherSpecial || ''} onChange={handleChange} />
                                    </div>
                                </div>
                            </AccordionContent>
                        </AccordionItem>

                        {/* 4. インフレ設定 */}
                        <AccordionItem value="inflation">
                            <AccordionTrigger>インフレ設定</AccordionTrigger>
                            <AccordionContent>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                                    <div className="space-y-2">
                                        <Label htmlFor="inflationRate">想定インフレ率 (%)</Label>
                                        <Input id="inflationRate" name="inflationRate" type="number" step="0.1" value={formData.inflationRate || ''} onChange={handleChange} />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="yearsLater">何年後を計算するか (年)</Label>
                                        <Input id="yearsLater" name="yearsLater" type="number" value={formData.yearsLater || ''} onChange={handleChange} />
                                    </div>
                                </div>
                            </AccordionContent>
                        </AccordionItem>

                        {/* 5. 子どもの教育費 */}
                        <AccordionItem value="children">
                            <AccordionTrigger>子どもの教育費 (オプション)</AccordionTrigger>
                            <AccordionContent>
                                <div className="space-y-4 pt-2">
                                    <div className="flex items-center justify-between">
                                        <Label>子どもの人数 (最大3人): {formData.children.length}人</Label>
                                        <Button type="button" variant="outline" size="sm" onClick={addChild} disabled={formData.children.length >= 3}>
                                            <PlusCircle className="mr-2 h-4 w-4" /> 追加
                                        </Button>
                                    </div>

                                    {formData.children.map((child, index) => (
                                        <div key={index} className="p-4 border rounded-lg bg-slate-50 dark:bg-slate-800 space-y-3 relative">
                                            <Button
                                                type="button"
                                                variant="ghost"
                                                size="icon"
                                                className="absolute top-2 right-2 text-slate-400 hover:text-red-500"
                                                onClick={() => removeChild(index)}
                                            >
                                                <Trash2 className="h-4 w-4" />
                                            </Button>
                                            <h4 className="font-medium text-sm">子ども {index + 1}</h4>

                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                <div className="space-y-2">
                                                    <Label htmlFor={`child-age-${index}`}>現在の年齢</Label>
                                                    <Input
                                                        id={`child-age-${index}`}
                                                        type="number"
                                                        value={child.age || ''}
                                                        onChange={(e) => updateChild(index, 'age', Number(e.target.value))}
                                                    />
                                                </div>
                                                <div className="space-y-2">
                                                    <Label>教育方針</Label>
                                                    <Select
                                                        value={child.educationType}
                                                        onValueChange={(val) => updateChild(index, 'educationType', val)}
                                                    >
                                                        <SelectTrigger>
                                                            <SelectValue />
                                                        </SelectTrigger>
                                                        <SelectContent>
                                                            <SelectItem value="public">公立中心</SelectItem>
                                                            <SelectItem value="private">私立中心</SelectItem>
                                                            <SelectItem value="university">公立+大学進学</SelectItem>
                                                        </SelectContent>
                                                    </Select>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                    {formData.children.length === 0 && (
                                        <p className="text-sm text-muted-foreground text-center py-4">
                                            子どもがいる場合は「追加」ボタンを押してください
                                        </p>
                                    )}
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>

                    <Button type="submit" className="w-full mt-6 py-6 text-lg">生活費を計算する</Button>
                </form>
            </CardContent>
        </Card>
    )
}
