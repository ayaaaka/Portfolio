import React from 'react';
import Image from 'next/image';
import styles from '@/styles/Resume.module.scss';

const PersonalInfo = ({imageUrl}) => {
  return (
    <div className={`flex flex-col mt-10 ${styles.lefttitleContainer}`}>
      <div className={`w-36 h-36 relative ${styles.resumePicture}`}>
        <Image src={imageUrl} alt="Resume Picture" className={styles.resumePicture} width={150} height={150} />
      </div>
      <h2 className="mt-4 text-xl font-bold">Ayaka Kobayashi</h2>
      <p className="mt-2">フルスタックエンジニア</p>
      <p>1997 / 02 / 28</p>
      <p>東京都西東京市ひばりが丘</p>
      <p>elnr28br@gmail.com</p>
      <div className={styles.socialLinks}>
        <a
          href="https://x.com/roadstagineer"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="X account"
          className={styles.socialButton}
        >
          <svg
            className={styles.socialIcon}
            viewBox="0 0 24 24"
            aria-hidden="true"
            focusable="false"
          >
            <path
              fill="currentColor"
              d="M18.9 2H22l-6.78 7.75L23 22h-6.1l-4.8-6.28L6.6 22H3.5l7.26-8.3L1 2h6.25l4.34 5.73L18.9 2Zm-1.07 18.2h1.69L6.33 3.7H4.52L17.83 20.2Z"
            />
          </svg>
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=100004379650379"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook account"
          className={styles.socialButton}
        >
          <svg
            className={styles.socialIcon}
            viewBox="0 0 24 24"
            aria-hidden="true"
            focusable="false"
          >
            <path
              fill="currentColor"
              d="M13.5 21v-8.2h2.8l.42-3.2h-3.22V7.56c0-.93.27-1.56 1.62-1.56h1.73V3.14c-.3-.04-1.34-.14-2.54-.14-2.52 0-4.25 1.5-4.25 4.26v2.34H8v3.2h2.04V21h3.46Z"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default PersonalInfo;
