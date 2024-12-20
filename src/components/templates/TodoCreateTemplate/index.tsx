import { BaseLayout } from '@/components/organisms/BaseLayout';
import styles from './styles.module.css';
import { InputForm } from '@/components/atoms/InputForm';
import { useTodoCreateTemplate } from './useTodoCreateTemplate';
import { TextAreaForm } from '@/components/atoms/TextAreaForm';
import { CommonButton } from '@/components/atoms/CommonButton';
import { useTodoContext } from '@/contexts/TodoContext';

export const TodoCreateTemplate = () => {
  const { addTodo } = useTodoContext();
  const [{ inputTitle, inputContent }, { handleChangeInputTitle, handleChangeInputContent, handleCreateTodo }] =
    useTodoCreateTemplate({
      addTodo,
    });

  return (
    <BaseLayout title="TodoCreate">
      <form className={styles.container} onSubmit={handleCreateTodo}>
        <div className={styles.area}>
          <InputForm inputValue={inputTitle} placeholder="New Title" onChange={handleChangeInputTitle} />
        </div>
        <div className={styles.area}>
          <TextAreaForm inputValue={inputContent} placeholder="New Content" onChange={handleChangeInputContent} />
        </div>
        <div className={styles.area}>
          <CommonButton type="submit" title="Create" />
        </div>
      </form>
    </BaseLayout>
  );
};
