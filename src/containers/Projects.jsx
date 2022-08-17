import Project from '@components/Project'

import rmImg from '@images/R&M-Project.jpg';
import adminUAMImg from '@images/admin-uam-project.jpg';
import uamPageImg from '@images/uam-page.jpg';
import sportownPageImg from '@images/sportown-page.jpg'

const Projects = () => {
  return (
    <div className="flex flex-col items-center gap-5 mt-20">
      <div className="p-2 pt-8 w-max flex flex-col items-center border-b border-emerald-500">
        <h3 className="font-semibold text-xl">Proyectos</h3>
        <span>Algunos trabajos realizados</span>
      </div>
      <div className='flex flex-wrap lg:gap-x-32 lg:gap-y-12 gap-4 justify-center '>
        <Project 
          title='Rick And Morty Game App'
          description='Game App de Memoria creada con React, con interfaz de usuario basada en cookies para mejorar la experiencia de usuario.'
          deploySite='https://rick-and-morty-game-app.vercel.app/'
          githubCode='https://github.com/ErickOwo/Rick-and-Morty-Game'
          image={rmImg} />
        <Project 
          title='Admin UAM Project'
          description='Interfaz de administrador y página WEB empresarial; información modificable por base de datos con autenticaión de usuario.'
          deploySite='https://admin-uam.vercel.app/'
          githubCode='https://github.com/ErickOwo/admin-uam'
          image={adminUAMImg} />  
        <Project 
          title='UAM Page Project'
          description='Página empresarial dinámica adaptada a dispositivos mobiles, con información modificable.'
          deploySite='https://uam-page.vercel.app/'
          githubCode='https://github.com/ErickOwo/uam-page'
          image={uamPageImg} />   
        <Project 
          title='Sportown Page Project'
          description='Página comercial para un gimnasio. (En proceso de desarrollo).'
          deploySite='https://sportown-page.vercel.app/'
          githubCode='https://github.com/ErickOwo/sportown-page'
          image={sportownPageImg} />  
      </div>
    </div>
  )
}

export default Projects