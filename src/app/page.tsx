import React from 'react';
import Link from 'next/link';
// import Navbar from './components/Navbar';

const HomePage = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <h1>Home Page</h1>
      <nav>
        <ul>
          <li>
            <Link href="/skill">Go to skill</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default HomePage;
