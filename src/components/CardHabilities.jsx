import Image from "next/image";
import { motion } from 'framer-motion'

const CardHabilities = ({hability, description, image, animate=null, initial=null, transition=null}) => {
  return (
    <motion.div 
       className='p-4 border border-emerald-500 flex flex-col gap-1 items-center w-[300px] rounded-xl transition-transform transform hover:scale-110 bg-stone-900 text-slate-300'
      >
      <motion.div 
      className="h-[200px] flex justify-center items-center "
      animate={animate}
      initial={initial}
      transition={transition} 
      >
        <Image src={image} width='120px' height='120px' />
      </motion.div>
      <h4 className="text-lg font-semibold">{ hability }</h4>
      <p className="mt-2">{ description }</p>
    </motion.div>
  )
}

export default CardHabilities