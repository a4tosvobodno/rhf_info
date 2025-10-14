import { useForm } from "react-hook-form"
import { Left } from "../../components/layout/left/left"
import { Right } from "../../components/layout/right/right"
import styles from "./start.module.css"

export const Start = () => {

    const form = useForm()
    console.log(from)
    return (
        <div className={styles.container}>
            <Left>Описание формы</Left>
            <Right>
                <form>
                    <label id="name">Имя</label>
                    <input name="name" type='text' />
                </form>
            </Right>
        </div>
    )
}
