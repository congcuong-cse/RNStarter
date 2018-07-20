import * as actions from './actionTypes';
import {v4} from 'uuid';

export function addTodo(name : string, completed?: boolean) {
  return {
    type: actions.ADD,
    todo: {
      id: v4(),
      name: name,
      completed: completed === true
    }
  };
}

export function completeTodo(id : string) {
  return {type: actions.COMPLETE, id: id};
}

export function incompleteTodo(id : string) {
  return {type: actions.INCOMPLETE, id: id};
}
