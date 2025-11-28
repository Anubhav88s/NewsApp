import HeroSection from "@/components/HeroSection";
import NewsCard from "@/components/NewsCard";
import { getArticles, getTopNews } from "@/lib/data";

export default function Home() {
  const articles = getArticles();
  const topNews = getTopNews();

  // Filter out the top news from the main list so it doesn't appear twice
  const otherArticles = articles.filter(article => article.id !== topNews.id);

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <HeroSection article={topNews} />

      {/* Latest News Grid */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900 border-l-4 border-red-600 pl-3">
            Latest News
          </h2>
          <a href="#" className="text-red-600 font-medium hover:underline text-sm">
            View All &rarr;
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherArticles.map((article) => (
            <NewsCard key={article.id} article={article} />
          ))}
        </div>
      </section>

      {/* Category Sections (Simulated) */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-bold text-gray-900 mb-4 border-b pb-2 border-gray-200">
            Nation
          </h2>
          <div className="space-y-4">
            {articles.filter(a => a.category === 'Nation').slice(0, 2).map(article => (
              <div key={article.id} className="flex gap-4 group cursor-pointer">
                <div className="relative w-24 h-24 flex-shrink-0 rounded-md overflow-hidden">
                  {/* We would use Image here but for simplicity in this list view I'll just use a div or simple img tag if needed, 
                       but let's reuse NewsCard style or make a mini card. 
                       For now, let's just list them simply.
                   */}
                  <img src={article.image} alt={article.title} className="object-cover w-full h-full group-hover:scale-110 transition-transform" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 group-hover:text-red-600 line-clamp-2 mb-1">
                    {article.title}
                  </h3>
                  <p className="text-xs text-gray-500">{new Date(article.publishedAt).toLocaleDateString()}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-xl font-bold text-gray-900 mb-4 border-b pb-2 border-gray-200">
            Cricket
          </h2>
          <div className="space-y-4">
            {articles.filter(a => a.category === 'Cricket').slice(0, 2).map(article => (
              <div key={article.id} className="flex gap-4 group cursor-pointer">
                <div className="relative w-24 h-24 flex-shrink-0 rounded-md overflow-hidden">
                  <img src={article.image} alt={article.title} className="object-cover w-full h-full group-hover:scale-110 transition-transform" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 group-hover:text-red-600 line-clamp-2 mb-1">
                    {article.title}
                  </h3>
                  <p className="text-xs text-gray-500">{new Date(article.publishedAt).toLocaleDateString()}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
