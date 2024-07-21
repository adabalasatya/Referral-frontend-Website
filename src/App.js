import React, { useRef, useState } from 'react';
import Header from './components/Header';
import TopCard from './components/TopCard';
import HeroSection from './components/HeroSection';
import HowToRefer from './components/HowToRefer';
import ReferralBenefits from './components/ReferralBenefits';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';
import ReferralModal from './components/ReferralModal'; 

const App = () => {
  const referRef = useRef(null);
  const benefitsRef = useRef(null);
  const faqsRef = useRef(null);
  const supportRef = useRef(null);

  const [modalOpen, setModalOpen] = useState(false);

  const handleOpen = () => {
    setModalOpen(true);
  };

  const handleClose = () => {
    setModalOpen(false);
  };

  const scrollToRef = (section) => {
    const targetRef = {
      refer: referRef.current,
      benefits: benefitsRef.current,
      faqs: faqsRef.current,
      support: supportRef.current,
    }[section];
    
    if (targetRef) {
      window.scrollTo({
        top: targetRef.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div>
      <Header/>
      <TopCard scrollToRef={scrollToRef} />
      <HeroSection handleOpen={handleOpen} />
      <HowToRefer ref={referRef} />
      <ReferralBenefits ref={benefitsRef} />
      <FAQSection ref={faqsRef} />
      <Footer ref={supportRef} />
      <ReferralModal open={modalOpen} handleClose={handleClose} />
    </div>
  );
};

export default App;
