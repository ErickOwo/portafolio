import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid"

const TaskForm = ({ onSubmit })=>{

  const [input, setInput] = useState("");
  const [cont, setCont] = useState(1);
  
  const sentHandler = e =>{
    e.preventDefault();
    const newTask = {
      id: uuidv4(),
      text: input,
      complete: false,
      cont
    };
    setCont(++cont);
    onSubmit(newTask);
  };

  const changeHandler = e =>{
    setInput(e.target.value);
  };
  
  return(
    <form 
      className="flex flex-wrap justify-center items-center mb-5"
      onSubmit={sentHandler}
    >
      <input 
        className="w-[350px] text-lg bg-white py-3 pr-8 pl-4 md:rounded-l-md border-2 border-[#00471b] outline-none text-black"
        type="text"
        placeholder="Escribe una tarea"
        name="text"
        onChange={changeHandler}
      />
      <button className="md:p-4 p-3 mt-4 md:mt-0 text-md font-Roboto md:rounded-r-md outline-none bg-[#00471b] text-white select-none flex flex-wrap">
        Agregar Tarea
      </button>
    </form>
  );
};

export default TaskForm;