
import styles from './layout.module.css'
import { Left } from './left/left'
import { Right } from './right/right'


export const Layout = () => {
    return (
        <div className={styles.container}>
            <Left>Текст1</Left>
            <Right>Текст2</Right>
        </div>
    )
}
