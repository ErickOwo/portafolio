import React from "react";

const ButtonClear = ({ children, eventHandler })=>{
  return(
    <button 
      type="button"
      className="w-full md:h-[80px] h-[76px] md:text-[1.6 em] text-[28px] flex justify-center items-center bg-[#ac0246] mt-2 font-bold text-white border-2 border-white select-none rounded-[25px]"
    onClick={eventHandler}>
      {children}
    </button>
  );
};

export default ButtonClear;