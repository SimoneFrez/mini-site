import React, { useState } from 'react';
import styles from './Login.module.css';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import d20Icon from '../../assets/dragon-d20.jpg'; 

const Login = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginClick = () => {
    console.log(`Aventureiro: ${email}, Senha: ${password}`);
    onLoginSuccess();
  };

  return (
    <div className={styles.loginContainer}>
      <img 
        src={d20Icon} 
        alt="Ícone de um dado D20" 
        className={styles.loginIcon} 
      />
      <h2 className={styles.title}>Portal da Guilda</h2>
      <p className={styles.subtitle}>Identifique-se, viajante!</p>
      
      <Input
        type="email"
        placeholder="Seu nome de aventureiro ou e-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        type="password"
        placeholder="Sua palavra secreta ou senha"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      
      <Button onClick={handleLoginClick}>
        Entrar na Masmorra
      </Button>

      <p className={styles.flavorText}>
        Que seus dados rolem 20.
      </p>
    </div>
  );
};

export default Login;