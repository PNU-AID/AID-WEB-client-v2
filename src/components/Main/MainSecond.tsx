import { motion } from 'framer-motion';

function MainSecond() {
  return (
    <div className="flex items-center justify-center w-full h-screen font-bold text-center">
      <motion.div
        className="flex flex-col items-center justify-center w-full gap-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        <span className="text-5xl">부산대학교 인공지능 학회</span>
        <div className="w-1/3 h-1 bg-secondary" />
        <span className="text-black text-7xl">AID</span>
      </motion.div>
    </div>
  );
}

export default MainSecond;
