import styles from './Signin.module.css';
import backgroundVideo from '../../assets/background.mp4';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function Signin() {
  const videoRef = useRef(null);
  function handleSignin() {
    videoRef.current.playbackRate = 3.0;
  }

  return (
    <motion.div
      key="signin"
      className={styles.page}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ delay: 1, duration: 0.5 }}
    >
      <video
        ref={videoRef}
        muted
        loop
        autoPlay
        src={backgroundVideo}
        className={styles.backgroundVideo}
      ></video>
      <div className={styles.signinContainer}>
        <Link to="/main">
          <button className={styles.signinBtn} onClick={handleSignin}>
            Sign In
          </button>
        </Link>
      </div>
    </motion.div>
  );
}

export default Signin;
