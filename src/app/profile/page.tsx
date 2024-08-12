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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <HobbyCard title="Gaming" icon={faGamepad} description={
          <ul>
            <li>Switch &lt; ゼルダ, スプラ</li>
            <li>PS2 &lt; ぼくなつ</li>
            <li>PS4 &lt; Horizon, MHW, トリコ</li>
            <li>Oculus quest 2</li>
            <li>PC &lt; Valheim, APEX, MHR</li>
          </ul>}/>
          <HobbyCard title="Movies" icon={faFilm} description={<>
            <span>click! &gt; </span>
            <a href='https://filmarks.com/users/elnr' target='_blank'>filmarks</a>
          </>} />
          <HobbyCard title="Music" icon={faMusic} description={<ul>
            <li>Avicii</li>
            <li>marshmello</li>
            <li>alan walker</li>
            <li>grace vanderwaal</li>
          </ul>}/>
          <HobbyCard title="Tennis" icon={faTableTennis} description="軟式 & 硬式 at 潮見" />
          <HobbyCard title="Snowboarding" icon={faPersonSnowboarding} description={<>
            <span>click! &gt; </span>
            <a href='https://app-api.yukiyama.biz/app/user?id=Z8brqD3DjGR' target='_blank'>yukiyama</a>
          </>} />
          <HobbyCard title="Motorsports" icon={faCarCrash} description="NB Roadster Turbo 6MT (大学時代)" />
        </div>
      </section>
    </div>
  );
}

export default ProfilePage;
