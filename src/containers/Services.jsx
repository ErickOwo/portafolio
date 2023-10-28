import CardHabilities from '@components/CardHabilities';

//import images
import reactIcon from '@images/react-icon.png';
import frontendIcon from '@images/frontend.svg';
import servidorBases from '@images/servidor-bases-de-datos.png';

const Services = ({english}) => {
  return (
    <div className="flex flex-col items-center  gap-5">
      <div className="p-2 pt-8 w-max flex flex-col items-center border-b border-emerald-500">
        <h3 className="font-semibold text-xl">{english ? 'Services':'Servicios'}</h3>
        <span>{english ? 'What can I do?' :'¿Qué puedo hacer?'}</span>
      </div>
      <div className="flex justify-center flex-wrap p-4 font-Roboto gap-4 mx-[50px]">
        <CardHabilities
          image={reactIcon}
          hability="React JS Frontend"
          description={english ? 'Building user interfaces for scalable web applications with React.js. Integrating React into an existing application to enhance it.' : "Construir interfaces de usuario para aplicaciones web escalables con React.js. Integrar React a una aplicación existente para mejorarla."}
          widthImg='120px'
          heigthImg='120px'
          animate={{ rotate: 360 }}
          initial={{ rotate: 0 }}
          transition={{ repeat: Infinity, duration: 8, delay: 0.2, ease: 'linear' }}
        />
        <CardHabilities
          image={frontendIcon}
          hability="JS Frontend"
          description={english ? 'Websites of medium and low complexity such as Blogs, Web Portals, and Static Sites. Integrated queries to proprietary or third-party APIs.' :"Páginas web de mediana y baja complejidad como Blogs, Portales Web y Sitios Estáticos. Consultas Integradas a APIs propias o de terceros."}
          widthImg='190px'
          heigthImg='120px'
          animate={{ scale: [1.15, 1.05, 1.15] }}
          initial={{ scale: 1.15 }}
          transition={{ repeat: Infinity, duration: 2.4, delay: 0.2, ease: 'linear' }}
        />

        <CardHabilities
          image={servidorBases}
          hability={english ? 'Server and Backend Databases':"Servidor y Bases de Datos Backend"}
          description={english ? 'Database model for storing modifiable information.' : "Modelo de Bases de datos para almacenar información modificable."}
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