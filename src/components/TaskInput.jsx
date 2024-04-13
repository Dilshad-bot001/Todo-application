import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../actions/index';

const TaskInput = () => {
  const [task, setTask] = useState('');
  const dispatch = useDispatch();

  // add tasks to the state
  const handleAddTask = () => {
    if (task.trim() !== '') {
      dispatch(addTask(task));
      setTask('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAddTask();
    }
  };

  return (
    <div className="flex justify-center mt-4">
      <input
        type="text"
        className="border rounded py-2 px-3 mr-6 w-1/3 focus:outline-blue-400"
        placeholder="Add Task..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-24"
        onClick={handleAddTask}
      >
        Add
      </button>
    </div>
  );
};

export default TaskInput;
