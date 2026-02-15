"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { blogPosts, categoryLabels } from "@/lib/blog-config"
import Link from "next/link"
import { ArrowRight, Calendar } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function BlogIndex() {
    return (
        <main className="min-h-screen bg-slate-50 dark:bg-slate-900">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-slate-800 to-slate-900 text-white py-16 px-4">
                <div className="container mx-auto max-w-5xl">
                    <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl mb-4">
                        ブログ
                    </h1>
                    <p className="text-slate-300 text-lg sm:text-xl max-w-2xl">
                        FIRE・高配当投資・資産形成に関する知識を体系的に学べる記事をお届けします。
                    </p>
                </div>
            </div>

            {/* Blog Posts Grid */}
            <div className="container mx-auto max-w-5xl px-4 py-12">
                <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-8 border-b pb-4">
                    記事一覧
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {blogPosts.map((post) => (
                        <Link key={post.id} href={post.href} className="group block h-full">
                            <Card className="h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border-slate-200 dark:border-slate-800 overflow-hidden">
                                <div className={`h-2 w-full bg-gradient-to-r ${post.bgGradient || 'from-slate-500 to-slate-600'}`} />
                                <CardHeader>
                                    <div className="flex items-start justify-between mb-3">
                                        <div className={`p-3 rounded-lg bg-slate-100 dark:bg-slate-800 ${post.color}`}>
                                            <post.icon className="h-6 w-6" />
                                        </div>
                                        <ArrowRight className="h-5 w-5 text-slate-300 group-hover:text-slate-600 dark:text-slate-600 dark:group-hover:text-slate-400 transition-colors" />
                                    </div>

                                    <div className="mb-2">
                                        <Badge variant="secondary" className="text-xs">
                                            {categoryLabels[post.category]}
                                        </Badge>
                                    </div>

                                    <CardTitle className="text-lg leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                        {post.title}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription className="text-sm line-clamp-3 mb-3">
                                        {post.description}
                                    </CardDescription>

                                    <div className="flex items-center text-xs text-slate-500 dark:text-slate-400">
                                        <Calendar className="h-3 w-3 mr-1" />
                                        <time dateTime={post.publishedAt}>
                                            {new Date(post.publishedAt).toLocaleDateString('ja-JP', {
                                                year: 'numeric',
                                                month: 'long',
                                                day: 'numeric'
                                            })}
                                        </time>
                                    </div>
                                </CardContent>
                            </Card>
                        </Link>
                    ))}
                </div>
            </div>
        </main>
    )
}
