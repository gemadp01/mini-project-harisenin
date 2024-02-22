// import { useTypewriter } from 'react-simple-typewriter';
import Styles from './Loading.module.css';

const LoadingButton = () => {
  // const [text] = useTypewriter({
  //   words: ['lease wait...'],
  //   cursorStyle: '_',
  //   cursorBlinking: true,
  //   delaySpeed: 250,
  //   typeSpeed: 70,
  //   deleteSpeed: 70,
  //   loop: false,
  // });
  return (
    <>
      <div className={Styles.loading}>
        <span></span>
      </div>
      {/* <div style={{ textAlign: 'center' }}>
        <span>P{text}</span>
      </div> */}
    </>
  );
};

export default LoadingButton;
