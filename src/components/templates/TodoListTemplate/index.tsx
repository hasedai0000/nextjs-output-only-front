import { useTodoContext } from '@/contexts/TodoContext';
import { BaseLayout } from '@/components/organisms/BaseLayout';
import styles from './styles.module.css';
import { useTodoListTemplate } from './useTodoListTemplate';
import { InputForm } from '@/components/atoms/InputForm';
import { TodoList } from '@/components/organisms/TodoLlist';

export const TodoListTemplate = () => {
  const { todoList, deleteTodo } = useTodoContext();
  const [{ searchKeyword, showTodoList }, { handleChangeSearchKeyword }] = useTodoListTemplate({ todoList });

  return (
    <BaseLayout title="TodoList">
      <div className={styles.container}>
        <div className={styles.area}>
          <InputForm inputValue={searchKeyword} placeholder="Search Keyword" onChange={handleChangeSearchKeyword} />
        </div>
        <div className={styles.area}>
          {showTodoList.length > 0 ? (
            <TodoList todoList={showTodoList} handleDeleteTodo={deleteTodo} />
          ) : (
            <p className={styles.no_todo}>No Todo</p>
          )}
        </div>
      </div>
    </BaseLayout>
  );
};
