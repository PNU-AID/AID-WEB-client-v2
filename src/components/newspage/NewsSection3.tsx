import { NewsItem } from '../../type/news';
import { NewsRecentCard } from './NewsRecentCard';

interface NewsSection3Props {
  newsList: NewsItem[];
}

export function NewsSection3({ newsList }: NewsSection3Props) {
  return (
    <div
      className="flex flex-col w-[375px] mx-auto items-center"
      id="news-section-3"
    >
      <h2 className="mb-8 text-sm font-bold text-gray-500">최근 소식</h2>
      <div className="flex flex-col items-center w-full h-screen overflow-y-scroll gap-y-4">
        {newsList.map((item) => (
          <NewsRecentCard
            key={item.newsId + '-' + item.newsTitle}
            recentItem={item}
          />
        ))}
      </div>
    </div>
  );
}
