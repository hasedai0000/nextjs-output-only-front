import { Navigation } from '@/components/molecules/Navigation';
import styles from './styles.module.css';

type BaseLayoutProps = {
  title: string;
  children: React.ReactNode;
};

export const BaseLayout = ({ title, children }: BaseLayoutProps) => {
  return (
    <div className={styles.container}>
      <section className={styles.common}>
        <Navigation />
      </section>
      <h1 className={styles.title}>{title}</h1>
      {children}
    </div>
  );
};
