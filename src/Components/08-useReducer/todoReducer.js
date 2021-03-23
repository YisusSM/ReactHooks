

export const todoReducer = (state = [], action) => {

    switch (action.type) {
        case 'add':

            return [...state, action.payLoad];

        case 'delete':
            return state.filter(todo => todo.id !== action.payLoad);

        case 'toggle':

            return state.map(todo => 
               (todo.id === action.payLoad)
               ? {...todo,done: !todo.done}
               :todo
            )

        default:
            return state;

    }

}