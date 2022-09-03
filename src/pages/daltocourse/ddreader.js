import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const ddreader = () => {
  const [isUp, setIsUp] = useState({ color: '#000' });
  const [files, setFiles] = useState([]);
  const [textChargeBar, setTextChargeBar] = useState('Arrastre y suelte aquí un archivo');
  const [width, setWidth] = useState('0%');
  const [outlineColor, setOutlineColor] = useState('#000');

  const changeStyle = (color) => {
    setIsUp({ color });
  };

  const fileImg = (file, num) => {
    const fragment = [];
    for (let i = 0; i <= num; i++) {
      const reader = new FileReader();
      reader.readAsDataURL(file[i]);
      setWidth(`0%`);
      reader.addEventListener('progress', (e) => {
        let carga = Math.round((e.loaded / file[i].size) * 100);
        setTextChargeBar(`${carga}%`);
        setWidth(`${carga}%`);
      });
      reader.addEventListener('load', (e) => {
        setTextChargeBar('¡Completado!');
        // p.style.color = "rgb(8, 223, 8)";
        // zona.style.border = `solid 5px rgb(8, 223, 8)`;
        const url = URL.createObjectURL(file[i]);
        console.log(fragment);
        fragment.push({ url, type: 'img' });
        setFiles([...files, ...fragment]);
      });
    }
  };

  const fileVideo = (file, num) => {
    const fragment = [];
    for (let i = 0; i <= num; i++) {
      const reader = new FileReader();
      reader.readAsArrayBuffer(file[i]);
      reader.addEventListener('progress', (e) => {
        let carga = Math.round((e.loaded / file[i].size) * 100);
        setTextChargeBar(`${carga}%`);
        setWidth(`${carga}%`);
      });
      reader.addEventListener('load', (e) => {
        setTextChargeBar('¡Completado!');
        let video = new Blob([new Uint8Array(e.currentTarget.result)]);
        let url = URL.createObjectURL(video);
        fragment.push({ url, type: 'video' });
        if (file.length == i + 1) setFiles([...files, ...fragment]);
      });
    }
  };

  const fileTxt = (file, num) => {
    const fragment = [];
    for (let i = 0; i <= num; i++) {
      const reader = new FileReader();
      reader.readAsText(file[i]);
      reader.addEventListener('progress', (e) => {
        let carga = Math.round((e.loaded / file[i].size) * 100);
        setTextChargeBar(`${carga}%`);
        setWidth(`${carga}%`);
      });
      reader.addEventListener('load', (e) => {
        setTextChargeBar('¡Completado!');
        // p.style.color = "rgb(8, 223, 8)";
        // zona.style.border = `solid 5px rgb(8, 223, 8)`;
        fragment.push({ text: e.currentTarget.result, type: 'text' });
        if (file.length == i + 1) setFiles([...files, ...fragment]);
      });
    }
  };

  const chargeFile = (archivo) => {
    for (let i = 0; i < archivo.length; i++) {
      if (archivo[i].name.endsWith('.png') || archivo[i].name.endsWith('.jpg') || archivo[i].name.endsWith('.jpeg')) {
        if (i + 1 == archivo.length) fileImg(archivo, i);
      } else if (archivo[i].name.endsWith('.mp4')) {
        if (i + 1 == archivo.length) fileVideo(archivo, i);
      } else if (archivo[i].name.endsWith('.txt') || archivo[i].name.endsWith('.html') || archivo[i].name.endsWith('.css') || archivo[i].name.endsWith('.js') || archivo[i].name.endsWith('.jsx')) {
        if (i + 1 == archivo.length) fileTxt(archivo, i);
      } else setTextChargeBar('Archivo no Valido');
    }
  };

  return (
    <div
      className="bg-slate-800 w-full min-h-screen pt-10 flex flex-col"
      onDrop={(e) => {
        e.preventDefault();
      }}
    >
      <div
        className="mx-auto h-[160px] w-[620px] bg-white/30 lg:flex flex-col relative justify-center items-center hidden outline-dashed outline-4"
        style={isUp}
        onDragOver={(e) => {
          e.preventDefault();
          changeStyle('#444');
        }}
        onDragLeave={(e) => {
          e.preventDefault();
          changeStyle('#000');
        }}
        onDrop={(e) => {
          e.preventDefault();
          changeStyle('#000');
          chargeFile(e.dataTransfer.files);
        }}
      >
        <motion.div
          animate={{ width }}
          initial={{
            width: '0%',
          }}
          className="w-full h-full bg-green-500 absolute"
        ></motion.div>
        <div className="absolute text-xl font-semibold">
          <p>{textChargeBar}</p>
        </div>
      </div>
      <div className="flex flex-wrap justify-center my-10 mx-14 gap-8">
        {files.map((file, index) =>
          file.type == 'img' ? (
            <Image key={index} src={file.url} width="200px" height="300px" />
          ) : file.type == 'video' ? (
            <video autoPlay src={file.url} key={index} />
          ) : file.type == 'text' ? (
            <p className="max-h-[300px] overflow-auto w-[225px]">{file.text}</p>
          ) : null
        )}
      </div>
      <div className="lg:hidden flex w-full min-h-screen top-0 bg-black text-white fixed">
        <span className="m-auto text-center p-5">Para probar este contenido debe conectarse desde un ordenador</span>
      </div>
    </div>
  );
};

export default ddreader;
