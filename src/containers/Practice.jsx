import Project from '@components/Project'
import clockImg from '@images/clock-practice.jpg';
import ddreader from '@images/ddreader.png';
import tasks from '@images/tasks-practice.jpg';
import langImg from '@images/languaje-practice.jpg'

const Practice = () => {
  return (
    <div className="flex flex-col items-center gap-5 mt-20">
      <div className="p-2 pt-8 flex flex-col items-center border-b border-emerald-500">
        <h3 className="font-semibold text-xl">Practicas</h3>
        <span className='text-center'>Practicas realizadas a lo largo del aprendizaje de las mismas.</span>
      </div>
      <div className='flex flex-wrap lg:gap-x-32 lg:gap-y-12 gap-4 justify-center '>
      <Project 
          title='Reloj'
          description='Creando un Reloj con Javascript y CSS.'
          deploySite='/daltocourse/clock'
          githubCode='https://github.com/ErickOwo/Curso-Javascript-Dalto/tree/main/Capitulo%2015'
          image={clockImg}
          practice={true} />
      <Project 
          title='Drag and Drop File Reader'
          description='Lectura de archivos de arrastre y soltado.'
          deploySite='/daltocourse/ddreader'
          githubCode='https://github.com/ErickOwo/Curso-Javascript-Dalto/tree/main/Capitulo%2015'
          image={ddreader}
          practice={true}
          landscape={true} />    
      <Project 
          title='Lista de Tareas'
          description='Organizador de tareas con base de datos indexada.'
          deploySite='/freecodecampcourse/tasks'
          githubCode='https://github.com/ErickOwo/React-Practice'
          image={tasks}
          practice={true} />      
      <Project 
          title='Página en idiomas'
          description='Intercambio de idioma en la página con código. La información de la página se guarda en cookies para guardar la información de preferencia de idioma del usuario.'
          deploySite='/daltocourse/languaje'
          githubCode='https://github.com/ErickOwo/Curso-Javascript-Dalto/tree/main/Capitulo%2015'
          image={langImg}
          practice={true} />      
      </div>
    </div>
  )
}

export default Practice