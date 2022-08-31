import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai"

const Task = ({ id ,text, complete, completeTask, deleteTask})=>{
  return(
    <div className={`task-content w-full max-w-[500px] min-h-[65px] my-1 py-2 pl-[10px] pr-4 flex justify-between items-center rounded-md cursor-pointer border border-white break-all ${complete ? 'bg-[#5a01a7] line-through' : 'bg-[#1b1b32]'}`}>
      <div 
        className="w-full h-full text-[20px] flex items-center select-none ml-1"
        onClick={()=> completeTask(id, text, complete)}
      >
        {text}
      </div>
      <div 
        className="task-content-icons"
        onClick={()=> deleteTask(id)}
      >
        <AiOutlineCloseCircle className="text-[25px] m-1 ml-2" />
      </div>
    </div>
  );
};

export default Task;