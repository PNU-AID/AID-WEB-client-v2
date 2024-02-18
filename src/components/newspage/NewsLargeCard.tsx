import { motion } from 'framer-motion';
import { NewsItem } from '@type/news';

interface NewsLargeCardProps {
  newsItem: NewsItem;
}

export function NewsLargeCard({ newsItem }: NewsLargeCardProps) {
  return (
    <div className="max-w-[530px] mt-8 cursor-pointer h-fit">
      <motion.div
        className="rounded-[5%] flex flex-col"
        whileHover={{
          y: -10,
          boxShadow: '0 10px 20px 4px rgba(0, 0, 0, 0.1)',
          transition: { duration: 1 },
        }}
      >
        <div
          className="max-w-[560px] max-h-[340px] overflow-clip"
          id="news-card-img"
        >
          <img alt="news thumbnail" src={newsItem.image} />
        </div>
        <div
          className="flex flex-col px-8 py-4 bg-transparent text-secondary font-pretendard"
          id="news-card-content"
        >
          <p className="text-lg">{newsItem.title}</p>
          <p className="text-lg text-black text-end">{newsItem.content}</p>
        </div>
      </motion.div>
    </div>
  );
}
