import React, { useEffect } from 'react';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import { useDispatch, useSelector } from 'react-redux';
import { addTask, removeAllTask } from './actions/index';

const App = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks);

  // Load tasks from localStorage on initialization
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (storedTasks) {
      storedTasks.forEach((task) => dispatch(addTask(task.text, task.completed)));
    }
  }, []);

  // Save tasks to localStorage whenever the task list changes
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks])

  return (
    <div className="container mx-auto mt-8">
      <div className='shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] h-32 flex justify-center items-center mb-32'>
        <h1 className="text-6xl font-semibold mb-4">To-Do List</h1>
      </div>
      <TaskInput />
      <TaskList />
      <div className='flex justify-center mt-40 mb-10'>
      <button
        className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-40 ${tasks.length === 0 ? 'hidden' : 'block'}`}
        onClick={() => dispatch(removeAllTask())}
      >
        Remove All
      </button>
      </div>
    </div>
  );
};

export default App;
