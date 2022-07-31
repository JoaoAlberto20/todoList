import { PlusCircle } from 'phosphor-react';
import { ChangeEvent, FormEvent, useState } from 'react';
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

  return (
    <header className={styles.header}>
      <Layout>
        <img src={Logo} alt="" className={styles.logo} />

        <form className={styles.contentForm} onSubmit={handleSubmitNewTasks}>
          <input
            type="text"
            placeholder="Adicione uma nova tarefa"
            value={newTasks}
            onChange={handleNewTasks}
          />
          <button type="submit">
            Criar
            <PlusCircle />
          </button>
        </form>
      </Layout>
    </header>
  );
}

export default Header;
