
import { useForm } from "react-hook-form"
import { Left } from "../../components/layout/left/left"
import { Right } from "../../components/layout/right/right"
import styles from "./controlInformation.module.css"
import { DevTool } from "@hookform/devtools";

export const Control = () => {

    interface IData {
        name: string,
        lastName: string,
    }
    const form = useForm<IData>()
    const { register, control, handleSubmit, watch } = form;
    const onSubmit = (data: IData) => {
        console.log(data)
    }
    // следим только имя
    const nameWatch = watch("name");
    // следим и выводим се поля
    const watchAll = watch(['name', 'lastName'])
    // также следим за всем
    const watchJSON = watch()
    return (
        <div className={styles.container}>
            <Left>
                <p>В данном блоке:</p>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </Left>
            <Right>

                <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                    <div>ВСЕ ПОЛЯ: {watchAll}</div>
                    <div>JSON :{JSON.stringify(watchJSON)}</div>
                    <label htmlFor="name">Имя</label>
                    <input id="name" {...register('name')} type='text' />
                    {<p>ИМЯ: {nameWatch}</p>}

                    <label htmlFor="lastName">Фамилия</label>
                    <input id="lastName" {...register('lastName')} type='text' />


                    <button type='submit'>Отправить</button>
                </form>
                <DevTool control={control} />
            </Right>
        </div>
    )
}
