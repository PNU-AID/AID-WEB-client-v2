import { motion } from 'framer-motion';
import { NewsItem } from '@type/news';

interface NewsRecentCardProps {
  newsItem: NewsItem;
}

export function NewsRecentCard({ newsItem }: NewsRecentCardProps) {
  return (
    <div className="w-[270px] h-fit cursor-pointer mt-4">
      <motion.div
        className="overflow-hidden border rounded-2xl"
        whileHover={{
          y: -10,
          boxShadow: '0 10px 20px 4px rgba(0, 0, 0, 0.1)',
          transition: { duration: 1 },
        }}
      >
        <div
          className="w-20 h-20 m-10 bg-gray-400 rounded-full overflow-clip"
          id="news-card-img"
        >
          <img alt="news thumbnail" src={newsItem.image} />
        </div>
        <div className="flex flex-col w-full p-4" id="news-card-content">
          <p className="text-sm text-black">시리즈</p>
          <p className="text-lg font-bold text-black">{newsItem.title}</p>
        </div>
      </motion.div>
    </div>
  );
}
