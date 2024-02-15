import { useQuery } from 'react-query';

import { NewsItem } from '@type/news';
import { getNewsList } from '@api/news';
import { NewsSection1 } from '@component/newspage/NewsSection1';
import { NewsSection2 } from '@component/newspage/NewsSection2';
import { NewsSection3 } from '@component/newspage/NewsSection3';

function NewsPage() {
  const { data: newsList } = useQuery<NewsItem[]>({
    queryKey: 'newsList',
    queryFn: getNewsList,
    staleTime: 1000 * 60 * 10,
  });
  console.log(newsList);

  return (
    <div className="w-[100vw] min-h-screen px-[100px] py-[120px] flex justify-evenly">
      {newsList && (
        <>
          <NewsSection1 newsList={newsList} />
          <NewsSection2 newsList={newsList} />
          <NewsSection3 newsList={newsList} />
        </>
      )}
    </div>
  );
}

export default NewsPage;
