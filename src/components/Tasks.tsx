import { Trash } from 'phosphor-react';
import styles from './Tasks.module.css';

interface Props {
  title: string;
  id: number,
  isDone: boolean,
}

function Tasks({ title, id, isDone }: Props) {
  return (
    <div className={styles.tasks}>
      <label htmlFor={`text-title-${id}`}>
        <input type="checkbox" id={`text-title-${id}`} />
        <span>
          {title}
        </span>
      </label>
      <Trash />
    </div>
  );
}

export default Tasks;
