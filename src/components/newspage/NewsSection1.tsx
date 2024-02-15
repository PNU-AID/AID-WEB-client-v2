import { NewsItem } from '@type/news';
import { NewsMediumCard } from '@component/newspage/NewsMediumCard';
import Skeleton from 'react-loading-skeleton';
import { isArray } from '@util/util';

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
      <div className="flex flex-col items-center w-full h-screen overflow-y-auto font-mono gap-y-4">
        {isArray(newsList) ? (
          newsList.map((item) => (
            <NewsMediumCard key={item.id + '-' + item.title} newsItem={item} />
          ))
        ) : (
          <div className="flex flex-col w-4/5 gap-y-4">
            <Skeleton height={300} />
            <Skeleton height={300} />
            <Skeleton height={300} />
          </div>
        )}
      </div>
    </div>
  );
}
