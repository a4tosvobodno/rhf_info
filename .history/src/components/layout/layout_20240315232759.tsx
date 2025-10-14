import styles from './layout.module.css'

export const Layout = () => {
    return (
        <div className={styles.container}>
            
            <div className={styles.left} >Описание того, что тут можно сделать</div>
            <div className={styles.right}>
                <div>Первый</div>
            </div>
        </div>
    )
}
