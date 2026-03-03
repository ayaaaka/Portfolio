import React from 'react';
import Link from 'next/link';
import styles from '../styles/Navbar.module.scss'

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link href="/aboutme">About Me</Link>
        </li>
        <li>
          <Link href="/">Resume</Link>
        </li>
        <li>
          <Link href="/skill">Skill</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
