import styles from "./header.module.css";
import { Link } from "react-router-dom";

export const Header = () => {
  return <header className={styles.header}>
    <nav>
        <ul>
            <li><Link to="/start">Начало</Link></li>
            <li><Link to="/validation">Валидация</Link></li>
            <li><Link to="/form-state">Подробнее formState</Link></li>
            <li><Link to="/control">Управление инпутами</Link></li>
            <li><Link to="/submit">Отправка формы</Link></li>
            <li><Link to="/async">Асинхронная работа</Link></li>
        </ul>
    </nav>
  </header>;
};