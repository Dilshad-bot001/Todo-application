export const addTask = (text, completed = false) => ({
    type: 'ADD_TASK',
    payload: {
        id: Math.random(),
        text,
        completed
    },
});

export const deleteTask = (id) => ({
    type: 'DELETE_TASK',
    payload: {
        id,
    },
});

export const toggleTask = (id) => ({
    type: 'TOGGLE_TASK',
    payload: {
        id,
    },
});

export const removeAllTask = () => ({
    type: 'REMOVE_ALL_TASK',
});