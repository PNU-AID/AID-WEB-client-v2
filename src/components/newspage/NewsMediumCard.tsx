import { NewsItem } from '../../type/news';

interface NewsMediumCardProps {
  newsItem: NewsItem;
}

export function NewsMediumCard({ newsItem }: NewsMediumCardProps) {
  return (
    <div className="w-full h-full overflow-hidden border cursor-pointer rounded-2xl">
      <div className="w-[270px] h-[270px] bg-gray-400 p-8" id="news-card-img">
        {/** TODO: 이미지 영역 */}
      </div>
      <div className="flex flex-col p-4 bg-secondary" id="news-card-content">
        <p className="text-sm text-white">시리즈</p>
        <p className="text-lg font-bold text-white">{newsItem.newsTitle}</p>
        <p className="text-lg font-bold text-white text-end">
          {newsItem.author}
        </p>
      </div>
    </div>
  );
}
