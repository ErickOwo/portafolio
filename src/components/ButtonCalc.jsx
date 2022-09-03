import React from "react";

const ButtonCalc = ({ children, eventHandler })=>{
  const isOperator = valor =>{
    return /[\d\.\=]/.test(valor);
  };

  return(
    <button
      type="button"
      className={`md:h-[83px] h-[78px] select-none md:text-[32px] text-[28px] font-bold text-white w-full flex justify-center items-center rounded-[25px] border-2 border-white ${!isOperator(children) ? "bg-[#00471b] hover:bg-[#ff6600]" : "bg-[#1b1b32] hover:bg-[#5a01a7]"}`.trim()} 
      onClick={()=>eventHandler(children)}>
      {children}
    </button>
  );
};

export default ButtonCalc;