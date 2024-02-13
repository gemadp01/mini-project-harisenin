import React from 'react';
import { useTypewriter } from 'react-simple-typewriter';
import styles from './Loading.module.css';

const Loading = () => {
  const [text] = useTypewriter({
    words: ['Please wait...'],
    cursorStyle: '_',
    cursorBlinking: true,
    delaySpeed: 250,
    typeSpeed: 70,
    deleteSpeed: 70,
    loop: false,
  });

  return (
    <div className={styles.background}>
      <div className={styles.loading}>
        <div>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <span>{text}</span>
      </div>
    </div>
  );
};

export default Loading;
