import React from 'react';
import Link from 'next/link';
import styles from '../styles/Navbar.module.scss'

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link href="/">Profile</Link>
        </li>
        <li>
          <Link href="/resume">Resume</Link>
        </li>
        <li>
          <Link href="/skill">Skill</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
