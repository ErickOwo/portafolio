import React, { useState, useEffect } from 'react';
import Task from '@components/Task';
import TaskForm from '@components/FormTask';
import Dexie from 'dexie';

const ContainerTasks = () => {
  const [tasks, setTasks] = useState([]);

  const getTasks = async () => {
    const allPosts = await db.tasks.toArray();
    setTasks(allPosts);
  };

  useEffect(() => {
    const getTasks = async () => {
      const allPosts = await db.tasks.toArray();
      setTasks(allPosts);
    };
    getTasks();
  });

  const db = new Dexie('dataBase');

  db.version(1).stores({
    tasks: '++id, text, complete',
  });

  db.open().catch((e) => console.log(e));

  const addTask = (taskAdded) => {
    taskAdded.text = taskAdded.text.trim();

    if (taskAdded.text) {
      db.tasks.add(taskAdded).then(async () => {
        getTasks();
      });
    }
  };

  const deleteTask = (id) => {
    db.tasks.delete(id).then(async () => {
      getTasks();
    });
  };

  const completeTask = async (id) => {
    let object = await db.tasks.get(id);
    object.complete = !object.complete;
    await db.tasks.update(id, object);
    getTasks();
    // const actualizedTasks = tasks.map((task) => {
    //   if (task.id === id) {
    //     task.complete = !task.complete;
    //   }
    //   return task;
    // });
    // setTasks(actualizedTasks);
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
