import { useParams } from 'react-router-dom';
import { useTodoContext } from '../../../contexts/TodoContext';
import { InputForm } from '../../atoms/InputForm';
import { TextAreaForm } from '../../atoms/TextAreaForm';
import { BaseLayout } from '../../organisms/BaseLayout';
import styles from './styles.module.css';
import { useTodoEditTemplate } from './useTodoEditTemplate';
import { CommonButton } from '../../atoms/CommonButton';

export const TodoEditTemplate = () => {
  const { todoList, updateTodo } = useTodoContext();
  const [{ todo, title, content }, { handleChangeTitle, handleChangeContent, handleUpdateTodo }] = useTodoEditTemplate({
    todoList,
    updateTodo,
  });

  return (
    <BaseLayout title="TodoDetail">
      {!!todo && (
        <form className={styles.container} onSubmit={handleUpdateTodo}>
          <div className={styles.area}>
            <InputForm inputValue={title} onChange={handleChangeTitle} />
          </div>
          <div className={styles.area}>
            <TextAreaForm inputValue={content} onChange={handleChangeContent} />
          </div>
          <div className={styles.area}>
            <CommonButton title="更新" disabled={title === '' || content === ''} />
          </div>
        </form>
      )}
    </BaseLayout>
  );
};
