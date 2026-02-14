export type AllocationModel = {
    type: string;
    name: string;
    stock: number;
    bond: number;
    cash: number;
    description: string;
    features: string[];
};

export const models: Record<string, AllocationModel> = {
    conservative: {
        type: "conservative",
        name: "超保守型",
        stock: 10,
        bond: 60,
        cash: 30,
        description: "極力リスクを抑え、資産を守ることを最優先する配分です。",
        features: [
            "株式比率を最低限に抑え、価格変動リスクを低減",
            "現金と債券が主役で、暴落時も資産減少しにくい",
            "リターンは低いが、夜ぐっすり眠れる安心感重視",
        ],
    },
    stable: {
        type: "stable",
        name: "安定型",
        stock: 30,
        bond: 50,
        cash: 20,
        description: "安全性重視ですが、少しだけ成長性も取り入れる配分です。",
        features: [
            "債券中心で安定したインカムゲインを狙う",
            "株式を3割組み入れることで、インフレ負けを防ぐ",
            "大きな損失を避けつつ、預金以上の利回りを目指す",
        ],
    },
    balanced: {
        type: "balanced",
        name: "バランス型",
        stock: 50,
        bond: 40,
        cash: 10,
        description: "攻めと守りのバランスがとれた、多くの人に推奨される配分です。",
        features: [
            "株式と債券をほぼ半々に持ち、リスク分散効果が高い",
            "長期投資の王道とも言えるスタイル",
            "大暴落時でもある程度のクッション性がある",
        ],
    },
    growth: {
        type: "growth",
        name: "成長型",
        stock: 70,
        bond: 25,
        cash: 5,
        description: "積極的にリスクを取り、資産の成長を目指す配分です。",
        features: [
            "株式中心で高いリターンを期待",
            "債券を少し混ぜることで、株式100%よりはマイルドな値動き",
            "10年以上の長期投資前提なら最も効率的になりやすい",
        ],
    },
    aggressive: {
        type: "aggressive",
        name: "積極型",
        stock: 90,
        bond: 10,
        cash: 0,
        description: "リスクを恐れず、最大限の資産拡大を狙う配分です。",
        features: [
            "株式フルインベストメントに近い形",
            "暴落時は大きく資産が減るが、回復時の爆発力も最大",
            "余剰資金で、かつ若年層や資産形成初期向け",
        ],
    },
};

export const getModelByScore = (score: number): AllocationModel => {
    if (score <= 15) return models.conservative;
    if (score <= 20) return models.stable;
    if (score <= 24) return models.balanced;
    if (score <= 28) return models.growth;
    return models.aggressive;
};
