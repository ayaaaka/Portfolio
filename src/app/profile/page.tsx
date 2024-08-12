import React from 'react';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Styles from '@/styles/Profile.module.scss'
import { HobbyCard } from '@/components/ui/HobbyCard';
import { faGamepad, faFilm, faMusic, faTableTennis, faPersonSnowboarding, faCarCrash } from '@fortawesome/free-solid-svg-icons';

const ProfilePage = () => {
  return (
    <div className="container mx-auto p-4 space-y-14">
      <Navbar />
      <div className="relative">
        <Image
          src="/img/profile/fire-flower.png"
          alt="Profile Picture"
          layout="responsive"
          width={1920}
          height={1080}
          className="w-full object-cover"
        />
        <div className="absolute inset-0 flex justify-center items-center">
          <h1 className={Styles.profileTitile}>{`Welcome to Ayaka's Portfolio`}</h1>
        </div>
      </div>

      <section className="my-8 pb-20">
        <h2 className="text-2xl font-semibold mb-4">Hobbies</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <HobbyCard title="Gaming" icon={faGamepad} description={<ul>
            <li>switch</li>
            <li>PS2</li>
            <li>PS4</li>
          </ul>}/>
          <HobbyCard title="Movies" icon={faFilm} description="Watching movies across different genres." />
          <HobbyCard title="Music" icon={faMusic} description="Listening to and exploring new music." />
          <HobbyCard title="Tennis" icon={faTableTennis} description="Playing and enjoying tennis." />
          <HobbyCard title="Snowboarding" icon={faPersonSnowboarding} description="Snowboarding during winter seasons." />
          <HobbyCard title="Motorsports" icon={faCarCrash} description="Following and enjoying motorsports events." />
        </div>
      </section>
    </div>
  );
}

export default ProfilePage;
