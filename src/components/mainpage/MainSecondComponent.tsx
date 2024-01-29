import { motion, useScroll } from 'framer-motion';

function MainSecondComponent() {
  const { scrollYProgress } = useScroll({ offset: ['50vh', '100vh'] });

  return (
    <>
      <section className="flex items-center justify-center w-full h-screen font-bold text-center bg-white">
        <motion.div
          className="flex flex-col items-center justify-center w-full gap-12"
          style={{ opacity: scrollYProgress }}
        >
          <span className="text-5xl">부산대학교 인공지능 동아리</span>
          <div className="w-1/3 h-1 bg-secondary" />
          <span className="text-7xl">AID</span>
        </motion.div>
      </section>
      <section className="flex items-center justify-center w-full h-screen bg-white">
        <motion.div
          className="flex flex-col items-center justify-center w-full h-full gap-4 m-auto text-center"
          style={{ opacity: scrollYProgress }}
        >
          <h1 className="mb-8 text-4xl text-primary">About Us</h1>
          <p>
            AID는 AI 개발에 관심있는 사람들이 함께 스터디와 세미나를 진행하고,
            대회와 프로젝트를 하며 발전하는 동아리입니다.
          </p>
          <p>
            우리는 같은 진로를 꿈꾸는 사람들과의 네트워크를 넓히고 개인 및
            단체의 실력 발전을 목표로 하는 동아리입니다.
          </p>
          <p>본 동아리는 부산대학교 AI 학회 조준수 교수님의 지도 아래,</p>
          <p>
            부산대학교 정보컴퓨터공학 학생들을 중심으로 2022년 여름학기에
            설립되어 다양한 학생들이 함께 하고 있습니다.
          </p>
        </motion.div>
      </section>
    </>
  );
}

export default MainSecondComponent;
