import * as actions from '../actions/actionTypes';

export default function todosReducer(todos : Array < any > = [], action : any = {}) : Array < any > {
  switch(action.type) {
    case actions.ADD:
      return [
        ...todos,
        action.todo
      ];
    case actions.COMPLETE:
      var index = todos.findIndex((todo : any) => todo.id === action.id);
      if (index === -1) {
        return todos;
      }
      return [
        ...todos.slice(0, index),
        Object.assign({}, todos[index], {completed: true}),
        ...todos.slice(index + 1)
      ];
    case actions.INCOMPLETE:
      var index = todos.findIndex((todo : any) => todo.id === action.id);
      if (index === -1) {
        return todos;
      }
      return [
        ...todos.slice(0, index),
        Object.assign({}, todos[index], {completed: false}),
        ...todos.slice(index + 1)
      ];
    default:
      return todos;
  }
}
