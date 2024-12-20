import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile, faPenToSquare, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import styles from './styles.module.css';
import { TodoType } from '../../../interfaces/Todo';
import { useTodoList } from './useTodoList';

type TodoListProps = {
  todoList: TodoType[];
  handleDeleteTodo: (targetId: number, targetTitle: string) => void;
};

export const TodoList = ({ todoList, handleDeleteTodo }: TodoListProps) => {
  const [{ handleMoveDetailPage, handleMoveEditPage }] = useTodoList();
  return (
    <ul className={styles.list}>
      {todoList.map((todo) => (
        <li className={styles.todo} key={todo.id}>
          <span className={styles.task}>{todo.title}</span>
          <div className={styles.inner_area}>
            <div className={styles.far}>
              <FontAwesomeIcon icon={faFile} size="lg" onClick={() => handleMoveDetailPage(todo.id)} />
            </div>
            <div className={styles.far}>
              <FontAwesomeIcon icon={faPenToSquare} size="lg" onClick={() => handleMoveEditPage(todo.id)} />
            </div>
            <div className={styles.far}>
              <FontAwesomeIcon icon={faTrashAlt} size="lg" onClick={() => handleDeleteTodo(todo.id, todo.title)} />
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};
