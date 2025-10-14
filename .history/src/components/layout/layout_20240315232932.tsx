import styles from './layout.module.css'
import { Left } from './left/left'

export const Layout = () => {
    return (
        <div className={styles.container}>

            <Left>Описание того, что ту  можно делать</Left>
            <div className={styles.right}>
                <div>Первый</div>
            </div>
        </div>
    )
}
