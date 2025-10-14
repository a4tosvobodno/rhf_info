import styles from "./start.module.css"

export const Start = () => {
    return (
        <div className={styles.container}>
            <div className={styles.left} style={{ color: 'white' }}>Описание того, что тут можно сделать</div>
            <div className={styles.right}>Первый</div>
        </div>
    )
}
