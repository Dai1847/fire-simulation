import { LucideIcon, Flame, Wallet, ShieldCheck } from "lucide-react";

export type ToolConfig = {
    id: string;
    title: string;
    description: string;
    href: string; // URL path
    icon: LucideIcon;
    color: string; // Tailwind text color class
    bgGradient?: string; // Tailwind background gradient class for card
};

export const tools: ToolConfig[] = [
    {
        id: "fire-simulation",
        title: "FIRE資産形成シミュレーション",
        description: "高配当株投資によるFIRE達成年度を予測し、資産と配当金の推移をグラフ化します。",
        href: "/fire",
        icon: Flame,
        color: "text-red-500",
        bgGradient: "from-red-500/10 to-orange-500/10"
    },
    {
        id: "life-cost",
        title: "生活費シミュレーション",
        description: "インフレや教育費を考慮した、将来必要となるリアルな生活費を算出します。",
        href: "/life",
        icon: Wallet,
        color: "text-blue-500",
        bgGradient: "from-blue-500/10 to-indigo-500/10"
    },
    {
        id: "risk-check",
        title: "リスク許容度診断",
        description: "10個の質問に答えるだけで、あなたの投資リスク許容度タイプ（5段階）を診断します。",
        href: "/risk-check",
        icon: ShieldCheck,
        color: "text-green-500",
        bgGradient: "from-green-500/10 to-emerald-500/10"
    }
];
