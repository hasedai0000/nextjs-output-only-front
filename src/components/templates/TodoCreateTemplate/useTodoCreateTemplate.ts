/**
 * useTodoCreateTemplate
 *
 * @package hooks
 */

import { NAVIGATION_PATH } from '@/constants/navigation';
import { EventType } from '@/interfaces/Event';
import { useRouter } from 'next/router';
import { useCallback, useState } from 'react';

type Props = {
  addTodo: (title: string, content: string) => void;
};

type StatesType = {
  inputTitle: string;
  inputContent: string;
};

type ActionsType = {
  handleChangeInputTitle: EventType['onChangeInput'];
  handleChangeInputContent: EventType['onChangeTextArea'];
  handleCreateTodo: EventType['onSubmit'];
};

/**
 * useTodoCreateTemplate
 * @param todoList
 */
export const useTodoCreateTemplate = ({ addTodo }: Props) => {
  const router = useRouter();
  /** 新規Title */
  const [inputTitle, setInputTitle] = useState('');
  /** 新規内容 */
  const [inputContent, setInputContent] = useState('');

  /**
   * 新規Title更新処理
   * @type {function(*): void}
   */
  const handleChangeInputTitle: EventType['onChangeInput'] = useCallback((e) => setInputTitle(e.target.value), []);

  /**
   * 新規内容更新処理
   * @type {function(*): void}
   */
  const handleChangeInputContent: EventType['onChangeTextArea'] = useCallback(
    (e) => setInputContent(e.target.value),
    []
  );

  /**
   * Todo作成処理
   * @type {(function(*): void)|*}
   */
  const handleCreateTodo: EventType['onSubmit'] = useCallback(
    (e) => {
      e.preventDefault();
      addTodo(inputTitle, inputContent);
      router.push(NAVIGATION_PATH.TOP);
    },
    [addTodo, inputTitle, inputContent, router]
  );

  const states: StatesType = {
    inputTitle,
    inputContent,
  };

  const actions: ActionsType = {
    handleChangeInputTitle,
    handleChangeInputContent,
    handleCreateTodo,
  };

  return [states, actions] as const;
};
