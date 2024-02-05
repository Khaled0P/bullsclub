import styles from './UtilsBar.module.css';
import { items } from './data';
import brightIcon from '../../assets/bright.svg';
import darkIcon from '../../assets/dark.svg';
import { useContext } from 'react';
import { ThemeContext } from '../../themeProvider';

function UtilsBar() {
  const { theme, setTheme } = useContext(ThemeContext);
  function changeTheme() {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  }
  return (
    <div className={styles.bar}>
      {items.map((item) => (
        <div className={styles.itemContainer} key={item.name}>
          <img src={item.icon} alt={item.name} />
          <p>{item.name}</p>
        </div>
      ))}
      <div className={styles.itemContainer} onClick={changeTheme}>
        <img src={theme === 'light' ? brightIcon : darkIcon} alt="bright" />
        <p>mode</p>
      </div>
    </div>
  );
}

export default UtilsBar;
