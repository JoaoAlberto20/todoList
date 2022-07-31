import { ReactNode } from 'react';
import styles from './Layout.module.css';

interface Props {
  children: ReactNode
}

function Layout({ children }: Props) {
  return (
    <div className={styles.layout}>
      {children}
    </div>
  );
}

export default Layout;
