import React from 'react';
import styles from '../styles/Footer.module.scss';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.copyright}>
          © {currentYear} Ayaka Kobayashi. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer; 