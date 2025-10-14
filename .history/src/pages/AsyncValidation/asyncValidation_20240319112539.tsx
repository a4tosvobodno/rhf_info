
import { useForm } from "react-hook-form"
import { Left } from "../../components/layout/left/left"
import { Right } from "../../components/layout/right/right"
import styles from "./asyncValidation.module.css"
import { DevTool } from "@hookform/devtools";

export const Async = () => {

    interface IData {
        name: string,
        lastName: string,

    }

    const form = useForm<IData>({
        defaultValues: {
            name: '',
            lastName: ''
        },
        mode: "onBlur"
    })
    const { register, control, handleSubmit, formState } = form;
    const { errors } = formState;
    console.log("Ошибки", errors)
    const onSubmit = (data: IData) => {
        console.log(data)
    }
    return (
        <div className={styles.container}>
            <Left>
                <p>В данном блоке:</p>
                <ul>
                    <li>Тут можно посмотреть МОДЫ формы</li>
                    <li>Асинхронная проверка полей из базы данных</li>
                    <li></li>
                </ul>
            </Left>
            <Right>
                <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                    <label htmlFor="name">Имя</label>
                    <input id="name" {...register('name', required: {
                        value: true,
                    message: "Обязательное поле"
                        },)} type='text' />
                    <label htmlFor="lastName">Фамилия</label>
                    <input id="lastName" {...register('lastName', {
                        required: {
                            value: true,
                            message: "Обязательное поле"
                        },
                        // для асинхронной валидации формы мы используем ошибки из formState, чтоб ее отобразить
                        // также конструкцию, которая позволяет валидировать форму в блоке validate
                        // также в асинхронную функцию передаем fieldValue - значение, что вводиться в инпут
                        validate: {
                            emailAvailable: async (fieldValue) => {
                                const res = await fetch(`https://jsonplaceholder.typicode.com/users?username=${fieldValue}`)
                                const data = await res.json()
                                return data.length == 0 || "Фамилия уже есть"
                            }
                        }
                    })} type='text' />
                    {errors.lastName?.message && <p style={{ color: 'red' }}>{errors.lastName?.message}</p>}
                    <button type='submit'>Отправить</button>
                </form>
                <DevTool control={control} />
            </Right>
        </div>
    )
}
