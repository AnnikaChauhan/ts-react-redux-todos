export enum ActionTyoes {
    fetchTodos
}

//with an enum, typescript assigns a 0 to the first value, then a 1 to the next etc, for the action type we don't actually care about it having a string assignment, all we really care about is each type having a unique value and by using an enum the assignment of 0,1 etc gives this unique value