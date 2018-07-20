import uuid from 'uuid';
import {createAction, createStandardAction} from 'typesafe-actions';

import {TodosFilter, Todo} from './models';
import {Action} from 'redux';

const ADD = 'todos/ADD';
const TOGGLE = 'todos/TOGGLE';
const CHANGE_FILTER = 'todos/CHANGE_FILTER';

export const add = createAction(ADD, resolve => {
  return (title : string) => resolve({
    title: title || 'New Todo',
    id: uuid.v4(),
    completed: false
  });
});

export const toggle = createStandardAction(TOGGLE) < {
  id: string
} > ();

export const changeFilter = createStandardAction(CHANGE_FILTER) < TodosFilter > ();
