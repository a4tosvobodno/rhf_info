import React, { ReactNode } from 'react'
import styles from './left.module.css'

export const Left = ({ children }: { children: ReactNode }) => {
    return (
        <div className={styles.left} >{children}</div>
    )
}
