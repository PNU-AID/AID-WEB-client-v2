import { motion } from 'framer-motion';
import { NewsItem } from '@type/news';

interface NewsLargeCardProps {
  newsItem: NewsItem;
}

export function NewsLargeCard({ newsItem }: NewsLargeCardProps) {
  return (
    <div className="min-w-[600px] mt-8 cursor-pointer">
      <motion.div
        className="overflow-hidden rounded-2xl"
        whileHover={{
          y: -10,
          boxShadow: '0 10px 20px rgba(0,0,0,0.18)',
        }}
      >
        <div
          className="w-full min-h-[340px] bg-gray-400 p-8"
          id="news-card-img"
        >
          <img alt="news thumbnail" src={newsItem.image} />
        </div>
        <div className="flex flex-col p-4 bg-gray-300" id="news-card-content">
          <p className="text-sm text-white">시리즈</p>
          <p className="text-lg font-bold text-white">{newsItem.title}</p>
          <p className="text-lg font-bold text-white text-end">
            {newsItem.content}
          </p>
        </div>
      </motion.div>
    </div>
  );
}
