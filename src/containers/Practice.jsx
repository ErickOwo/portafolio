import Project from '@components/Project'
import rmImg from '@images/R&M-Project.jpg';

const Practice = () => {
  return (
    <div className="flex flex-col items-center gap-5 mt-20">
      <div className="p-2 pt-8 w-max flex flex-col items-center border-b border-emerald-500">
        <h3 className="font-semibold text-xl">Practicas</h3>
        <span>Practicas realizadas a lo largo del aprendizaje de las mismas.</span>
      </div>
      <div className='flex flex-wrap lg:gap-x-32 lg:gap-y-12 gap-4 justify-center '>
      <Project 
          title='Reloj'
          description='Creando un Reloj con Javascript y css.'
          deploySite='/daltocourse/clock'
          githubCode='https://github.com/ErickOwo/Curso-Javascript-Dalto/tree/main/Capitulo%2015'
          image={rmImg}
          practice={true} />
      </div>
    </div>
  )
}

export default Practice