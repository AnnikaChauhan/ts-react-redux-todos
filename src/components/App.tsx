import React from "react";
import { connect } from "react-redux";
import { Todo, fetchTodos, deleteTodo } from "../actions";
import { StoreState } from "../reducers";

interface AppProps {
  todos: Todo[];
  fetchTodos: Function;
  deleteTodo: Function;
}

interface AppState {
  fetching: boolean;
}

class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);

    this.state = { fetching: false };
  }

  componentDidUpdate(prevProps: AppProps): void {
    if (!prevProps.todos.length && this.props.todos.length) {
      this.setState({ fetching: false });
    }
  }

  onButtonClick = (): void => {
    this.props.fetchTodos();
    this.setState({ fetching: true });
  };

  onTodoClick = (id: number): void => {
    this.props.deleteTodo(id);
  };

  renderList(): JSX.Element[] {
    return this.props.todos.map((todo: Todo) => {
      return (
        <li key={todo.id} onClick={() => this.onTodoClick(todo.id)}>
          {todo.title}
        </li>
      );
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.onButtonClick}>Fetch</button>
        {this.state.fetching ? "Loading" : null}
        <ul>{this.renderList()}</ul>
      </div>
    );
  }
}

// const mapStateToProps = (state: StoreState): { todos: Todo[] } => {
//   return { todos: state.todos };
// };

// un-destructured is above
const mapStateToProps = ({ todos }: StoreState): { todos: Todo[] } => {
  return { todos };
};

// we try not to use default exports with typescript
export default connect(mapStateToProps, { fetchTodos, deleteTodo })(App);
