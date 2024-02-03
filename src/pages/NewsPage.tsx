import { NewsItem } from '../type/news';
import { getNewsList } from '../apis/news';
import { NewsSection1 } from '../components/newspage/NewsSection1';
import { NewsSection2 } from '../components/newspage/NewsSection2';
import { NewsSection3 } from '../components/newspage/NewsSection3';
import { useQuery } from 'react-query';

function NewsPage() {
  const { data: newsList } = useQuery<NewsItem[]>({
    queryKey: 'newsList',
    queryFn: getNewsList,
    staleTime: 1000 * 60 * 10,
  });

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
