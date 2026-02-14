import React from "react";
import { Question as QuestionType, Option } from "../data/questions";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

type QuestionProps = {
    question: QuestionType;
    onAnswer: (score: number) => void;
};

export function Question({ question, onAnswer }: QuestionProps) {
    return (
        <motion.div
            key={question.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
        >
            <Card className="w-full max-w-lg mx-auto mt-8">
                <CardHeader>
                    <CardTitle className="text-xl text-center">
                        Q{question.id}. {question.text}
                    </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col gap-4">
                    {question.options.map((option) => (
                        <Button
                            key={option.label}
                            variant="outline"
                            className="w-full text-lg py-6 justify-start px-6 hover:bg-primary hover:text-primary-foreground transition-all"
                            onClick={() => onAnswer(option.score)}
                        >
                            {option.label}
                        </Button>
                    ))}
                </CardContent>
            </Card>
        </motion.div>
    );
}
