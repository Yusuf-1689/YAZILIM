// import { DECREMENT, INCREMENT, RESET } from './types/counterTypes';

// const initialState = {
//   counter: 0,
// };

// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case INCREMENT:
//       return { counter: state.counter + 1 };
//     case DECREMENT:
//       return { counter: state.counter - 1 };
//     case RESET:
//       return { counter: 0 };
//     default:
//       return state;
//   }
// };
// export default reducer;

import { createStore, combineReducers } from 'redux';
import counterReducer from './reducers/counterReducer';
import todoReducer from './reducers/todoReducers';

const rootReducer = combineReducers({
  counterRed: counterReducer,
  todoRed: todoReducer,
});

export const getStore = () => {
  const store = createStore(rootReducer);
  return store;
};
