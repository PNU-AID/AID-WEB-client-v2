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
          className="w-[270px] h-[270px] relative overflow-hidden"
          id="news-card-img"
        >
          <img
            alt="news thumbnail"
            className="object-none object-center"
            src={newsItem.image}
          />
        </div>
        <div className="flex flex-col p-4 " id="news-card-content">
          <p className="text-sm ">시리즈</p>
          <p className="text-lg font-bold ">{newsItem.title}</p>
          <p className="text-lg font-bold text-end">{newsItem.content}</p>
        </div>
      </motion.div>
    </div>
  );
}
