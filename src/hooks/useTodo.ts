/**
 * useTodo
 */

import { INIT_TODO_LIST } from '@/constants/data';
import { useState } from 'react';

export const useTodo = () => {
  /** todoList */
  const [todoList, setTodoList] = useState(INIT_TODO_LIST);

  return { todoList };
};
