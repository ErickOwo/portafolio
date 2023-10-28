import Project from '@components/Project'

import rmImg from '@images/R&M-Project.jpg';
import adminUAMImg from '@images/admin-uam-project.jpg';
import uamPageImg from '@images/uam-page.jpg';
import sportownPageImg from '@images/sportown-page.jpg'
import streamPlayImg from '@images/stream-play.jpg'

const Projects = ({english}) => {
  return (
    <div className="flex flex-col items-center gap-5 mt-20">
      <div className="p-2 pt-8 w-max flex flex-col items-center border-b border-emerald-500">
        <h3 className="font-semibold text-xl">{english?'Projects':'Proyectos'}</h3>
        <span>{english?'Some projects realized':'Algunos trabajos realizados'}</span>
      </div>
      <div className='flex flex-wrap lg:gap-x-32 lg:gap-y-12 gap-4 justify-center '>
        <Project 
          title={english?'Rick And Morty Game App':'App de Juego de Rick y Morty'}
          description={english?'Memory Game App created with React, featuring a cookie-based user interface to enhance the user experience.':'Game App de Memoria creada con React, con interfaz basada en cookies para mejorar la experiencia de usuario.'}
          deploySite='https://rick-and-morty-game-app.vercel.app/'
          githubCode='https://github.com/ErickOwo/Rick-and-Morty-Game'
          image={rmImg} />
        <Project 
          title={english?'Admin UAM Project':'Proyecto Administrativo UAM'}
          description={english?'Administrator interface and corporate website; information editable through a database with user authentication.':'Interfaz de administrador y página WEB empresarial; información modificable por base de datos con autenticaión de usuario.'}
          deploySite='https://admin-uam.vercel.app/'
          githubCode='https://github.com/ErickOwo/admin-uam'
          image={adminUAMImg} />  
        <Project 
          title={english?'UAM Page Project':'Página UAM'}
          description={english?'Dynamic business page adapted for mobile devices, with editable information.':'Página empresarial dinámica adaptada a dispositivos mobiles, con información modificable.'}
          deploySite='https://uam-page.vercel.app/'
          githubCode='https://github.com/ErickOwo/uam-page'
          image={uamPageImg} />   
        <Project 
          title={english?'Sportown Page Project':'Página Sportown'}
          description={english?'Commercial page for a gym. (In the development process).':'Página comercial para un gimnasio. (En proceso de desarrollo).'}
          deploySite='https://sportown-page.vercel.app/'
          githubCode='https://github.com/ErickOwo/sportown-page'
          image={sportownPageImg} />  
        <Project 
          title={english?'Stream Play Project':'Proyecto Stream Play'}
          description={english?'"Platform for selling streaming platforms and soon, other products.':'Plataforma de venta de plataformas de streaming y próximamente otros productos.'}
          deploySite='https://stream-play.vercel.app/'
          githubCode='https://github.com/ErickOwo/stream-play'
          image={streamPlayImg} /> 
      </div>
    </div>
  )
}

export default Projects