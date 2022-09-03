import { useState, useEffect } from 'react';
import Image from 'next/image';

import img1 from '@images/texture1.jpg';
import img2 from '@images/texture2.jpg';
import img3 from '@images/texture3.jpg';
import img4 from '@images/texture4.jpg';

const Textures = () => {
  const [arrayImages, setArrayImages] = useState([img1, img2, img3, img4]);
  const [data, setData] = useState(null);
  const [over, setOver] = useState(false);

  const handleDrag = (e, num) => {
    e.dataTransfer.setData('background', num);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const image = e.dataTransfer.getData('background');
    if (image != '' && image) {
      setData(image);
      setOver(null);
    }
  };

  return (
    <div className="w-full min-h-screen">
      <div className="px-3 py-6 bg-gradient-to-r from-slate-400 via-slate-50 to-slate-600">
        <h3 className="font-Roboto text-xl font-semibold tracking-[3px]">Texturizador</h3>
      </div>
      <div className="flex flex-wrap p-5 bg-slate-100 gap-4">
        <div onDragStart={(e) => handleDrag(e, 0)} className="w-[225px] h-[135px]">
          <Image src={img1} width={'725px'} height={'435px'} />
        </div>
        <div onDragStart={(e) => handleDrag(e, 1)} className="w-[225px] h-[135px]">
          <Image src={img2} width={'725px'} height={'435px'} />
        </div>
        <div onDragStart={(e) => handleDrag(e, 2)} className="w-[225px] h-[135px]">
          <Image src={img3} width={'725px'} height={'435px'} />
        </div>
        <div onDragStart={(e) => handleDrag(e, 3)} className="w-[225px] h-[135px]">
          <Image src={img4} width={'725px'} height={'435px'} />
        </div>
      </div>
      <div
        className="m-auto my-8 w-full max-w-[550px] h-[300px] flex"
        style={over ? { border: '4px dashed #333', color: '#333', backgroundColor: '#748398' } : over == false ? { border: '4px dashed #000', color: '#000', backgroundColor: '#94A3B8' } : null}
        onDrop={(e) => handleDrop(e)}
        onDragOver={(e) => e.preventDefault()}
        onDragEnter={() => {
          if (over != null) setOver(true);
        }}
        onDragLeave={() => {
          if (over != null) setOver(false);
        }}
      >
        {data ? <Image src={arrayImages[data]} width="550px" height="300px" /> : <p className="m-auto font-semibold text-xl tracking-[2px]">Arrastre aquí</p>}
      </div>
      <div className="lg:hidden flex w-full min-h-screen top-0 bg-black text-white fixed">
        <span className="m-auto text-center p-5">Para probar este contenido debe conectarse desde un ordenador</span>
      </div>
    </div>
  );
};

export default Textures;
