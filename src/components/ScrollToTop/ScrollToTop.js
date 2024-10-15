import React from 'react';

const ScrollToTop = () => {
  const scrollToTop = () => {
    document.querySelector('html').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <button className="scroll-top scroll-to-target" onClick={scrollToTop}>
      <i className="flaticon-up-chevron"></i>
    </button>
  );
};

export default ScrollToTop;
