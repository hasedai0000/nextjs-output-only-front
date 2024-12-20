import { useTodoContext } from '../../../contexts/TodoContext';
import { InputForm } from '../../atoms/InputForm';
import { TextAreaForm } from '../../atoms/TextAreaForm';
import { BaseLayout } from '../../organisms/BaseLayout';
import styles from './styles.module.css';
import { useRouter } from 'next/router';

export const TodoDetailTemplate = () => {
  const { todoList } = useTodoContext();
  const router = useRouter();
  const todo = todoList.find((todo) => String(todo.id) === router?.query?.id);

  return (
    <BaseLayout title="TodoDetail">
      {!!todo && (
        <div className={styles.container}>
          <div className={styles.area}>
            <InputForm inputValue={todo.title} disabled={true} />
          </div>
          <div className={styles.area}>
            <TextAreaForm inputValue={todo.content} disabled={true} />
          </div>
        </div>
      )}
    </BaseLayout>
  );
};
