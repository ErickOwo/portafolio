import React from "react";

const Pantalla = ({input})=> {
  return(
    <div className="h-[75px] w-full bg-[#0a0a23] rounded-[50px] shadow-[-1px_4px_1px_1px_rgba(255,255,255,1)] mb-5 flex justify-end items-center font-bold text-[30px] text-white p-3 pr-[30px] border border-[#888] overflow-hidden">
      {input}
    </div>
  );
};

export default Pantalla;