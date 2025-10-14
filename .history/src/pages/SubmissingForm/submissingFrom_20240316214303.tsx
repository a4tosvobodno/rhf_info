
import { useForm } from "react-hook-form"
import { Left } from "../../components/layout/left/left"
import { Right } from "../../components/layout/right/right"
import styles from "./submit.module.css"
import { DevTool } from "@hookform/devtools";

export const Submit = () => {

    interface IData {
        name: string,
        lastName: string,

    }

    const form = useForm<IData>({
        defaultValues: {
            name: '',
            lastName: ''
        }
    })
    const { register, control, handleSubmit, formState } = form;
    const { isDirty } = formState
    console.log('isDirty', isDirty)
    const onSubmit = (data: IData) => {
        console.log(data)
    }
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
