
import { ReactNode } from 'react'
import styles from './layout.module.css'



export const Layout = ({ children }: { children: ReactNode }) => {
    return (
        <div className={styles.container}>
            <div>Навигация</div>
            {children}
        </div>
    )
}
