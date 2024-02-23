import Image from 'next/image';
import { gsap } from 'gsap';
import { useEffect } from 'react';
import Styles from './Home.module.css';

const Home = () => {
  useEffect(() => {
    gsap.fromTo(
      '.sub-headline',
      {
        opacity: 0,
        x: 50,
      },
      {
        opacity: 1,
        x: 0,
      }
    );

    gsap.fromTo(
      '.headline h1',
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
      }
    );

    gsap.fromTo(
      '.headline h2',
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
      }
    );

    gsap.fromTo(
      '.headline p',
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
      }
    );

    gsap.fromTo(
      '.headline a',
      {
        opacity: 0,
      },
      {
        opacity: 1,
        delay: 0.4,
      }
    );
  }, []);
  return (
    <section id="home">
      <div className="container">
        <div className="sub-container">
          <div className="headline">
            <h1>
              <span style={{ color: '#ef4444' }}>Rencos</span> Project
            </h1>
            <h2 style={{ fontSize: '1rem' }}>Theres no such thing as a right or wrong path. There are only different choices.</h2>
            <p>
              Various options of anime cosplay costumes are available at Rencos Project. Discover your favorite characters and bring them to life in style with our complete
              collection.
            </p>
            <a href="#contact" className={Styles['btn-contact']}>
              Contact Us
              <Image src="/svg/iconmonstr-arrow-19.svg" alt="arrow-right" width={12} height={12} />
            </a>
          </div>
          <div className="sub-headline">
            <div>
              <Image src="/img/4.png" alt="Sample" width={336} height={449} style={{ maxWidth: '100%', height: 'auto' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
