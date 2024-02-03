import { NewsItem } from '../../type/news';
import { NewsLargeCard } from './NewsLargeCard';

interface NewsSection2Props {
  newsList: NewsItem[];
}

export function NewsSection2({ newsList }: NewsSection2Props) {
  return (
    <div
      className="flex flex-col w-[700px] max-h-screen mx-auto overflow-hidden"
      id="news-section-2"
    >
      <h2 className="mb-8 text-sm font-bold text-center text-gray-500">
        방금 올라온 아티클
      </h2>
      <div className="flex flex-col items-center w-full h-screen overflow-y-scroll gap-y-12 no-scrollbar">
        {newsList.map((item) => (
          <NewsLargeCard
            key={item.newsId + '-' + item.newsTitle}
            newsItem={item}
          />
        ))}
      </div>
    </div>
  );
}
