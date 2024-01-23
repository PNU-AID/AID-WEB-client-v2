import { NewsItem } from '../../type/news';
import { NewsMediumCard } from './NewsMediumCard';

interface NewsSectionFirstProps {
  newsList: NewsItem[];
}

export function NewsSectionFirst({ newsList }: NewsSectionFirstProps) {
  return (
    <div
      className="flex flex-col w-[375px] mx-auto items-center"
      id="news-section-first"
    >
      <h2 className="mb-8 text-sm font-bold text-gray-500">오늘의 시리즈</h2>
      <div className="flex flex-col h-[calc(100%-400px)] overflow-y-scroll gap-y-4">
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
