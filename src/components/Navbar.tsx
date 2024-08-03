import React from 'react';
import Link from 'next/link';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Home</Link>
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
