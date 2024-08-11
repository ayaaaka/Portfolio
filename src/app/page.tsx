import React from 'react';
import Navbar from '@/components/Navbar';
import Image from 'next/image';
import { HobbyCard } from '../components/ui/HobbyCard';
import { faGamepad, faFilm, faMusic, faTableTennis, faPersonSnowboarding, faCarCrash } from '@fortawesome/free-solid-svg-icons';
import './globals.css';


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
          <h1 className="profile-titile">{`Welcome to Ayaka's Portfolio`}</h1>
        </div>
      </div>

      <section className="my-8">
        <h2 className="text-2xl font-semibold mb-4">Hobbies</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <HobbyCard title="Gaming" icon={faGamepad} />
          <HobbyCard title="Movies" icon={faFilm} />
          <HobbyCard title="Music" icon={faMusic} />
          <HobbyCard title="Tennis" icon={faTableTennis} />
          <HobbyCard title="SnowBoad" icon={faPersonSnowboarding} />
          <HobbyCard title="MoterSports" icon={faCarCrash} />
        </div>
      </section>
    </div>
  );
}

export default ProfilePage;
