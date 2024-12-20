/**
 * useTodoEditTemplate
 *
 * @package hooks
 */

import { useCallback, useMemo, useState } from 'react';
import { TodoType } from '../../../interfaces/Todo';
import { EventType } from '../../../interfaces/Event';
import { NAVIGATION_PATH } from '../../../constants/navigation';
import { useRouter } from 'next/router';

type Props = {
  todoList: Array<TodoType>;
  updateTodo: (targetId: number, title: string, content: string) => void;
};
/**
 * useTodoEditTemplate
 *
 */
export const useTodoEditTemplate = ({ todoList, updateTodo }: Props) => {
  const router = useRouter();
  const todo = useMemo(
    () => todoList.find((todo) => String(todo.id) === router?.query?.id),
    [todoList, router?.query?.id]
  );
  const [title, setTitle] = useState(todo?.title || '');
  const [content, setContent] = useState(todo?.content || '');

  /**
   * Actions
   *
   * Todoタイトル変更処理
   * @param {*} e
   */
  const handleChangeTitle: EventType['onChangeInput'] = useCallback((e) => setTitle(e.target.value), []);

  /**
   * Todoエリア変更処理
   * @param {*} e
   */
  const handleChangeContent: EventType['onChangeTextArea'] = useCallback((e) => setContent(e.target.value), []);

  /**
   * Todo更新処理
   */
  const handleUpdateTodo: EventType['onSubmit'] = useCallback(
    (e) => {
      e.preventDefault();
      if (!!todo && title !== '' && content !== '') {
        updateTodo(todo.id, title, content);
        router.push(NAVIGATION_PATH.TOP);
      }
    },
    [todo?.id, title, content, updateTodo]
  );

  const states = {
    todo,
    title,
    content,
  };

  const actions = {
    handleChangeTitle,
    handleChangeContent,
    handleUpdateTodo,
  };

  return [states, actions] as const;
};
