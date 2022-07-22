import {
  ADD_TODO,
  CLEAR_TODO,
  DELETE_TODO,
  TOGGLE_TODO,
} from '../types/todoTypes';

export const addTodo = (payload) => {
  return { type: ADD_TODO, payload: payload };
};

export const deleteTodo = (payload) => {
  return { type: DELETE_TODO, payload: payload };
};

export const toggleTodo = (payload) => {
  return { type: TOGGLE_TODO, payload: payload };
};

export const clearTodo = () => {
  return { type: CLEAR_TODO };
};
