import { NewsItem } from '../../type/news';
import { NewsMediumCard } from './NewsMediumCard';

interface NewsSection1Props {
  newsList: NewsItem[];
}

export function NewsSection1({ newsList }: NewsSection1Props) {
  return (
    <div
      className="flex flex-col w-[400px] mx-auto items-center"
      id="news-section-1"
    >
      <h2 className="mb-8 text-sm font-bold text-gray-500">오늘의 시리즈</h2>
      <div className="flex flex-col h-[calc(100%-400px)] overflow-y-auto gap-y-2 w-full items-center">
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
