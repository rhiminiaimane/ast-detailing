import React, { useEffect, useRef, useState } from 'react';
import styles from './Reveal.module.css';

type Direction = 'left' | 'right' | 'top' | 'bottom';

interface RevealProps {
  children: React.ReactNode;
  direction?: Direction;
  threshold?: number;
}

const Reveal: React.FC<RevealProps> = ({ children, direction = 'bottom', threshold = 0.1 }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold }
    );

    const node = ref.current;
    if (node) {
      observer.observe(node);
    }

    return () => observer.disconnect();
  }, [threshold]);

  return (
    <div
      ref={ref}
      className={`${styles.reveal} ${styles[direction]} ${isVisible ? styles.active : ''}`}
    >
      {children}
    </div>
  );
};

export default Reveal;