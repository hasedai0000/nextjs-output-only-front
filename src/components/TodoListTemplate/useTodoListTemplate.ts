/**
 * useTodoListTemplate
 *
 * @package hooks
 */

import { EventType } from '@/interfaces/Event';
import { TodoType } from '@/interfaces/Todo';
import { useCallback, useMemo, useState } from 'react';

type Params = {
  todoList: Array<TodoType>;
};

type StatesType = {
  searchKeyword: string;
  showTodoList: Array<TodoType>;
};

type ActionsType = {
  handleChangeSearchKeyword: EventType['onChangeInput'];
};

/**
 * useTodoListTemplate
 * @param todoList
 */
export const useTodoListTemplate = ({ todoList }: Params) => {
  /** 検索キーワード */
  const [searchKeyword, setSearchKeyword] = useState('');
  /** 表示用TodoList */
  const showTodoList = useMemo(() => {
    const regexp = new RegExp('^' + searchKeyword, 'i');
    return todoList.filter((todo) => {
      //検索キーワードに部分一致したTodoを一覧表示する
      return todo.title.match(regexp);
    });
  }, [todoList, searchKeyword]);

  /**
   * 検索キーワード更新処理
   * @param {*} e
   */
  const handleChangeSearchKeyword: EventType['onChangeInput'] = useCallback(
    (e) => setSearchKeyword(e.target.value),
    []
  );

  const states: StatesType = {
    searchKeyword,
    showTodoList,
  };

  const actions: ActionsType = {
    handleChangeSearchKeyword,
  };

  return [states, actions] as const;
};
