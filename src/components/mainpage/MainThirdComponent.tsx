import { motion } from 'framer-motion';

interface MainThirdComponentProps {
  activeSection: number;
}

export default function MainThirdComponent({
  activeSection,
}: MainThirdComponentProps) {
  const index = 2;
  return (
    <section className="flex items-center justify-center w-full h-screen bg-white">
      <motion.div
        animate={{
          scale: activeSection === index ? 1.3 : 1,
          opacity: activeSection === index ? 1 : 0,
        }}
        className="scroll-section"
        transition={{ type: 'spring', stiffness: 300 }}
      >
        <div className="flex flex-col items-center justify-center w-full h-full gap-4 m-auto text-center">
          <h1 className="mb-8 text-4xl text-primary">About Us</h1>
          <hr className="w-20 h-1 mb-12 bg-black" />
          <p className="font-sans text-xs leading-6">
            AID는 AI 개발에 관심있는 사람들이 함께 스터디와 세미나를 진행하고,
            대회와 프로젝트를 하며 발전하는 동아리입니다.
            <br />
            우리는 같은 진로를 꿈꾸는 사람들과의 네트워크를 넓히고 개인 및
            단체의 실력 발전을 목표로 하고 있습니다.
            <br />본 동아리는 부산대학교 AI 동아리 조준수 교수님의 지도 아래,
            <br />
            부산대학교 정보컴퓨터공학 학생들을 중심으로 2022년 1학기에 설립되어
            다양한 학생들이 함께 하고 있습니다.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
