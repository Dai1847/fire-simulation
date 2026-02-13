"use client"

import Link from "next/link"
import { Calculator } from "lucide-react"
import { usePathname } from "next/navigation"

export function AppHeader() {
    const pathname = usePathname();
    const isHome = pathname === "/";

    return (
        <header className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
            <div className="container flex h-14 max-w-screen-2xl items-center px-4">
                <Link href="/" className="mr-6 flex items-center space-x-2">
                    <Calculator className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                    <span className="hidden font-bold sm:inline-block text-slate-800 dark:text-slate-200">
                        Life Simulation Tools
                    </span>
                </Link>

                <nav className="flex flex-1 items-center justify-end space-x-4">
                    {!isHome && (
                        <Link
                            href="/"
                            className="text-sm font-medium text-slate-600 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400 transition-colors"
                        >
                            ← ツール一覧に戻る
                        </Link>
                    )}
                </nav>
            </div>
        </header>
    )
}
