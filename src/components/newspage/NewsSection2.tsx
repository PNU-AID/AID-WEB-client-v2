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
      className="flex flex-col max-w-[700px] max-h-screen mx-auto"
      id="news-section-2"
    >
      <div className="flex flex-col items-center w-full h-screen overflow-y-scroll font-sans gap-y-8 noscrollbar">
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
    </div>
  );
}
