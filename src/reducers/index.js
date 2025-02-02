const initialState = {
    tasks: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TASK':
            return {
                ...state,
                tasks: [...state.tasks, action.payload],
            };
        case 'DELETE_TASK':
            return {
                ...state,
                tasks: state.tasks.filter((task) => task.id !== action.payload.id),
            };
        case 'TOGGLE_TASK':
            return {
                ...state,
                tasks: state.tasks.map((task) =>
                    task.id === action.payload.id ? { ...task, completed: !task.completed } : task
                ),
            };
        case 'REMOVE_ALL_TASK':
            return {
                ...state,
                tasks: []
            };
        default:
            return state;
    }
};

export default reducer;
