import { PlusCircle } from 'phosphor-react';
import styles from './Header.module.css';
import Layout from './Layout';

import Logo from '../assets/Logo.svg';

export function Header() {
  return (
    <header className={styles.header}>
      <Layout>
        <img src={Logo} alt="" className={styles.logo} />

        <form className={styles.contentForm}>
          <input type="text" placeholder="Adicione uma nova tarefa" />
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
