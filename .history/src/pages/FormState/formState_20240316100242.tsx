import { useForm } from "react-hook-form"
import { Left } from "../../components/layout/left/left"
import { Right } from "../../components/layout/right/right"
import styles from "./formState.module.css"
import { DevTool } from "@hookform/devtools";

export const FormState = () => {

    interface IData {
        name: string,
        lastName: string,

    }
    const form = useForm<IData>()
    const { register, control, handleSubmit } = form;
    const onSubmit = (data: IData) => {
        console.log(data)
    }
    return (
        <div className={styles.container}>
            <Left>FormState</Left>
            <Right>
                <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                    <label htmlFor="name">Имя</label>
                    <input id="name" {...register('name')} type='text' />


                    <label htmlFor="lastName">Фамилия</label>
                    <input id="lastName" {...register('lastName')} type='text' />

                    <button type='submit'>Отправить</button>
                </form>
                <DevTool control={control} />
            </Right>
        </div>
    )

}





