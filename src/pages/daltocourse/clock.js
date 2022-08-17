import { useState, useEffect } from 'react';

const Clock = () => {
  const [hour, setHour] = useState('00');
  const [min, setMin] = useState('00');
  const [sec, setSec] = useState('00');

  const [day, setDay] = useState(null);
  const [date, setDate] = useState(null);
  const [month, setMonth] = useState(null);
  const [year, setYear] = useState(null);

  const addZeros = (n) => {
    if (n.toString().length < 2) return '0'.concat(n);
    return n;
  };

  const valueDay = (d) => {
    if (d == 0) return 'Domingo';
    if (d == 1) return 'Lunes';
    if (d == 2) return 'Martes';
    if (d == 3) return 'Miercoles';
    if (d == 4) return 'Jueves';
    if (d == 5) return 'Viernes';
    if (d == 6) return 'Sábado';
  };

  const valueMonth = (m) => {
    if (m == 0) return 'Enero';
    if (m == 1) return 'Febrero';
    if (m == 2) return 'Marzo';
    if (m == 3) return 'Abril';
    if (m == 4) return 'Mayo';
    if (m == 5) return 'Junio';
    if (m == 6) return 'Julio';
    if (m == 7) return 'Agosto';
    if (m == 8) return 'Septiembre';
    if (m == 9) return 'Octubre';
    if (m == 10) return 'Noviembre';
    if (m == 11) return 'Diciembre';
  };

  useEffect(() => {
    const interval = setInterval(() => {
      relojTime();
      actualtime();
    }, 1000);

    return () => clearInterval(interval);
  });

  const relojTime = () => {
    const time = new Date();

    const hourVar = addZeros(time.getHours());
    const minVar = addZeros(time.getMinutes());
    const secVar = addZeros(time.getSeconds());

    setHour(hourVar);
    setMin(minVar);
    setSec(secVar);
  };

  const actualtime = () => {
    const fecha = new Date();

    const dayVar = valueDay(fecha.getDay());
    const dateVar = fecha.getDate();
    const monthVar = valueMonth(fecha.getMonth());
    const yearVar = fecha.getYear() + 1900;

    setDay(dayVar + ',');
    setDate(dateVar + ' de ');
    setMonth(monthVar + ' de ');
    setYear(yearVar);
  };
  return (
    <div className="w-full max-w-none h-screen bg-[url('https://www.xtrafondos.com/wallpapers/rick-and-morty-en-nave-4518.jpg')] bg-cover bg-center ">
      <div className="bg-stone-800/60 flex flex-col items-center justify-center h-[78%]">
        <div className="m-2 bg-stone-300/20 select-none flex text-[45px] md:text-[140px] text-[monospace] text-slate-100 font-mono rounded-3xl border-2 border-white">
          <div className="md:py-5 md:px-9 py-3 px-5 border-white border-r-2">{hour}</div>
          <div className="md:py-5 md:px-9 py-3 px-5 ">{min}</div>
          <div className="md:py-5 md:px-9 py-3 px-5 border-white border-l-2">{sec}</div>
        </div>
        <div className="flex text-slate-100 md:text-lg mt-4">
          <div className="day">{`${day} ${date} ${month} ${year}`}</div>
        </div>
      </div>
    </div>
  );
};

export default Clock;
