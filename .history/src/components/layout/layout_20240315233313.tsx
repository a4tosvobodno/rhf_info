import { ReactNode } from 'react'
import styles from './layout.module.css'


export const Layout = ({ children1, children2 }: { children1: ReactNode, children2: ReactNode }) => {
    return (
        <div className={styles.container}>
            <>
                {children1}
            </>
            <>
                {children2}
            </>
        </div>
    )
}
