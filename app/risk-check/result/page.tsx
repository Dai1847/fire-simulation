"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { ResultCard } from "../components/ResultCard";
import { Button } from "@/components/ui/button";
import { useEffect, useState, Suspense } from "react";

function ResultContent() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const scoreParam = searchParams.get("score");
    const [score, setScore] = useState<number | null>(null);

    useEffect(() => {
        if (scoreParam) {
            const parsedScore = parseInt(scoreParam, 10);
            if (!isNaN(parsedScore) && parsedScore >= 10 && parsedScore <= 30) {
                setScore(parsedScore);
            } else {
                // 不正なスコアの場合はトップに戻す
                router.push("/risk-check");
            }
        } else {
            // スコアがない場合はトップに戻す
            router.push("/risk-check");
        }
    }, [scoreParam, router]);

    if (score === null) {
        return <div className="flex justify-center items-center min-h-[50vh]">読み込み中...</div>;
    }

    return (
        <div className="container mx-auto py-10 px-4">
            <ResultCard score={score} />
        </div>
    );
}

export default function ResultPage() {
    return (
        <Suspense fallback={<div className="flex justify-center items-center min-h-[50vh]">読み込み中...</div>}>
            <ResultContent />
        </Suspense>
    );
}
