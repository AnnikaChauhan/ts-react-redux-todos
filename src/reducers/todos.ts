import { Todo, FetchTodosAction } from '../actions';
import { ActionTypes } from '../actions/types';

export const todosReducer = (
    state: Todo[] = [],
    action: FetchTodosAction
    //annotation of the action isn't entirely correct but will do for the default
) => {
    switch (action.type) {
        case ActionTypes.fetchTodos:
            return action.payload;
        default:
            return state;
    }
}