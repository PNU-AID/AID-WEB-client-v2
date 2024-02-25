import { NewsItem } from '@type/news';
import { NewsLargeCard } from '@component/newspage/NewsLargeCard';
import Skeleton from 'react-loading-skeleton';
import { isArray } from '@util/util';

interface NewsSection2Props {
  newsList: NewsItem[];
}

export function NewsSection2({ newsList }: NewsSection2Props) {
  return (
    <div
      className="grid flex-col items-center w-full grid-cols-1 mx-auto font-sans gap-y-8 sm:grid-cols-2"
      id="news-section-2"
    >
      {isArray(newsList) ? (
        newsList.map((item) => (
          <NewsLargeCard key={item.id + '-' + item.title} newsItem={item} />
        ))
      ) : (
        <div className="flex flex-col w-4/5 gap-y-4">
          <Skeleton height={400} />
          <Skeleton height={400} />
        </div>
      )}
    </div>
  );
}
