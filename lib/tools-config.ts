import { LucideIcon, Flame, Wallet, ShieldCheck, PieChart, TrendingUp, Target } from "lucide-react";

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
    },
    {
        id: "asset-allocation",
        title: "資産配分診断",
        description: "年齢やリスク許容度から、最適な資産配分（株式・債券・現金）を提案します。",
        href: "/asset-allocation",
        icon: PieChart,
        color: "text-purple-500",
        bgGradient: "from-purple-500/10 to-violet-500/10"
    },
    {
        id: "high-dividend-allocation",
        title: "高配当株 資産配分診断",
        description: "高配当株投資に特化した資産配分を診断。国内高配当株・米国ETF・債券・現金の最適比率を提案します。",
        href: "/high-dividend-allocation",
        icon: TrendingUp,
        color: "text-amber-500",
        bgGradient: "from-amber-500/10 to-yellow-500/10"
    },
    {
        id: "dividend-target",
        title: "配当金目標達成シミュレーション",
        description: "目標とする年間配当金額に到達するまでの年数を可視化。配当再投資や増配率を考慮したシミュレーションが可能です。",
        href: "/dividend-target",
        icon: Target,
        color: "text-teal-500",
        bgGradient: "from-teal-500/10 to-cyan-500/10"
    }
];

