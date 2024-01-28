import { useEffect, useState } from 'react';
import { NewsItem } from '../type/news';
import { getNewsList } from '../utils/news';
import { NewsSection1 } from '../components/newspage/NewsSection1';
import { NewsSection2 } from '../components/newspage/NewsSection2';
import { NewsSection3 } from '../components/newspage/NewsSection3';

function NewsPage() {
  const [newsList, setNewsList] = useState<NewsItem[]>([]);

  useEffect(() => {
    const fetch = async () => {
      const newList = await getNewsList();
      setNewsList(newList);
    };
    fetch();
  }, []);

  return (
    <div className="w-[100vw] min-h-screen px-[100px] py-[120px] flex justify-evenly">
      <NewsSection1 newsList={newsList} />
      <NewsSection2 newsList={newsList} />
      <NewsSection3 newsList={newsList} />
    </div>
  );
}

export default NewsPage;
