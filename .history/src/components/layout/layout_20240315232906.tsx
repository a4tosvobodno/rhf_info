import styles from './layout.module.css'

export const Layout = () => {
    return (
        <div className={styles.container}>

            <Left />
            <div className={styles.right}>
                <div>Первый</div>
            </div>
        </div>
    )
}
