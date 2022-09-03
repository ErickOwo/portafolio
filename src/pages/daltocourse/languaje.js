import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import jsCookie from 'js-cookie';

const Languaje = () => {
  const [appear, setAppear] = useState(true);
  const [languaje, setLanguaje] = useState(true);
  const [closeModal, setCloseModal] = useState(true);

  useEffect(() => {
    if (jsCookie.get('lang-page')) setLanguaje(jsCookie.get('lang-page'));
    else setLanguaje(null);
  }, []);

  const variants = {
    open: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.7,
      },
    },
    close: {
      scale: 0.6,
      opacity: 0.2,
      transition: {
        duration: 0.4,
      },
    },
  };

  const handleClic = (lang) => {
    setAppear(false);
    setTimeout(() => {
      jsCookie.set('lang-page', lang, { expires: 30 });
      setLanguaje(lang);
      setCloseModal(true);
    }, 370);
  };

  const changeLanguaje = () => {
    setCloseModal(false);
    setAppear(true);
  };

  return (
    <div className="w-full min-h-screen bg-black pt-8 md:px-28 px-4">
      {!languaje || !closeModal ? (
        <motion.div className="bg-black/80 w-full min-h-screen h-screen fixed flex top-0 left-0">
          <motion.div initial="close" variants={variants} animate={appear ? 'open' : 'close'} className="m-auto mt-32 bg-white w-full max-w-[600px] h-[160px] flex flex-col">
            <h3 className="text-xl w-full text-center mb-4 mt-8">¿En qué idioma desea visualizar la página?</h3>
            <div className="p-5 flex gap-8 justify-center">
              <button className="bg-slate-200/90 w-24 hover:bg-slate-400/80" type="button" value="es" onClick={(e) => handleClic('es')}>
                Español
              </button>
              <button className="bg-slate-200/90 w-24 hover:bg-slate-400/80" type="button" value="en" onClick={(e) => handleClic('en')}>
                Ingles
              </button>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
      <div className="max-w-full min-h-[300px] mb-10 border border-l-2 border-stone-800 border-l-white text-white md:p-8 p-2">
        {languaje == 'es' ? (
          <div className="flex flex-col gap-5 lg:gap-2">
            <h3 className="text-xl">Has escogido visualizar la página en Español</h3>
            <p>Bienvenido a la página. Esta es una muestra de como puedes visualizar la página en distintos idiomas atravez de código.</p>
          </div>
        ) : languaje == 'en' ? (
          <div className="flex flex-col gap-5 lg:gap-2">
            <h3 className="text-xl">You have been choose the english language to the page</h3>
            <p>Welcome. This is a show of how you can see a page in differents types of languages with code.</p>
          </div>
        ) : null}
      </div>
      <button type="button" className="bg-white px-4 py-2" onClick={() => changeLanguaje()}>
        Volver a escoger idioma
      </button>
    </div>
  );
};

export default Languaje;
