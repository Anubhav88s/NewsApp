import Image from 'next/image';
import Link from 'next/link';
import { Article } from '@/lib/data';

interface NewsCardProps {
    article: Article;
}

export default function NewsCard({ article }: NewsCardProps) {
    return (
        <Link href={`/article/${article.id}`} className="group block h-full">
            <div className="bg-white dark:bg-neutral-900 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 h-full border border-gray-100 dark:border-neutral-800 flex flex-col">
                <div className="relative h-48 w-full overflow-hidden">
                    <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                </div>
                <div className="p-4 flex-grow flex flex-col">
                    <div className="flex items-center mb-2">
                        <span className="text-xs font-semibold text-red-600 uppercase tracking-wider">
                            {article.category}
                        </span>
                        <span className="mx-2 text-gray-300">•</span>
                        <span className="text-xs text-gray-500">
                            {new Date(article.publishedAt).toLocaleDateString()}
                        </span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2 group-hover:text-red-600 transition-colors line-clamp-2">
                        {article.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-3 mb-4 flex-grow">
                        {article.summary}
                    </p>
                </div>
            </div>
        </Link>
    );
}
