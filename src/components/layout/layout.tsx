import { ReactNode } from "react";
import styles from "./layout.module.css";
import { Header } from "./header/header";

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className={styles.container}>
      <Header />
      {children}
    </div>
  );
};
