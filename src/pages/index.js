import { useState } from 'react'
import { motion } from 'framer-motion';
import Image from 'next/image';

import photo from '@images/photo3.jpg';

import { FaBars, FaWhatsapp } from 'react-icons/fa'
import { AiOutlineMail } from "react-icons/ai";

import Services from '@containers/Services';
import Qualities from '@containers/Qualities';
import Projects from '@containers/Projects';
import Practice from '@containers/Practice';

export default function Home() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [mobileMenuAnimation, setMobileMenuAnimation] = useState(false);
  const [english, setEnglish] = useState(true);

  const variantsMobileMenu = {
    show: {
      opacity: 1,
      x:0,
      transition: {
        duration: .6,
      },
    },
    hidde: {
      opacity: 0.5,
      x: -280,

      transition: {
        ease: 'easeOut',
        duration: .6,
      },
      
    },
  };

  const openMobileMenu = () => {
    setMobileMenu(true);
    setMobileMenuAnimation(true);
  };

  const closeMobileMenu = () => {
    setMobileMenuAnimation(false);
    setTimeout(() => {
      setMobileMenu(false);
    }, 500);
  };

  return (
    <main className="w-full min-h-screen bg-[#090F1F] text-[#ddd] pb-12">
      <div className="flex flex-col items-center p-12 pt-20 gap-2 font-Roboto border-b border-[#292F3F] shadow-[0_-35px_60px_15px_rgba(0,0,0,0.5)] mb-40">
        <div className='fixed w-full flex justify-start md:justify-end  z-20 top-0 md:py-5 py-3 md:px-8 px-4'>
          <button className='bg-white/80 text-black py-2 px-3 rounded-md hidden md:flex' onClick={()=> setEnglish(!english)}>
            {
              english ? <p>English</p>
              : <p>Español</p>
            }
          </button>
          <button className='bg-black text-white py-3 px-3 text-3xl rounded-md md:hidden'
          onClick={()=> openMobileMenu()}  >
            <FaBars />
          </button>
        </div> 
        {
          //mobile menu 
          mobileMenu ? <motion.div
          initial={{ 
            opacity: 0.5,
            x: -280
           }}
          variants={variantsMobileMenu}
          animate={mobileMenuAnimation ? 'show' : 'hidde'} 
          className='fixed top-0 left-0 w-full min-h-screen bg-black z-40 text-xl'
           >
          <button 
            onClick={() => closeMobileMenu()}
            className='text-white flex lg:hidden mr-auto text-3xl absolute right-2 m-2 p-2' >
            <FaBars />
          </button>
          <ul className='text-white p-2 mt-[8px] flex flex-col gap-2'> 
              

            
            
            <div className='mt-8 text-lg ml-2 mr-4 text-blue-300/60'>
              {english?'Do you want to change the languaje?':'¿Quieres cambiar el idioma?'}
            </div>
            <button 
                  className='p-2 hover:bg-slate-400/30 text-left border-b border-slate-500 ml-2 mr-4'
                  onClick={()=> {
                    setEnglish(!english);
                    closeMobileMenu();
                  }}
                   >
                    {english?'Press me':'Presioname'}
                </button>
            <a 
              target='_blank'
              href='https://wa.me/50242261632' >
              <div className='p-2 hover:bg-slate-400/30 text-left ml-2 mr-4 flex items-center gap-1 mt-8' >
                <i>
                  <FaWhatsapp />
                </i>
                <i>
                  +502 42261632
                </i>
              </div>
            </a>
          </ul>  
        </motion.div> : null
        }
        <div className="flex flex-col items-center mt-2 relative w-full">
          <div className="flex max-w-[260px] rounded-lg relative overflow-hidden shadow-[0_0_100px_2px_rgba(0,0,0,0.2)] filter  blur-[0.3px]">
            <Image src={photo} width="300px" height="520px" />
          </div>
          <div className='flex absolute flex-col w-full'>
              <motion.span 
                animate={{
                  y: [-30, 0],
                  opacity: [0, 1],
                }}
                transition={{
                  duration: 1,
                  delay: .5,
                }}
               
              className="text-center text-[32px] self-start bg-black/20 md:py-3 md:px-5 rounded-lg hidden md:flex
              ">FullStack WEB Developer</motion.span>
              <motion.div 
              animate={{
                  y: [-30, 0],
                  opacity: [0, 1],
                }}
                transition={{
                  duration: 1,
                  delay: .5,
                }}
              className="m-0 p-0 font-semibold text-[50px] md:text-[70px] self-center mt-24 justify-between w-full md:w-[523px] bg-black/20 md:px-10 rounded-lg hidden md:flex"> 
                <div className='drop-shadow-2xl '>E</div>
                <div className='drop-shadow-2xl '>R</div>
                <div className='drop-shadow-2xl '>I</div>
                <div className='drop-shadow-2xl '>C</div>
                <div className='drop-shadow-2xl '>K</div>
              </motion.div>
          </div>
          <div className="flex flex-col items-center mt-2 md:hidden">   
            <div className="text-center text-[20px] md:text-[25px] font-semibold mt-4">Erick Rodríguez</div> 
            <div className="text-center text-[20px] md:text-[25px] font-semibold">FullStack WEB Developer</div>
          </div>
          <div className="flex flex-col w-full items-start mt-4 gap-2 md:px-4">
            <h4 className='font-semibold'>{english?'Contact Info.': 'Contacto.'}</h4>
            <div className='flex flex-col md:flex-row gap-2 '>
              <p className='flex items-center gap-2'> 
                {
                  english ? 'Phone: ' : 'Teléfono: '
                }
              </p>
              <span className='flex items-center gap-2'>
                <i className='text-xl'>
                  <FaWhatsapp />
                </i>
                <a 
                  target='_blank'
                  href='https://wa.me/50242261632' >
                  <div className='hover:underline'>+502 42261632</div>
                </a>
              </span>
            </div>
            <div className='flex flex-col md:flex-row gap-2 '>
              <p className='flex items-center gap-2'> 
                {
                  english ? 'Email: ' : 'Correo electrónico: '
                }
              </p>
              <span className='flex items-center gap-2'>
                <i className='text-xl'>
                  <AiOutlineMail />
                </i>
                <a 
                  target='_blank'
                  href='mailto:e12antonio@gmail.com' >  
                  <div className='hover:underline'>e12antonio@gmail.com</div>
                </a>
              </span>
            </div>
          </div>
        
          <div className='md:pb-2 pt-8  md:px-4 flex gap-2 flex-col'>
            <h4 className='font-semibold'>{
              english ? 'About Me.' : 'Sobre Mí.'
            }</h4>
            <p className='md:text-justify'>{
            english ? 'I am a beginner full-stack web developer with strong English skills, both in fluency and conversation. My passion for web project development drives me to learn quickly and enhance my abilities. I am excited about the opportunity to collaborate in professional teams.' : 'Soy un programador web full stack principiante con sólidas habilidades en inglés, tanto en fluidez como en conversación. Mi pasión por el desarrollo de proyectos web me impulsa a aprender rápidamente y a mejorar mis habilidades. Estoy emocionado por la oportunidad de colaborar en equipos profesionales.'
            }</p>
          </div>
          
        </div>
      </div>
      <Services english={english} />
      <Qualities english={english} />
      <Projects english={english} />
      <Practice english={english} />
    </main>
  );
}
