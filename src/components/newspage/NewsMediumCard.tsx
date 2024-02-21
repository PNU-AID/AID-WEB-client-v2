import { NewsItem } from '@type/news';
import { motion } from 'framer-motion';

interface NewsMediumCardProps {
  newsItem: NewsItem;
}

export function NewsMediumCard({ newsItem }: NewsMediumCardProps) {
  return (
    <div className="max-w-[240px] h-fit mt-4 cursor-pointer">
      <motion.div
        className="overflow-hidden rounded-2xl"
        whileHover={{
          y: -10,
          boxShadow: '0 10px 20px 4px rgba(0, 0, 0, 0.1)',
          transition: { duration: 1 },
        }}
      >
        <div
          className="relative flex items-center justify-center overflow-hidden"
          id="news-card-img"
        >
          <img alt="news thumbnail" src={newsItem.image} width={270} />
        </div>
        <div className="flex flex-col p-4 " id="news-card-content">
          <p className="text-sm font-bold ">{newsItem.title}</p>
          <p className="mt-4 text-xs font-bold">{newsItem.content}</p>
        </div>
      </motion.div>
    </div>
  );
}
