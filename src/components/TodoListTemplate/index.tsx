import { useTodoContext } from '@/contexts/TodoContext';
import { BaseLayout } from '../organisms/BaseLayout';

import styles from './styles.module.css';
import { useTodoListTemplate } from './useTodoListTemplate';
import { TodoList } from '../organisms/TodoLlist';

export const TodoListTemplate = () => {
  const { todoList } = useTodoContext();
  const [{ showTodoList }] = useTodoListTemplate({ todoList });

  return (
    <BaseLayout title="TodoList">
      <div className={styles.container}>
        <div className={styles.area}>
          <TodoList todoList={showTodoList} />
        </div>
      </div>
    </BaseLayout>
  );
};
