import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask, toggleTask } from '../actions/index';

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const handleToggleTask = (id) => {
    dispatch(toggleTask(id));
  };

  const handleDeleteTask = (id) => {
    dispatch(deleteTask(id));
  };

  return (
    <div className="mt-20">
      <ul>
        {tasks.map((task) => (
          <li key={task.id} className={'flex justify-between items-center border-b py-4'}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => handleToggleTask(task.id)}
              className='w-6 h-6'
            />
            <span onClick={() => handleToggleTask(task.id)} className={`ml-2 text-3xl ${task.completed ? 'line-through text-gray-700' : ''}`}>{task.text}</span>
            <button
              className="text-red-600 hover:text-red-900"
              onClick={() => handleDeleteTask(task.id)}
            >
              <span className="material-symbols-outlined cursor-pointer">
                delete
              </span>
            </button>

          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;