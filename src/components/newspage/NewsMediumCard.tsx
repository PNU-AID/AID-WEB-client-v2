import { NewsItem } from '@type/news';
import { motion } from 'framer-motion';

interface NewsMediumCardProps {
  newsItem: NewsItem;
}

export function NewsMediumCard({ newsItem }: NewsMediumCardProps) {
  return (
    <div className="max-w-[270px] h-fit mt-4 cursor-pointer">
      <motion.div
        className="overflow-hidden rounded-2xl"
        whileHover={{
          y: -10,
          boxShadow: '0 10px 20px blue',
          transition: { duration: 1 },
        }}
      >
        <div className="w-[270px] h-[270px]" id="news-card-img">
          <img alt="news thumbnail" src={newsItem.image} />
        </div>
        <div className="flex flex-col p-4 bg-blue-500" id="news-card-content">
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
