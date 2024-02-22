import { motion } from 'framer-motion';
import { NewsItem } from '@type/news';

interface NewsLargeCardProps {
  newsItem: NewsItem;
}

export function NewsLargeCard({ newsItem }: NewsLargeCardProps) {
  const formattedDate = new Date(newsItem.created_at).toLocaleDateString(
    'ko-KR'
  );
  return (
    <div className="flex flex-col gap-y-2">
      <motion.div
        className="flex flex-col max-w-[500px] mt-8 cursor-pointer h-fit"
        whileHover={{
          y: -10,
          boxShadow: '0 10px 20px 4px rgba(0, 0, 0, 0.1)',
          transition: { duration: 1 },
        }}
      >
        <img alt="news thumbnail" src={newsItem.image} />
        <div
          className="flex flex-col py-4 bg-transparent h-fit text-secondary font-pretendard"
          id="news-card-content"
        >
          <p className="text-lg font-bold">{newsItem.title}</p>
          <p className="">{newsItem.content}</p>
        </div>
      </motion.div>
      <label className="mr-4 text-sm text-gray-400 text-mono text-start">
        {formattedDate}
      </label>
    </div>
  );
}
