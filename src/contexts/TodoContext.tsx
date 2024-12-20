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
  addTodo: (title: string, content: string) => void;
  deleteTodo: (targetId: number, targetTitle: string) => void;
  updateTodo: (targetId: number, targetTitle: string, targetContent: string) => void;
}

/**
 * TodoContext
 */
const TodoContext = createContext({} as ContextInterface);

export const TodoProvider: FC<Props> = ({ children }) => {
  const { todoList, addTodo, deleteTodo, updateTodo } = useTodo();

  return <TodoContext.Provider value={{ todoList, addTodo, deleteTodo, updateTodo }}>{children}</TodoContext.Provider>;
};

/**
 * useTodoContext
 * @returns
 */
export const useTodoContext = () => {
  return useContext(TodoContext);
};
