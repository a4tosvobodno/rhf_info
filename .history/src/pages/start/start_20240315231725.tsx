import styles from "./start.module.css"

export const Start = () => {
    return (
        <div className={styles.container}>
            <div className={styles.left} >Описание того, что тут можно сделать</div>
            <div className={styles.right}>
                <div>Первый</div>
            </div>
        </div>
    )
}
