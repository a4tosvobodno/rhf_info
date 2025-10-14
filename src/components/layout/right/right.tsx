import React, { ReactNode } from 'react'
import styles from './right.module.css'

export const Right = ({ children }: { children: ReactNode }) => {
    return (
        <div className={styles.right}>{children}</div>
    )
}
