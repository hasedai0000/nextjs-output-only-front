/**
 * useTodo
 */

import { INIT_TODO_LIST, INIT_UNIQUE_ID } from '@/constants/data';
import { useState } from 'react';

export const useTodo = () => {
  /** todoList */
  const [todoList, setTodoList] = useState(INIT_TODO_LIST);
  /** 採番 */
  const [uniqueId, setUniqueId] = useState(INIT_UNIQUE_ID);

  /**
   * Actions
   * Todoの新規作成
   * @param targetTitle
   * @param targetContent
   */
  const addTodo = (targetTitle: string, targetContent: string) => {
    if (targetTitle === '' && targetContent === '') return;
    const newUniqueId = uniqueId + 1;
    const nweTodo = [
      ...todoList,
      {
        id: newUniqueId,
        title: targetTitle,
        content: targetContent,
      },
    ];
    setTodoList(nweTodo);
    setUniqueId(newUniqueId);
  };

  /**
   * Todoの削除
   * @param targetId
   * @param targetTitle
   */
  const deleteTodo = (targetId: number, targetTitle: string) => {
    if (window.confirm(`「${targetTitle}」のtodoを削除しますか？`)) {
      const newTodo = todoList.filter((todo) => todo.id !== targetId);
      setTodoList(newTodo);
    }
  };

  /**
   * Todoの更新
   * @param targetId
   * @param targetTitle
   * @param targetContent
   */
  const updateTodo = (targetId: number, targetTitle: string, targetContent: string) => {
    if (targetId === 0 && targetTitle === '' && targetContent === '') return;
    const updateTodo = todoList.map((todo) => {
      if (todo.id === targetId) {
        return {
          ...todo,
          id: targetId,
          title: targetTitle,
          content: targetContent,
        };
      }
      return todo;
    });
    setTodoList(updateTodo);
  };

  return { todoList, addTodo, deleteTodo, updateTodo };
};
