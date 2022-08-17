import Image from 'next/image';

import githubIcon from '@images/github-icon.svg'
import deployIcon from '@images/deploy-icon.svg'

const Project = ({image, title, description, deploySite, githubCode}) => {
  return (
    <div className='p-4 border border-emerald-500 md:w-[450px] w-full rounded-lg flex'>
      <div className='w-5/12 my-12'>
        <a 
          href={deploySite}
          target='_blank' >
            <Image src={image} width='290px' height='540px'/>
        </a>  
      </div>
      <div className='py-3 px-5 w-full flex flex-col justify-between'>
        <div className='font-Roboto flex flex-col h-full'>
          <h2 className='md:text-2xl text-lg font-semibold text-gray-700 text-center'>{ title }</h2>
          <p className='text-center py-4 h-full flex items-center text-gray-800 md:text-lg'>{ description }</p>
        </div>
        <div>
          <div className='flex gap-5 md:gap-8 justify-center'>
            <a 
              href={deploySite}
              target='_blank' >
              <button>
                <Image src={deployIcon} width='35px' height='35px'/>
              </button>
            </a>
            <a 
              href={githubCode}
              target='_blank' >
              <button>
                <Image src={githubIcon} width='35px' height='35px'/>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project