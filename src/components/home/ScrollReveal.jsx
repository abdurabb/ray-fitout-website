import React, { useEffect, useRef } from 'react';
import '../../app.css';

function ScrollReveal({ children }) {
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          console.log('entry first')
          ref.current.classList.add('in-view');
        } else {
          console.log('entry second')
          ref.current.classList.remove('in-view'); 
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div ref={ref} className="animate-slide-up">
      {children}
    </div>
  );
}

export default ScrollReveal;
