import Project from '@components/Project'
import clockImg from '@images/clock-practice.jpg';
import ddreader from '@images/ddreader.png';
import tasks from '@images/tasks-practice.jpg';
import langImg from '@images/languaje-practice.jpg';
import texturesImg from '@images/textures-practice.png';
import drawer from '@images/drawer.png';
import calculatorImg from '@images/calculator-practice.jpg';
import storeImage from '@images/store.jpg'

const Practice = ({english}) => {
  return (
    <div className="flex flex-col items-center gap-5 mt-20">
      <div className="p-2 pt-8 flex flex-col items-center border-b border-emerald-500">
        <h3 className="font-semibold text-xl">{english?'Practices':'Practicas'}</h3>
        <span className='text-center'>{english?'Practices carried out in various courses and improved.':'Practicas realizadas en distintos cursos y mejorados.'}</span>
      </div>
      <div className='flex flex-wrap lg:gap-x-32 lg:gap-y-12 gap-4 justify-center '>
        <Project 
          title={english?'Clock':'Reloj'}
          description={english?'Creating a Clock with Javascript and CSS.':'Creando un Reloj con Javascript y CSS.'}
          deploySite='/daltocourse/clock'
          githubCode='https://github.com/ErickOwo/Curso-Javascript-Dalto/tree/main/Capitulo%2015'
          image={clockImg}
          practice={true} />
        <Project 
          title={english?'Drag and drop with file reader.':'Arrastre y soltado con lector de archivos'}
          description={english?'Reading files from the computer to be displayed on the page.':'Lectura de archivos desde el ordenador para ser leido en la página.'}
          deploySite='/daltocourse/ddreader'
          githubCode='https://github.com/ErickOwo/Curso-Javascript-Dalto/tree/main/Capitulo%2015'
          image={ddreader}
          practice={true}
          landscape={true} />    
        <Project 
          title={english?'Task List':'Lista de Tareas'}
          description='Task organizer with indexed database.'
          deploySite='/freecodecampcourse/tasks'
          githubCode='https://github.com/ErickOwo/React-Practice'
          image={tasks}
          practice={true} />      
        <Project 
          title={english?'Multilingual page':'Página en idiomas'}
          description={english?"Language switching on the page with code. Page information is stored in cookies to save the user's language preference.":'Intercambio de idioma de la página con código. La información de la página se guarda en cookies para guardar la información de preferencia de idioma del usuario.'}
          deploySite='/daltocourse/languaje'
          githubCode='https://github.com/ErickOwo/Curso-Javascript-Dalto/tree/main/Capitulo%2015'
          image={langImg}
          practice={true} />  
        <Project 
          title={english?'Dynamic Texture Renderer':'Texturizador Dinámico'}
          description={english?'Dynamic texture dragging to paint the dragged block area.':'Arrastre dinamico de texturas para pintar la zona de bloque de la misma que se arrastra.'}
          deploySite='/daltocourse/textures'
          githubCode='https://github.com/ErickOwo/Curso-Javascript-Dalto/tree/main/Capitulo%2015'
          image={texturesImg}
          practice={true}
          landscape={true} />    
        <Project 
          title={english?'Paint':'Pintar'}
          description={english?'Drawing area imitating the Paint program on a web page.':'Zona de dibujo imitando el programa de paint en una página web.'}
          deploySite='/daltocourse/drawer'
          githubCode='https://github.com/ErickOwo/Curso-Javascript-Dalto/tree/main/Capitulo%2015'
          image={drawer}
          practice={true}
          landscape={true} />    
        <Project 
          title={english?'Calculator':'Calculadora'}
          description={english?'Simple calculator for basic operations.':'Calculadora sencilla para operaciones básicas.'}
          deploySite='/freecodecampcourse/calculator'
          githubCode='https://github.com/ErickOwo/React-Practice'
          image={calculatorImg}
          practice={true} />  
        <Project 
          title={english?'Online Store':'Tienda Virtual'}
          description={english?'Creation of a web app for shopping, built using React and Next.js.':'Creación de app WEB para compras trabajando con React y Next JS.'}
          deploySite='https://nextcoursemodified.vercel.app/'
          githubCode='https://github.com/ErickOwo/nextcourse'
          image={storeImage}
          practice={true} />   
      </div>
    </div>
  )
}

export default Practice