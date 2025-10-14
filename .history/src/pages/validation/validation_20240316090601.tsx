import { DevTool } from '@hookform/devtools'
import { Left } from '../../components/layout/left/left'
import { Right } from '../../components/layout/right/right'
import styles from "./validation.module.css"
import { useForm } from 'react-hook-form'

export const Validation = () => {
    interface IData {
        name: string,
        lastName: string,
        email: string

    }
    const form = useForm<IData>()
    const { register, handleSubmit, control } = form;
    const onSubmit = (data: IData) => {
        console.log(data)
    }
    return (
        <div className={styles.container}>
            <Left>Валидация формы</Left>
            <Right>
                <form className={styles.form} onSubmit={handleSubmit(onSubmit)} noValidate>
                    <label htmlFor="name">Имя</label>
                    <input id="name" {...register('name', { required: "Обязательное поле" })} type='text' />
                    <label htmlFor="lastName">Фамилия</label>
                    <input id="lastName" {...register('lastName')} type='text' />
                    <label htmlFor="email">Почта</label>
                    <input id="email" {...register('email', {
                        // валидация по паттерну на емаил
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i,
                            message: "Введите правильную почту"
                        }
                    })} type='text' />
                    <button type='submit'>Отправить</button>
                </form>
                <DevTool control={control} />
            </Right>
        </div>
    )
}
