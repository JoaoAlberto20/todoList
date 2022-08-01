import { PlusCircle } from 'phosphor-react';
import {
  ChangeEvent, FormEvent, InvalidEvent, useState,
} from 'react';
import styles from './Header.module.css';
import Layout from './Layout';

import Logo from '../assets/Logo.svg';

interface Props {
  handleTasks: (tasks: string) => void,
}

export function Header({ handleTasks }: Props) {
  const [newTasks, setNewTasks] = useState('');

  const handleNewTasks = (event: ChangeEvent<HTMLInputElement>) => {
    setNewTasks(event.target.value);
  };

  const handleSubmitNewTasks = (event: FormEvent) => {
    event.preventDefault();
    handleTasks(newTasks);
    setNewTasks('');
  };

  const handleNewTasksInvalid = (event: InvalidEvent<HTMLInputElement>) => {
    event.target.setCustomValidity('Esse campo é obrigatório!');
  };

  const isNewTasksEmpty = newTasks.length === 0;

  return (
    <header className={styles.header}>
      <Layout>
        <img src={Logo} alt="" className={styles.logo} />

        <form className={styles.contentForm} onSubmit={handleSubmitNewTasks}>
          <input
            type="text"
            value={newTasks}
            required
            onChange={handleNewTasks}
            placeholder="Adicione uma nova tarefa"
            onInvalid={handleNewTasksInvalid}
          />
          <button type="submit" disabled={isNewTasksEmpty}>
            Criar
            <PlusCircle />
          </button>
        </form>
      </Layout>
    </header>
  );
}

export default Header;
