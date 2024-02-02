import { motion, useScroll } from 'framer-motion';
import AidMainBackground1 from '../../assets/aid-main-bg1.png';

function MainSecondComponent() {
  const { scrollYProgress } = useScroll({ offset: ['50vh', '100vh'] });

  return (
    <>
      <section className="flex items-center justify-center w-full h-screen font-bold text-center bg-white">
        <motion.div
          className="flex flex-col items-center justify-center w-full gap-12"
          style={{ opacity: scrollYProgress }}
        >
          <span className="text-5xl">부산대학교 인공지능 학회</span>
          <div className="w-1/3 h-1 bg-secondary" />
          <span className="text-7xl">AID</span>
        </motion.div>
      </section>
      <section className="flex items-center justify-center w-full h-screen bg-white">
        <motion.div
          className="flex flex-col items-center justify-center w-full h-full gap-4 m-auto text-center"
          style={{ opacity: scrollYProgress }}
        >
          <h1 className="text-3xl text-primary">탐구</h1>
          <p className="text-xl">
            스터디를 통해 최신 AI 기술과 연구 동향에 대해 주도적으로 탐구
          </p>
        </motion.div>
        <img
          className="object-cover mx-20"
          src={AidMainBackground1}
          width="80%"
        />
      </section>
      <section className="flex flex-col items-center justify-center w-full h-screen bg-transparent">
        <motion.div
          className="flex flex-col items-center justify-center w-full h-full gap-4 m-auto "
          style={{ opacity: scrollYProgress }}
        >
          <h1 className="text-3xl text-primary">프로젝트</h1>
          <p className="text-xl text-white">
            실질적인 프로젝트를 기반으로 AI 모델을 개발
          </p>
        </motion.div>
        <img
          className="object-cover mx-20 mb-10"
          height="60%"
          src={AidMainBackground1}
          width="50%"
        />
      </section>
      <section className="flex items-center justify-center w-full h-screen bg-white">
        <motion.div
          className="flex flex-col items-center justify-center w-full h-full gap-4 m-auto text-center"
          style={{ opacity: scrollYProgress }}
        >
          <h1 className="text-3xl text-primary">대외활동</h1>
          <p className="text-xl">
            스터디를 통해 최신 AI 기술과 연구 동향에 대해 주도적으로 탐구
          </p>
        </motion.div>
        {/** swiper를 기반으로 한 스크롤뷰 구현 */}
        <img
          className="object-cover mx-20"
          src={AidMainBackground1}
          width="80%"
        />
      </section>
    </>
  );
}

export default MainSecondComponent;
