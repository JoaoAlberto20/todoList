import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Header from './components/Header';
import Layout from './components/Layout';

import styles from './App.module.css';
import Tasks from './components/Tasks';
import './Global.css';

import clipBoard from './assets/Clipboard.svg';

interface dataTasks {
  id: string,
  title: string,
  isDone: boolean,
}

function App() {
  const [tarefas, setTarefas] = useState<dataTasks[]>([]);

  const handleTasks = (tasks: string) => {
    const tasksInitial = [
      ...tarefas,
      {
        id: uuidv4(),
        title: tasks,
        isDone: false,
      },
    ];

    setTarefas(tasksInitial);
  };

  const handleDoneTasks = (id: string) => {
    const doneTasks = tarefas.map((tasks) => {
      if (tasks.id === id) {
        return {
          ...tasks,
          isDone: true,
        };
      } return tasks;
    });
    setTarefas(doneTasks);
  };

  const removeTasks = (id: string) => {
    const tasksDelete = tarefas.filter((tasks) => tasks.id !== id);
    setTarefas(tasksDelete);
  };

  const countTaskDone = tarefas.reduce((acc, tasks) => {
    if (tasks.isDone === true) {
      return acc + 1;
    }
    return acc;
  }, 0);

  return (
    <div>
      <Header handleTasks={handleTasks} />
      <main>
        <Layout>
          <header
            className={styles.contentHeader}
          >
            <p>
              Tarefas Criadas
              <span>{tarefas.length}</span>
            </p>
            <p>
              Concluídas
              <span>
                {countTaskDone}
                {' '}
                de
                {' '}
                {tarefas.length}
              </span>
            </p>
          </header>
          {
            tarefas.length > 0 ? (
              <div className={styles.contentTarefas}>
                { tarefas?.map((tasks) => (
                  <Tasks
                    id={tasks.id}
                    key={tasks.id}
                    title={tasks.title}
                    isDone={tasks.isDone}
                    removeTasks={removeTasks}
                    handleDoneTasks={handleDoneTasks}
                  />
                ))}
              </div>
            ) : (
              <div className={styles.notContentTasks}>
                <figure>
                  <img src={clipBoard} alt="" />
                </figure>
                <p>Você ainda não tem tarefas cadastradas</p>
                <span>Crie tarefas e organize seus itens a fazer</span>
              </div>
            )
          }
        </Layout>
      </main>
    </div>
  );
}

export default App;
