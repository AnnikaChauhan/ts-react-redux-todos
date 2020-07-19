import React from "react";
import { connect } from "react-redux";
import { Todo, fetchTodos } from "../actions";
import { StoreState } from "../reducers";

interface AppProps {
  todos: Todo[];
  fetchTodos(): any;
}

class App extends React.Component<AppProps> {
  onButtonClick = (): void => {
    this.props.fetchTodos();
  };

  renderList(): JSX.Element[] {
    return this.props.todos.map((todo: Todo) => {
      return <li key={todo.id}>{todo.title}</li>;
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.onButtonClick}>Fetch</button>
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
export default connect(mapStateToProps, { fetchTodos })(App);
