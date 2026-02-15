import { LucideIcon, Flame, TrendingUp, Landmark, Wallet } from "lucide-react";

export type BlogCategory = 'fire' | 'high-dividend' | 'nisa' | 'life';

export type BlogPost = {
    id: string;
    title: string;
    description: string;
    category: BlogCategory;
    href: string;
    publishedAt: string;
    icon: LucideIcon;
    color: string;
    bgGradient: string;
    relatedToolHref?: string; // 関連ツールへのリンク
};

export const blogPosts: BlogPost[] = [
    {
        id: "fire-guide",
        title: "FIREとは？必要資産の計算方法をわかりやすく解説",
        description: "FIRE（経済的自立・早期退職）の基本と必要資産の計算方法を解説。4%ルールを使った具体的なシミュレーションツールも紹介します。",
        category: "fire",
        href: "/blog/fire",
        publishedAt: "2026-02-15",
        icon: Flame,
        color: "text-red-500",
        bgGradient: "from-red-500/10 to-orange-500/10",
        relatedToolHref: "/fire"
    },
    {
        id: "high-dividend-guide",
        title: "高配当株投資のメリット・デメリット完全ガイド",
        description: "高配当株投資の特徴、メリット・デメリットを徹底解説。最適な資産配分を診断できるツールも紹介します。",
        category: "high-dividend",
        href: "/blog/high-dividend",
        publishedAt: "2026-02-15",
        icon: TrendingUp,
        color: "text-amber-500",
        bgGradient: "from-amber-500/10 to-yellow-500/10",
        relatedToolHref: "/high-dividend-allocation"
    },
    {
        id: "nisa-guide",
        title: "新NISAの使い方完全ガイド【2024年最新版】",
        description: "2024年から始まった新NISA制度の使い方を徹底解説。つみたて投資枠と成長投資枠の違い、高配当株投資での活用方法を紹介します。",
        category: "nisa",
        href: "/blog/nisa",
        publishedAt: "2026-02-15",
        icon: Landmark,
        color: "text-green-500",
        bgGradient: "from-green-500/10 to-emerald-500/10"
    },
    {
        id: "life-cost-guide",
        title: "生活費の平均と節約ポイント【家計管理の基本】",
        description: "世帯別の生活費平均と効果的な節約方法を解説。将来の生活費をシミュレーションできるツールも紹介します。",
        category: "life",
        href: "/blog/life",
        publishedAt: "2026-02-15",
        icon: Wallet,
        color: "text-blue-500",
        bgGradient: "from-blue-500/10 to-indigo-500/10",
        relatedToolHref: "/life"
    }
];

export const categoryLabels: Record<BlogCategory, string> = {
    fire: "FIRE",
    "high-dividend": "高配当投資",
    nisa: "新NISA",
    life: "生活費・家計"
};
