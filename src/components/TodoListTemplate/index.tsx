import { useTodoContext } from '@/contexts/TodoContext';
import { BaseLayout } from '../organisms/BaseLayout';

import styles from './styles.module.css';
import { useTodoListTemplate } from './useTodoListTemplate';
import { TodoList } from '../organisms/TodoLlist';
import { InputForm } from '../atoms/InputForm';

export const TodoListTemplate = () => {
  const { todoList } = useTodoContext();
  const [{ searchKeyword, showTodoList }, { handleChangeSearchKeyword }] = useTodoListTemplate({ todoList });

  return (
    <BaseLayout title="TodoList">
      <div className={styles.container}>
        <div className={styles.area}>
          <InputForm inputValue={searchKeyword} placeholder="Search Keyword" onChange={handleChangeSearchKeyword} />
        </div>
        <div className={styles.area}>
          <TodoList todoList={showTodoList} />
        </div>
      </div>
    </BaseLayout>
  );
};
