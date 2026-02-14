export type DividendAllocationModel = {
    type: string;
    name: string;
    jpStock: number;
    usEtf: number;
    bond: number;
    cash: number;
    growth?: number;
    description: string;
    features: string[];
    jpStockExamples: string[];
    usEtfExamples: string[];
    notes: string[];
};

export const models: Record<string, DividendAllocationModel> = {
    conservative: {
        type: "conservative",
        name: "超保守型",
        jpStock: 20,
        usEtf: 20,
        bond: 40,
        cash: 20,
        description: "配当は欲しいが元本重視。安定性を最優先する配分です。",
        features: [
            "配当より安定性を重視",
            "生活防衛資金を厚めに確保",
            "50代以上・初心者向け",
            "暴落時の資産減少を最小限に抑える",
        ],
        jpStockExamples: ["KDDI", "三菱HCキャピタル", "三井住友FG", "NTT"],
        usEtfExamples: ["HDV", "VYM"],
        notes: [
            "債券比率が高いため、金利上昇局面では注意が必要",
            "配当利回りは3〜4%程度を想定",
            "まずは現金比率を確保してから投資を始めましょう",
        ],
    },
    stable: {
        type: "stable",
        name: "安定型",
        jpStock: 30,
        usEtf: 30,
        bond: 25,
        cash: 15,
        description: "配当と安定の両立。リスクを抑えつつ配当収入を確保します。",
        features: [
            "配当も欲しいが暴落は避けたい",
            "HDV・VYM中心の構成",
            "40代〜50代向け",
            "インカムゲインを重視した安定運用",
        ],
        jpStockExamples: ["KDDI", "三菱HCキャピタル", "三井住友FG", "オリックス", "JT"],
        usEtfExamples: ["HDV", "VYM", "SPYD"],
        notes: [
            "配当利回りは4〜5%程度を想定",
            "高配当株の減配リスクに注意",
            "分散投資を心がけましょう",
        ],
    },
    balanced: {
        type: "balanced",
        name: "バランス型",
        jpStock: 30,
        usEtf: 40,
        bond: 20,
        cash: 10,
        description: "配当と成長の中間。長期的な資産形成と配当収入のバランスが良い配分です。",
        features: [
            "配当と成長のバランスが良い",
            "SPYD・JEPIも組み込みやすい",
            "30代〜40代向け",
            "再投資で配当成長が期待できる",
        ],
        jpStockExamples: ["KDDI", "三菱HCキャピタル", "オリックス", "JT", "三井住友FG"],
        usEtfExamples: ["VYM", "SPYD", "HDV", "JEPI"],
        notes: [
            "配当利回りは4.5〜5.5%程度を想定",
            "米国ETFの比率が高いため、為替リスクに注意",
            "配当金は再投資することで複利効果を最大化",
        ],
    },
    growth: {
        type: "growth",
        name: "成長型",
        jpStock: 20,
        usEtf: 50,
        bond: 10,
        cash: 5,
        growth: 15,
        description: "配当＋成長を狙う。高配当と株価成長の両方を追求します。",
        features: [
            "配当＋株価成長を狙う",
            "JEPI・QYLDなども選択肢に入る",
            "30代向け",
            "暴落時も長期保有を前提",
        ],
        jpStockExamples: ["KDDI", "オリックス", "三菱HCキャピタル"],
        usEtfExamples: ["VYM", "JEPI", "QYLD", "SPYD", "SCHD"],
        notes: [
            "配当利回りは5〜6%程度を想定",
            "グロース株は配当が少ないため、全体のバランスを考慮",
            "QYLDなどのカバードコールETFは株価成長が限定的",
        ],
    },
    aggressive: {
        type: "aggressive",
        name: "積極型",
        jpStock: 10,
        usEtf: 60,
        bond: 5,
        cash: 5,
        growth: 20,
        description: "高配当＋グロースで攻める。配当成長と株価成長を最大化します。",
        features: [
            "20代〜30代向け",
            "暴落耐性が高い人向け",
            "配当成長＋株価成長を最大化",
            "長期投資前提（10年以上）",
        ],
        jpStockExamples: ["KDDI", "オリックス"],
        usEtfExamples: ["VYM", "SCHD", "JEPI", "QYLD", "SPYD"],
        notes: [
            "配当利回りは5〜7%程度を想定",
            "グロース株の比率が高いため、値動きが大きい",
            "暴落時は大きく資産が減る可能性がある",
            "余剰資金で投資することが重要",
        ],
    },
};

export const getModelByScore = (score: number): DividendAllocationModel => {
    if (score <= 15) return models.conservative;
    if (score <= 20) return models.stable;
    if (score <= 24) return models.balanced;
    if (score <= 28) return models.growth;
    return models.aggressive;
};
