import React from 'react';
import styles from './Home.module.css';
import Card from '../../components/Card/Card'; 
import herbIcon from '../../assets/herb-icon.png';
import caravanIcon from '../../assets/caravana-icon.png';
import cryptIcon from '../../assets/crypt-icon.png';

const Home = () => {
  const mockData = [
    { 
      id: 1, 
      title: "Coletar Ervas Raras", 
      description: "O boticário local precisa de 10 Flores da Lua. Recompensa: 50 PO.",
      image: herbIcon 
    },
    { 
      id: 2, 
      title: "Escolta de Caravana", 
      description: "Proteger uma caravana de mercadores até a cidade vizinha. Cuidado com goblins.",
      image: caravanIcon 
    },
    { 
      id: 3, 
      title: "Investigar a Cripta", 
      description: "Ruídos estranhos vêm da cripta abandonada. Descubra a fonte. (Contrato Urgente)",
      image: cryptIcon 
    }
  ];

  return (
    <div className={styles.homeContainer}>
      <h1 className={styles.welcomeTitle}>Mural de Missões</h1>
      <p className={styles.subtitle}>Aventuras disponíveis na Guilda:</p>
      
      <div className={styles.cardList}>
        {mockData.map((item) => (
          <Card
            key={item.id} 
            title={item.title}
            description={item.description}
            imageUrl={item.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;