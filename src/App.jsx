import styles from './App.module.css';
import Login from './pages/Login/Login';
import Home from './pages/Home/Home';
import swordIcon from './assets/poison-icon.png';
import shieldIcon from './assets/espada-icon.png';

function App() {
  
  return (
    <div className={styles.container}>

      <img 
        src={swordIcon} 
        alt="Ícone de espada" 
        className={`${styles.bgIcon} ${styles.iconSword}`} 
      />
      <img 
        src={shieldIcon} 
        alt="Ícone de escudo" 
        className={`${styles.bgIcon} ${styles.iconShield}`} 
      />
    
      <Login />

      {/* <Home /> */}

    </div>
  );
}

export default App;