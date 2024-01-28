import { motion } from 'framer-motion';
import { NewsItem } from '../../type/news';

interface NewsRecentCardProps {
  recentItem: NewsItem;
}

export function NewsRecentCard({ recentItem }: NewsRecentCardProps) {
  return (
    <div className="w-[270px] h-[340px] cursor-pointer mt-4">
      <motion.div
        className="overflow-hidden border rounded-2xl"
        whileHover={{ y: -10, boxShadow: '0 10px 20px rgba(0,0,0,0.08)' }}
      >
        <div
          className="w-20 h-20 p-8 m-10 bg-gray-400 rounded-full"
          id="news-card-img"
        >
          {/** TODO: 이미지 영역 */}
        </div>
        <div className="flex flex-col w-full p-4 " id="news-card-content">
          <p className="text-sm text-black">시리즈</p>
          <p className="text-lg font-bold text-black">{recentItem.newsTitle}</p>
        </div>
      </motion.div>
    </div>
  );
}
