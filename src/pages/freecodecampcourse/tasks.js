import React, { useState } from 'react';
import Task from '@components/Task';
import TaskForm from '@components/FormTask';
import Dexie from 'dexie';

const ContainerTasks = () => {
  const [tasks, setTasks] = useState([]);

  // const db = new Dexie("dataBase");

  // db.version(1).stores({
  //   tasks: "id, text, complete, cont"
  // });

  // db.open().catch(e => console.log(e));

  // IDBrequest.addEventListener("upgradeneeded",()=>{
  //   const db = IDBrequest.result;
  //   db.createObjectStore("tasks",{
  //     autoIncrement: true
  //   })
  // });

  // IDBrequest.addEventListener("success",()=>{
  //   // readObjects();
  // });

  // IDBrequest.addEventListener("error",(e)=>{
  //   console.log(e);
  // });

  const addTask = (taskAdded) => {
    taskAdded.text = taskAdded.text.trim();

    if (taskAdded.text) {
      const actualizedTasks = [taskAdded, ...tasks];
      setTasks(actualizedTasks);
    }
  };

  const deleteTask = (id) => {
    const actualizedTasks = tasks.filter((task) => task.id !== id);
    setTasks(actualizedTasks);
  };

  const completeTask = (id) => {
    const actualizedTasks = tasks.map((task) => {
      if (task.id === id) {
        task.complete = !task.complete;
      }
      return task;
    });
    setTasks(actualizedTasks);
  };

  return (
    <div className="w-full min-h-screen bg-[#1b1b32] text-white font-lato pt-[40px] px-2 pb-2">
      <div className="lg:m-auto w-full max-w-[600px] min-h-[500px] bg-[#d0d0d5] p-6 rounded-xl">
        <h2 className="text-[#1b1b32] font-Roboto text-2xl text-center my-5">Mis Tareas</h2>
        <TaskForm onSubmit={addTask} />
        <div className="flex flex-wrap justify-center items-center">
          {tasks.map((task) => (
            <Task key={task.id} id={task.id} text={task.text} complete={task.complete} completeTask={completeTask} deleteTask={deleteTask} cont={task.cont} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContainerTasks;
