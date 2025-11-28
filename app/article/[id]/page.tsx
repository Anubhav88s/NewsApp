import { getArticleById, getArticles } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

interface PageProps {
    params: Promise<{
        id: string;
    }>;
}

// Generate static params for all articles to support static export if needed, 
// or just to let Next.js know about these paths.
export async function generateStaticParams() {
    const articles = getArticles();
    return articles.map((article) => ({
        id: article.id,
    }));
}

export default async function ArticlePage({ params }: PageProps) {
    const { id } = await params;
    const article = getArticleById(id);

    if (!article) {
        notFound();
    }

    const relatedArticles = getArticles()
        .filter((a) => a.id !== article.id && a.category === article.category)
        .slice(0, 3);

    return (
        <div className="max-w-4xl mx-auto">
            {/* Breadcrumb */}
            <nav className="flex text-sm text-gray-500 mb-6">
                <Link href="/" className="hover:text-red-600">Home</Link>
                <span className="mx-2">/</span>
                <span className="text-red-600 font-medium">{article.category}</span>
            </nav>

            {/* Article Header */}
            <header className="mb-8">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                    {article.title}
                </h1>

                <div className="flex items-center justify-between border-b border-gray-200 pb-4">
                    <div className="flex items-center space-x-4">
                        <div className="text-sm">
                            <p className="font-semibold text-gray-900">{article.author}</p>
                            <p className="text-gray-500">{new Date(article.publishedAt).toLocaleDateString()}</p>
                        </div>
                    </div>
                    <div className="flex space-x-2">
                        {/* Social Share Mock Buttons */}
                        <button className="p-2 rounded-full bg-blue-100 text-blue-600 hover:bg-blue-200">
                            <span className="sr-only">Share on Facebook</span>
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path></svg>
                        </button>
                        <button className="p-2 rounded-full bg-sky-100 text-sky-500 hover:bg-sky-200">
                            <span className="sr-only">Share on Twitter</span>
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path></svg>
                        </button>
                    </div>
                </div>
            </header>

            {/* Featured Image */}
            <div className="relative w-full h-[400px] mb-8 rounded-xl overflow-hidden shadow-lg">
                <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover"
                    priority
                />
            </div>

            {/* Article Content */}
            <article className="prose prose-lg max-w-none mb-12 text-gray-800">
                <p className="lead text-xl text-gray-600 font-medium mb-6">
                    {article.summary}
                </p>
                <p className="whitespace-pre-line">
                    {article.content}
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <p>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.
                </p>
            </article>

            {/* Related News */}
            {relatedArticles.length > 0 && (
                <section className="border-t border-gray-200 pt-12">
                    <h2 className="text-2xl font-bold mb-6">Related News</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {relatedArticles.map((related) => (
                            <Link key={related.id} href={`/article/${related.id}`} className="group">
                                <div className="relative h-48 mb-3 rounded-lg overflow-hidden">
                                    <Image
                                        src={related.image}
                                        alt={related.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform"
                                    />
                                </div>
                                <h3 className="font-bold text-gray-900 group-hover:text-red-600 line-clamp-2">
                                    {related.title}
                                </h3>
                            </Link>
                        ))}
                    </div>
                </section>
            )}
        </div>
    );
}
