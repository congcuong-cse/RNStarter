'use strict';

import todoReducer from './todo';
import filterReducer from './filters';
import addModalReducer from './add-modal';

export default {
  todos : todoReducer,
  filter : filterReducer,
  addModal : addModalReducer
};
