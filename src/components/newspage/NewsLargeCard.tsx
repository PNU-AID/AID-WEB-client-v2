import { motion } from 'framer-motion';
import { NewsItem } from '@type/news';

interface NewsLargeCardProps {
  newsItem: NewsItem;
}

export function NewsLargeCard({ newsItem }: NewsLargeCardProps) {
  return (
    <div className="min-w-[600px] mt-8 cursor-pointer">
      <motion.div
        className="rounded-[5%] overflow-clip flex flex-col"
        whileHover={{
          y: -10,
          boxShadow: '0 10px 20px yellow',
          transition: { duration: 1 },
        }}
      >
        <div className="max-w-[600px] max-h-[340px]" id="news-card-img">
          <img alt="news thumbnail" src={newsItem.image} />
        </div>
        <div
          className="flex flex-col px-8 py-4 bg-yellow-300"
          id="news-card-content"
        >
          <p className="text-sm text-white">시리즈</p>
          <p className="text-lg font-bold text-white">{newsItem.title}</p>
          <p className="text-lg font-bold text-white text-end">
            {newsItem.create_at}
          </p>
        </div>
      </motion.div>
    </div>
  );
}
