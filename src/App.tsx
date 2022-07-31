import { useState } from 'react';

import Header from './components/Header';
import Layout from './components/Layout';

import styles from './App.module.css';
import Tasks from './components/Tasks';
import './Global.css';

interface dataTasks {
  id: number,
  title: string,
  isDone: boolean,
}

function App() {
  const [tarefas, setTarefas] = useState<dataTasks[]>([]);

  const handleTasks = (tasks: string) => {
    setTarefas(() => [
      ...tarefas,
      {
        id: tarefas.length + 1,
        title: tasks,
        isDone: false,
      },
    ]);
  };

  

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
              Concluídos
              <span>
                0
                de
                {' '}
                {tarefas.length}
              </span>
            </p>
          </header>

          <div className={styles.contentTarefas}>

            { tarefas?.map((tasks) => (
              <Tasks
                key={tasks.id}
                title={tasks.title}
                id={tasks.id}
                isDone={tasks.isDone}
              />
            ))}

          </div>

        </Layout>
      </main>

    </div>
  );
}

export default App;
