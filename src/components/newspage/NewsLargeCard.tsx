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
        className="flex flex-col max-w-[500px] mt-8 cursor-pointer h-fit border rounded-2xl"
        whileHover={{
          y: -10,
          boxShadow: '0 10px 20px 4px rgba(0, 0, 0, 0.1)',
          transition: { duration: 1 },
        }}
      >
        <div
          className="max-h-[300px] relative overflow-hidden flex items-center justify-center"
          id="news-card-img"
        >
          <img alt="news thumbnail" src={newsItem.image} width={400} />
        </div>
        <div
          className="flex flex-col px-8 py-4 bg-transparent h-fit text-secondary font-pretendard"
          id="news-card-content"
        >
          <p className="text-lg">{newsItem.content}</p>
        </div>
      </motion.div>
      <label className="mr-4 text-sm text-gray-400 text-mono text-end">
        {formattedDate}
      </label>
    </div>
  );
}
