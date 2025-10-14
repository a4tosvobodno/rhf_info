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
    // formState мы можем достать из form, деструктурируя его
    const { register, handleSubmit, control, formState } = form;
    // errors мы можем вытащить из того самого formState, так же деструктурируя его
    const { errors } = formState
    const onSubmit = (data: IData) => {
        console.log(data)
    }
    return (
        <div className={styles.container}>
            <Left>Валидация формы</Left>
            <Right>
                <form className={styles.form} onSubmit={handleSubmit(onSubmit)} noValidate>


                    <label htmlFor="name">Имя</label>
                    {/* валидация на обязательное поле */}
                    <input id="name" {...register('name', {
                        required: "Обязательное поле",
                        validate: {
                            isAdmin: (fieldValue) => {
                                return fieldValue !== "admin" || "Используйте другое имя"
                            },
                            isString: (fieldValue) => {
                                return fieldValue.endsWith("ня") || "Используйте другое имя"
                            }
                        }
                    })} type='text' />
                    {errors.name?.message && <p style={{ color: 'red' }}>{errors.name?.message}</p>}



                    <label htmlFor="lastName">Фамилия</label>
                    <input id="lastName" {...register('lastName', {
                        // проверить на обязательное поле, можно и таким способом
                        required: {
                            value: true,
                            message: "Это поле обязательно!"
                        },
                        // можно валидировать способом ниже
                        validate: {
                            number: value => /\d/.test(value) || "Имя должно содержать хотя бы одну цифру!",
                            noRussianChars: value => !/[А-Яа-яЁё]/.test(value) || "Используйте только латиницу!",
                        }
                    })} type='text' />
                    {/* если оставить вывод ошибки просто в теге Р, то в html отображается пустой тег Р и он для себя забирает место, 
                    выше в инпуте  name, есть проверка на существование ошибки и тег Р отрисовывается по условию и не забирает в документе, 
                    пока не придет ошибка*/}
                    <p style={{ color: 'red' }}>{errors.lastName?.message}</p>




                    <label htmlFor="email">Почта</label>
                    <input id="email" {...register('email', {
                        // валидация по паттерну на емаил
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i,
                            message: "Введите правильную почту"
                        },
                        // валидация принимает в себя функцию, которая принимает значение и его можно проверить
                        validate: (fieldValue) => {
                            return fieldValue !== "admin@yandex.ru" || "Используйте другой ящик"
                        }
                    })} type='text' />
                    <p style={{ color: 'red' }}>{errors.email?.message}</p>
                    <button type='submit'>Отправить</button>
                </form>
                <DevTool control={control} />
            </Right>
        </div>
    )
}
