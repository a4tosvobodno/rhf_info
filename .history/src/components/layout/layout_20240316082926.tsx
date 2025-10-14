
import { ReactNode } from 'react'
import styles from './layout.module.css'



export const Layout = ({ children }: { children: ReactNode }) => {
    return (
        <div className={styles.container}>
            <div style={{ background: 'red' }}>Навигация</div>
            {children}
        </div>
    )
}
