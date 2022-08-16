import Image from "next/image"

const CardQuality = ({image, description, tailwind=false, motion=false}) => {
  return (
    <div 
      className="flex flex-col items-center border border-emerald-500 p-1 rounded-lg w-[110px] transition-transform transform hover:-translate-y-3 shadow-[0_0_100px_2px_rgba(0,0,0,0.1)]" >
      <div className="h-[90px] flex items-center p-3">
        <Image src={image} width='100%' height='100%' />
      </div>
      <p className="text-center">{description}</p>
    </div>
  )
}

export default CardQuality