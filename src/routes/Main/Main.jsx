import UtilsBar from '../../components/UtilsBar/UtilsBar';
import styles from './Main.module.css';
import { motion } from 'framer-motion';
import { ThemeContext } from '../../themeProvider';
import { useContext } from 'react';

function Main() {
  const { theme } = useContext(ThemeContext);
  return (
    <motion.div
      className={styles.mainContainer}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      style={
        theme === 'light' ? { backgroundColor: '#b7bec9', color: 'black' } : ''
      }
    >
      <h1>This is a placeholder heading</h1>
      <h3>This is another placeholder heading</h3>
      <UtilsBar />
    </motion.div>
  );
}

export default Main;
