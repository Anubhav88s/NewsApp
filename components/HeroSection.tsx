import Image from 'next/image';
import Link from 'next/link';
import { Article } from '@/lib/data';

interface HeroSectionProps {
    article: Article;
}

export default function HeroSection({ article }: HeroSectionProps) {
    return (
        <section className="mb-12">
            <Link href={`/article/${article.id}`} className="group block">
                <div className="relative rounded-xl overflow-hidden shadow-lg">
                    <div className="relative h-[400px] md:h-[500px] w-full">
                        <Image
                            src={article.image}
                            alt={article.title}
                            fill
                            priority
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                            sizes="100vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 text-white">
                        <span className="inline-block px-3 py-1 bg-red-600 text-xs font-bold uppercase tracking-wider rounded-sm mb-3">
                            Top Story
                        </span>
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight group-hover:text-red-100 transition-colors">
                            {article.title}
                        </h1>
                        <p className="text-gray-200 text-lg md:text-xl max-w-3xl line-clamp-2 mb-4">
                            {article.summary}
                        </p>
                        <div className="flex items-center text-sm text-gray-300">
                            <span>{article.author}</span>
                            <span className="mx-2">•</span>
                            <span>{new Date(article.publishedAt).toLocaleDateString()}</span>
                        </div>
                    </div>
                </div>
            </Link>
        </section>
    );
}
