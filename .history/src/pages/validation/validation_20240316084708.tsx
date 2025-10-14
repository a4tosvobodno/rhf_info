import React from 'react'
import { Left } from '../../components/layout/left/left'
import { Right } from '../../components/layout/right/right'
import styles from "./validation.module.css"

export const Two = () => {
    return (
        <div className={styles.container}>
            <Left>Из вторго модуля</Left>
            <Right>Из вторго модуля</Right>
        </div>
    )
}
