'use strict';

import * as actions from '../actions/actionTypes';
var {VisibilityFilters} = actions;

const initialState = VisibilityFilters.ALL;

export default function visibilityReducer(state : string = VisibilityFilters.ALL, action : any = {}) : string {
  switch(action.type) {
    case actions.SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
}
