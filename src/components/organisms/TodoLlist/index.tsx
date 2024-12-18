import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile, faPenToSquare, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import styles from './styles.module.css';
import { TodoType } from '../../../interfaces/Todo';

type TodoListProps = {
  todoList: TodoType[];
};

export const TodoList = ({ todoList }: TodoListProps) => {
  return (
    <ul className={styles.list}>
      {todoList.map((todo) => (
        <li className={styles.todo} key={todo.id}>
          <span className={styles.task}>{todo.title}</span>
          <div className={styles.inner_area}>
            <div className={styles.far}>
              <FontAwesomeIcon icon={faFile} size="lg" />
            </div>
            <div className={styles.far}>
              <FontAwesomeIcon icon={faPenToSquare} size="lg" />
            </div>
            <div className={styles.far}>
              <FontAwesomeIcon icon={faTrashAlt} size="lg" />
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};
