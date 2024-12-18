/**
 * TodoContext
 *
 * @package contexts
 */

import { useTodo } from '@/hooks/useTodo';
import { TodoType } from '@/interfaces/Todo';
import { createContext, FC, useContext } from 'react';

type Props = {
  children: React.ReactNode;
};

interface ContextInterface {
  todoList: Array<TodoType>;
}

/**
 * TodoContext
 */
const TodoContext = createContext({} as ContextInterface);

export const TodoProvider: FC<Props> = ({ children }) => {
  const { todoList } = useTodo();

  return <TodoContext.Provider value={{ todoList }}>{children}</TodoContext.Provider>;
};

/**
 * useTodoContext
 * @returns
 */
export const useTodoContext = () => {
  return useContext(TodoContext);
};
