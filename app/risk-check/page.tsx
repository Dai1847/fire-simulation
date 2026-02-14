"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { questions } from "./data/questions";
import { ProgressBar } from "./components/ProgressBar";
import { Question } from "./components/Question";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function RiskCheckPage() {
    const router = useRouter();
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [answers, setAnswers] = useState<number[]>([]);

    const handleAnswer = (score: number) => {
        const newAnswers = [...answers, score];
        setAnswers(newAnswers);

        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            // 診断終了
            const totalScore = newAnswers.reduce((a, b) => a + b, 0);
            router.push(`/risk-check/result?score=${totalScore}`);
        }
    };

    const currentQuestion = questions[currentQuestionIndex];

    return (
        <div className="container mx-auto py-10 px-4 max-w-2xl">
            <Card className="mb-8 border-none shadow-none bg-transparent">
                <CardHeader className="text-center pb-2">
                    <CardTitle className="text-3xl font-bold mb-2">リスク許容度診断</CardTitle>
                    <p className="text-muted-foreground">あなたの投資スタイルを診断します</p>
                </CardHeader>
                <CardContent>
                    <ProgressBar
                        current={currentQuestionIndex + 1}
                        total={questions.length}
                    />
                </CardContent>
            </Card>

            <div className="min-h-[400px]">
                <Question
                    question={currentQuestion}
                    onAnswer={handleAnswer}
                />
            </div>

            <div className="mt-8 text-center">
                {currentQuestionIndex > 0 && (
                    <Button
                        variant="ghost"
                        onClick={() => {
                            setCurrentQuestionIndex(currentQuestionIndex - 1);
                            setAnswers(answers.slice(0, -1));
                        }}
                        className="text-muted-foreground hover:text-foreground"
                    >
                        前の質問に戻る
                    </Button>
                )}
            </div>
        </div>
    );
}
