import { useEffect, useState } from 'react';
import { NewsItem } from '../type/news';
import { getNewsList } from '../utils/news';
import { NewsSectionFirst } from '../components/newspage/NewsSectionFirst';

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
    <div className="w-full min-h-screen px-[100px] py-[120px] flex">
      <NewsSectionFirst newsList={newsList} />
    </div>
  );
}

export default NewsPage;
