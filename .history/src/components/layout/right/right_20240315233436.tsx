import React, { ReactNode } from 'react'
import styles from './right.module.css'

export const Right = ({ children }: { children: ReactNode }) => {
    return (
        <div>{children}</div>
    )
}
