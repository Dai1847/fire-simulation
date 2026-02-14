export type Option = {
    label: string;
    score: number;
};

export type Question = {
    id: number;
    text: string;
    options: Option[];
};

export const questions: Question[] = [
    {
        id: 1,
        text: "年齢は？",
        options: [
            { label: "50代以上", score: 1 },
            { label: "30〜40代", score: 2 },
            { label: "20代", score: 3 },
        ],
    },
    {
        id: 2,
        text: "投資経験は？",
        options: [
            { label: "初めて", score: 1 },
            { label: "1〜3年", score: 2 },
            { label: "3年以上", score: 3 },
        ],
    },
    {
        id: 3,
        text: "投資目的は？",
        options: [
            { label: "安全重視", score: 1 },
            { label: "バランス", score: 2 },
            { label: "成長重視", score: 3 },
        ],
    },
    {
        id: 4,
        text: "投資期間は？",
        options: [
            { label: "3年以内", score: 1 },
            { label: "5〜10年", score: 2 },
            { label: "10年以上", score: 3 },
        ],
    },
    {
        id: 5,
        text: "年収は？",
        options: [
            { label: "300万未満", score: 1 },
            { label: "300〜600万", score: 2 },
            { label: "600万以上", score: 3 },
        ],
    },
    {
        id: 6,
        text: "貯金額は？",
        options: [
            { label: "50万未満", score: 1 },
            { label: "50〜300万", score: 2 },
            { label: "300万以上", score: 3 },
        ],
    },
    {
        id: 7,
        text: "暴落時の行動は？",
        options: [
            { label: "売る", score: 1 },
            { label: "何もしない", score: 2 },
            { label: "買い増し", score: 3 },
        ],
    },
    {
        id: 8,
        text: "損失許容度は？",
        options: [
            { label: "5%でも嫌", score: 1 },
            { label: "10〜20%", score: 2 },
            { label: "30%以上", score: 3 },
        ],
    },
    {
        id: 9,
        text: "投資に回せる割合は？",
        options: [
            { label: "10%未満", score: 1 },
            { label: "10〜30%", score: 2 },
            { label: "30%以上", score: 3 },
        ],
    },
    {
        id: 10,
        text: "現在の投資スタイルは？",
        options: [
            { label: "安全重視", score: 1 },
            { label: "バランス", score: 2 },
            { label: "成長重視", score: 3 },
        ],
    },
];
