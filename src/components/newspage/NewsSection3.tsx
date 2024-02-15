import { NewsItem } from '@type/news';
import { NewsRecentCard } from '@component/newspage/NewsRecentCard';
import Skeleton from 'react-loading-skeleton';
import { isArray } from '@util/util';

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
        {isArray(newsList) ? (
          newsList.map((item) => (
            <NewsRecentCard key={item.id + '-' + item.title} newsItem={item} />
          ))
        ) : (
          <div className="flex flex-col w-4/5 gap-y-4">
            <Skeleton height={200} />
            <Skeleton height={200} />
            <Skeleton height={200} />
            <Skeleton height={200} />
          </div>
        )}
      </div>
    </div>
  );
}
