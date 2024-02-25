import { useQuery } from 'react-query';

import { NewsItem } from '@type/news';
import { getNewsList } from '@api/news';
import { NewsSection2 } from '@component/newspage/NewsSection2';

function NewsPage() {
  const { data: newsList } = useQuery<NewsItem[]>({
    queryKey: 'newsList',
    queryFn: getNewsList,
    staleTime: 1000 * 60 * 10,
  });

  return (
    <div className="w-full min-h-screen sm:px-[100px] py-[120px] flex flex-col sm:flex-row gap-y-12 sm:gap-x-8">
      {newsList && <NewsSection2 newsList={newsList} />}
    </div>
  );
}

export default NewsPage;
