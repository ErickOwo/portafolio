import CardHabilities from '@components/CardHabilities';

//import images
import reactIcon from '@images/react-icon.png';
import frontendIcon from '@images/frontend.svg';
import servidorBases from '@images/servidor-bases-de-datos.png';

const Services = () => {
  return (
    <div className="flex flex-col items-center  gap-5">
      <div className="p-2 pt-8 w-max flex flex-col items-center border-b border-emerald-500">
        <h3 className="font-semibold text-lg">Servicios</h3>
        <span>¿Qué puedo hacer?</span>
      </div>
      <div className="flex justify-center flex-wrap p-4 font-Roboto gap-4 mx-[50px]">
        <CardHabilities
          image={reactIcon}
          hability="React JS Frontend"
          description="Construir interfaces de usuario para aplicaciones web escalables con React.js. Integrar React a una aplicación existente para mejorarla."
          widthImg='120px'
          heigthImg='120px'
          animate={{ rotate: 360 }}
          initial={{ rotate: 0 }}
          transition={{ repeat: Infinity, duration: 8, delay: 0.2, ease: 'linear' }}
        />
        <CardHabilities
          image={frontendIcon}
          hability="Vanilla JS Frontend"
          description="Páginas web de mediana y baja complejidad como Blogs, Portales Web y Sitios Estáticos. Consultas Integradas a APIs propias o de terceros."
          widthImg='190px'
          heigthImg='120px'
          animate={{ scale: [1.15, 1.05, 1.15] }}
          initial={{ scale: 1.15 }}
          transition={{ repeat: Infinity, duration: 2.4, delay: 0.2, ease: 'linear' }}
        />

        <CardHabilities
          image={servidorBases}
          hability="Servidor y Bases de Datos Backend"
          description="Modelo de Bases de datos para almacenar información modificable dinámicamente."
          widthImg='190px'
          heigthImg='120px'
          animate={{ scale: [1.05, 1.15, 1.05] }}
          initial={{ scale: 1.05 }}
          transition={{ repeat: Infinity, duration: 2.4, delay: 0.2, ease: 'linear' }}
        />
      </div>
    </div>
  )
}

export default Services