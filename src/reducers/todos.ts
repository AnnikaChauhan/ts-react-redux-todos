import { Todo } from '../actions';
import { Action, ActionTypes } from '../actions/types';

export const todosReducer = (
    state: Todo[] = [],
    action: Action
) => {
    switch (action.type) {
        case ActionTypes.fetchTodos:
            return action.payload;
        case ActionTypes.deleteTodo:
            return state.filter((todo: Todo) => todo.id !== action.payload);
        default:
            return state;
    }
}

//setting up the action types enum and the actions union sets up an implicit type guard (vid 273)