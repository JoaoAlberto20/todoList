import Header from './components/Header';
import Layout from './components/Layout';

import './Global.css';
import styles from './App.module.css';

function App() {
  return (
    <div>
      <Header />
      <main className={styles.contentTarefas}>
        <Layout>
          <div />
        </Layout>
      </main>

    </div>
  );
}

export default App;
