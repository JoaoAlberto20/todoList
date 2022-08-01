import { Trash } from 'phosphor-react';
import styles from './Tasks.module.css';

interface Props {
  title: string,
  id: string,
  isDone: boolean,
  handleDoneTasks: (id: string) => void,
  removeTasks: (id: string) => void,
}

function Tasks({
  title, id, isDone, handleDoneTasks, removeTasks,
}: Props) {
  const handleNewDoneTasks = () => {
    handleDoneTasks(id);
  };

  const handleRemoveTasks = () => {
    removeTasks(id);
  };

  return (
    <div className={styles.tasks}>
      <div>
        <input
          id={`text-title-${id}`}
          type="checkbox"
          onChange={handleNewDoneTasks}
          checked={isDone}
        />
        <label htmlFor={`text-title-${id}`}>
          {title}
        </label>
      </div>

      <button type="button" onClick={handleRemoveTasks} title="deletar">
        <Trash />
      </button>
    </div>
  );
}

export default Tasks;
