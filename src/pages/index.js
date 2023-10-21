import Image from 'next/image';
import photo from '@images/photo3.jpg';

import Services from '@containers/Services';
import Qualities from '@containers/Qualities';
import Projects from '@containers/Projects';
import Practice from '@containers/Practice';

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-[#090F1F] text-[#ddd] pb-12">
      <div className="flex flex-col items-center p-12 pt-20 gap-2 font-Roboto border-b border-[#292F3F] shadow-[0_-35px_60px_15px_rgba(0,0,0,0.5)] mb-40">
        
        <div className="flex flex-col items-center mt-2 relative w-full">
          <div className="flex max-w-[260px] rounded-lg relative overflow-hidden shadow-[0_0_100px_2px_rgba(0,0,0,0.2)] filter  blur-[0.3px]">
            <Image src={photo} width="300px" height="520px" />
          </div>
          <div className='flex absolute flex-col w-full'>
              <span className="text-center text-[32px] self-start bg-black/20 md:py-3 md:px-5 rounded-lg
              ">FullStack WEB developer</span>
              <div className="m-0 p-0 font-semibold text-[50px] md:text-[70px] self-center mt-24 flex justify-between w-full md:w-[523px] bg-black/20 md:px-10 rounded-lg"> 
                <div className='drop-shadow-2xl '>E</div>
                <div className='drop-shadow-2xl '>R</div>
                <div className='drop-shadow-2xl '>I</div>
                <div className='drop-shadow-2xl '>C</div>
                <div className='drop-shadow-2xl '>K</div>
              </div>
          </div>
          <div className='md:pb-2 pt-8  md:px-4 md:text-justify'>Presentación: Soy un programador web full stack principiante con sólidas habilidades en inglés, tanto en fluidez como en conversación. Mi pasión por el desarrollo de proyectos web me impulsa a aprender rápidamente y a mejorar mis habilidades. Estoy emocionado por la oportunidad de colaborar en equipos profesionales.</div>
          
        </div>
      </div>
      <Services />
      <Qualities />
      <Projects />
      <Practice />
    </main>
  );
}
