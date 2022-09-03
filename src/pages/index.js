import Image from 'next/image';
import photo from '@images/photo3.jpg';

import Services from '@containers/Services';
import Qualities from '@containers/Qualities';
import Projects from '@containers/Projects';
import Practice from '@containers/Practice';

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-slate-200 pb-12">
      <div className="flex flex-col items-center p-12 pt-20 gap-2 font-Roboto border-b border-slate-500 shadow-[0_-35px_60px_15px_rgba(0,0,0,0.5)] mb-40">
        <div className="flex max-w-[200px] rounded-lg relative overflow-hidden shadow-[0_0_100px_2px_rgba(0,0,0,0.2)]">
          <Image src={photo} width="300px" height="520px" />
        </div>
        <div className="flex flex-col items-center mt-2">
          <h2 className="m-0 p-0 font-semibold text-xl text-center">Erick Antonio Rodríguez Son</h2>
          <span className="text-center">Desarrollador WEB FullStack</span>
        </div>
      </div>
      <Services />
      <Qualities />
      <Projects />
      <Practice />
    </main>
  );
}
