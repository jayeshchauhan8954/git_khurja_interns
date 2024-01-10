// import the below link for tailwind css in your html file's head tag -> present in your public folder
// <script src="https://cdn.tailwindcss.com"></script> 

import React, { useState } from "react";

function TodoApp() {
  const [task, setTask] = useState("");
  const [tasklist, setTaskList] = useState([]);

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const AddTask = () => {
    if (task !== "") {
      const taskDetails = {
        id: Math.floor(Math.random() * 1000),
        value: task,
        isCompleted: false,
      };

      setTaskList([...tasklist, taskDetails]);
    }
  };

  const deletetask = (e, id) => {
    e.preventDefault();
    setTaskList(tasklist.filter((t) => t.id !== id));
  };

  const taskCompleted = (e, id) => {
    e.preventDefault();
    const element = tasklist.findIndex((elem) => elem.id === id);
    const newTaskList = [...tasklist];

    newTaskList[element] = {
      ...newTaskList[element],
      isCompleted: true,
    };

    setTaskList(newTaskList);
  };

  return (
    <div className="container bg-red-700 min-h-screen pl-36">
      <input
        type="text"
        name="text"
        id="text"
        onChange={(e) => handleChange(e)}
        placeholder="Add task here..."
        className="bg-transparent border-none text-black border-b-2 border-dashed min-w-400 mt-40 p-5 text-lg focus:outline-none focus:border-black"
      />
      <button
        className="add-btn py-2 px-4 rounded-full text-black text-lg bg-yellow-500 border-2 border-black ml-2 cursor-pointer"
        onClick={AddTask}
      >
        Add
      </button>
      <br />
      {tasklist.length !== 0 ? (
        <ul className="mt-8 text-lg">
          {tasklist.map((t) => (
            <li
              key={t.id}
              className={`${
                t.isCompleted ? "line-through text-red-500" : ""
              } listitem border-2 border-black rounded-10 p-5 mb-4 ml-2 bg-opacity-60`}
            >
              {t.value}
              <button
                className="completed py-2 px-4 rounded-full bg-green-500 border-none ml-2 cursor-pointer text-white"
                onClick={(e) => taskCompleted(e, t.id)}
              >
                Completed
              </button>
              <button
                className="delete py-2 px-4 rounded-full bg-red-500 border-none ml-2 cursor-pointer text-white"
                onClick={(e) => deletetask(e, t.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

export default TodoApp;
