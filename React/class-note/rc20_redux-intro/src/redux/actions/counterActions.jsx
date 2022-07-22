import { DECREMENT, INCREMENT, RESET } from '../types/counterTypes';

export const increment = () => {
  return { type: INCREMENT };
};

export const decrement = () => ({ type: DECREMENT });
export const reset = () => ({ type: RESET });
