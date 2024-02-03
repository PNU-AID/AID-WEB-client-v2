import { useEffect, useState } from 'react';
import MainFirstComponent from '../components/mainpage/MainFirstComponent';
import MainSecondComponent from '../components/mainpage/MainSecondComponent';
import { useScroll } from 'framer-motion';

function MainPage() {
  const [activeSection, setActiveSection] = useState(0);
  const { scrollY } = useScroll();

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

  useEffect(() => {
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
