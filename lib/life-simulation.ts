export type EducationType = 'public' | 'private' | 'university';

export type ChildInput = {
    age: number;
    educationType: EducationType;
};

export type LifeCostInput = {
    // Monthly Fixed Costs
    rent: number;
    communication: number;
    utilities: number;
    insurance: number;
    subscription: number;

    // Monthly Variable Costs
    food: number;
    transport: number;
    hobby: number;
    dailyGoods: number;

    // Annual Special Costs
    homecoming: number;
    car: number;
    medical: number;
    otherSpecial: number;

    // Inflation
    inflationRate: number; // %
    yearsLater: number;

    // Children
    children: ChildInput[];
};

export type LifeCostResult = {
    monthlyFixed: number;
    monthlyVariable: number;
    annualFixed: number;
    annualVariable: number;
    annualSpecial: number;

    currentAnnualCost: number;
    futureAnnualCost: number;

    educationCosts: number[];
    totalEducationCost: number;

    finalAnnualCost: number;
};

// Education Cost Table (Annual)
export const EDUCATION_COST_TABLE = {
    public: {
        kindergarten: 400000,
        elementary: 350000,
        junior: 550000,
        high: 500000,
        university: 1200000, // Reduced public uni av? Or explicit setting? 
        // Spec says: university: 1200000
    },
    private: {
        kindergarten: 1000000,
        elementary: 1400000,
        junior: 1500000,
        high: 1300000,
        university: 2000000,
    }
} as const;

export const DEFAULT_LIFE_COST_INPUT: LifeCostInput = {
    rent: 80000,
    communication: 10000,
    utilities: 15000,
    insurance: 5000,
    subscription: 3000,
    food: 40000,
    transport: 10000,
    hobby: 20000,
    dailyGoods: 10000,
    homecoming: 50000,
    car: 100000,
    medical: 20000,
    otherSpecial: 50000,
    inflationRate: 2,
    yearsLater: 10,
    children: []
};

function getEducationStage(age: number): keyof typeof EDUCATION_COST_TABLE['public'] | null {
    if (age < 3) return null; // Before kindergarten? Assuming starts at 3
    if (age <= 6) return 'kindergarten'; // 3-6 (Preschool)
    if (age <= 12) return 'elementary';
    if (age <= 15) return 'junior';
    if (age <= 18) return 'high';
    if (age <= 22) return 'university';
    return null;
}

export function calculateLifeCost(input: LifeCostInput): LifeCostResult {
    const {
        rent, communication, utilities, insurance, subscription,
        food, transport, hobby, dailyGoods,
        homecoming, car, medical, otherSpecial,
        inflationRate, yearsLater, children
    } = input;

    // 1. Monthly Costs
    const monthlyFixed = rent + communication + utilities + insurance + subscription;
    const monthlyVariable = food + transport + hobby + dailyGoods;

    // 2. Annual Costs (Base)
    const annualFixed = monthlyFixed * 12;
    const annualVariable = monthlyVariable * 12;
    const annualSpecial = homecoming + car + medical + otherSpecial;

    const currentAnnualCost = annualFixed + annualVariable + annualSpecial;

    // 3. Future Cost (Inflation)
    const inflationFactor = Math.pow(1 + inflationRate / 100, yearsLater);
    const futureAnnualCost = currentAnnualCost * inflationFactor;

    // 4. Education Costs
    // Calculate cost for EACH child *at the future point*? Or CURRENT?
    // Spec says: "Current Annual Cost" vs "Future Annual Cost".
    // And "Final Annual Cost = Future Cost + Education Cost"
    // Does the education cost apply to the CHILD's age NOW or in the FUTURE?
    // Usually user wants to know "How much will I need in N years?".
    // So if I say "10 years later", the child will be Age + 10.
    // Spec doesn't explicitly specify "Age + YearsLater".
    // "子どもごとの入力項目: 現在の年齢"
    // "教育費_i = テーブル[教育方針][段階]"
    // If I add `yearsLater` to age, it calculates specific future year cost.
    // If I don't, it calculates cost "if they were this age".
    // Given the context of "Future Annual Cost" (inflation adjusted), it makes sense to project the child's age too.
    // HOWEVER, "Annual Education Cost" usually varies wildly.
    // "Final Annual Cost (passed to FIRE)" usually implies the SUSTAINABLE ANNUAL EXPENSE needed.
    // Education is temporary.
    // FIRE simulation usually takes a SINGLE "Annual Expense" value.
    // If we pass a PEAK education cost year, it might be safe but conservative.
    // Let's assume for this specific "Static" calculator, we calculate the cost for the *specific year* (Current + yearsLater).
    // Or, does it mean "Average"?
    // The Spec says: "Final Annual Cost = Future Annual Cost + Education Cost".
    // And "Education Cost = Sum(Table[Stage])".
    // I will calculate based on valid stage at (Current Age + yearsLater).
    // If the child is 25 in 10 years, education cost is 0.

    let totalEducationCost = 0;
    const educationCosts: number[] = children.map(child => {
        const futureAge = child.age + yearsLater;
        const stage = getEducationStage(futureAge);

        if (!stage) return 0;

        // Use 'private' table if child education type is private, AND not university?
        // Spec has 'university' property in BOTH public/private tables.
        // User input `educationType` is 'public' | 'private' | 'university'.
        // Wait, 'university' is a type?
        // Spec 2: "教育方針: 公立 / 私立 / 大学進学あり"
        // Spec 3 Table: has 'university' KEY inside public/private objects.
        // If type is 'public', use public table.
        // If type is 'private', use private table. 
        // If type is 'university' ... wait. The table has a `university` ROW. 
        // Maybe "Public" means public all the way? "Private" means private all the way?
        // "大学進学あり" might imply Public until uni?
        // Let's assume simpler mapping for now based on typical Japanese context:
        // Input: 'public' (All Public), 'private' (All Private), 'university' (Public + Private Uni? Or just Uni?)
        // Actually, looking at Spec 2, it says "公立 / 私立 / 大学進学あり".
        // This likely means:
        // 1. Public (No Uni? Or Public Uni?)
        // 2. Private (Private Uni?)
        // 3. "University" might mean "Public K-12 then Private Uni"?
        // Let's use logic:
        // If stage is 'university': use Private table if type is 'private' or 'university'. Public if 'public'.
        // If stage is K-12: use Private table if type is 'private'. Public if 'public' or 'university'.

        if (stage === 'university') {
            // University logic
            if (child.educationType === 'public') return EDUCATION_COST_TABLE['public']['university'];
            return EDUCATION_COST_TABLE['private']['university']; // 'private' or 'university' -> Private Uni cost
        } else {
            // K-12 logic
            if (child.educationType === 'private') return EDUCATION_COST_TABLE['private'][stage];
            return EDUCATION_COST_TABLE['public'][stage]; // 'public' or 'university' -> Public K-12
        }
    });

    totalEducationCost = educationCosts.reduce((sum, cost) => sum + cost, 0);

    const finalAnnualCost = Math.floor(futureAnnualCost + totalEducationCost);

    return {
        monthlyFixed,
        monthlyVariable,
        annualFixed,
        annualVariable,
        annualSpecial,
        currentAnnualCost,
        futureAnnualCost: Math.floor(futureAnnualCost),
        educationCosts,
        totalEducationCost,
        finalAnnualCost
    };
}
