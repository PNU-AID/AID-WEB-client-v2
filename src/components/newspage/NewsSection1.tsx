import { NewsItem } from '@type/news';
import { NewsMediumCard } from '@component/newspage/NewsMediumCard';

interface NewsSection1Props {
  newsList: NewsItem[];
}

export function NewsSection1({ newsList }: NewsSection1Props) {
  return (
    <div
      className="flex flex-col w-[400px] mx-auto items-center overflow-hidden"
      id="news-section-1"
    >
      <h2 className="mb-8 text-sm font-bold text-gray-500">오늘의 시리즈</h2>
      <div className="flex flex-col items-center w-full h-screen overflow-y-auto gap-y-2">
        {newsList.map((item) => (
          <NewsMediumCard
            key={item.newsId + '-' + item.newsTitle}
            newsItem={item}
          />
        ))}
      </div>
    </div>
  );
}
