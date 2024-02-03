import { useEffect, useState } from 'react';
import MainFirstComponent from '@component/mainpage/MainFirstComponent';
import MainSecondComponent from '@component/mainpage/MainSecondComponent';
import { useScroll } from 'framer-motion';

function MainPage() {
  const [activeSection, setActiveSection] = useState(0);
  const { scrollY } = useScroll();

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.scroll-section');

      sections.forEach((section, index) => {
        const sectionTop = section.offsetTop - window.innerHeight / 2;
        const sectionHeight = section.clientHeight;
        if (
          scrollY.get() > sectionTop &&
          scrollY.get() <= sectionTop + sectionHeight
        ) {
          setActiveSection(index);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <MainFirstComponent activeSection={activeSection} />
      <MainSecondComponent activeSection={activeSection} />
    </>
  );
}

export default MainPage;
