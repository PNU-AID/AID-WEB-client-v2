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
    <div className="flex flex-col gap-y-2 max-w-[500px]">
      <motion.div
        className="flex flex-col mx-auto mt-8 h-fit"
        whileHover={{
          y: -10,
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
      <label className="mr-4 text-sm text-gray-400 text-mono text-end">
        {formattedDate}
      </label>
    </div>
  );
}
