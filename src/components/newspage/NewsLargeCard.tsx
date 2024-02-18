import { motion } from 'framer-motion';
import { NewsItem } from '@type/news';

interface NewsLargeCardProps {
  newsItem: NewsItem;
}

export function NewsLargeCard({ newsItem }: NewsLargeCardProps) {
  return (
    <div className="max-w-[500px] mt-8 cursor-pointer h-fit border rounded-2xl">
      <motion.div
        className="rounded-[5%] flex flex-col"
        whileHover={{
          y: -10,
          transition: { duration: 1 },
        }}
      >
        <div
          className="max-w-[560px] max-h-[340px] relative overflow-hidden"
          id="news-card-img"
        >
          <img
            alt="news thumbnail"
            className="object-none object-center w-full h-full"
            src={newsItem.image}
          />
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
