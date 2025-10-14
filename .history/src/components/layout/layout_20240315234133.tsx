
import { ReactNode } from 'react'
import styles from './layout.module.css'
import { Left } from './left/left'
import { Right } from './right/right'


export const Layout = ({ children }: { children: ReactNode }) => {
    return (
        <div className={styles.container}>
            {children}
        </div>
    )
}
