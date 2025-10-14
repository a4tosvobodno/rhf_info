import { useForm, useFieldArray } from "react-hook-form"
import { Left } from "../../components/layout/left/left"
import { Right } from "../../components/layout/right/right"
import styles from "./formState.module.css"
import { DevTool } from "@hookform/devtools";


export const FormState = () => {

    interface IData {
        name: string,
        lastName: string,
        social: {
            vk: string,
            tg: string
        },
        phoneNumbers: string[],
        phNumbers: {
            number: string
        }[]
    }

    const form = useForm<IData>({
        // в данном поле мы можем задать дефолтные значения для полей, и можем убрать дженерик <IData>
        defaultValues: {
            name: 'Валентин',
            lastName: '',
            // мы можем добавить еще вложенный объект и с ним взаимодействовать
            social: {
                vk: '',
                tg: ''
            },
            // массив с данными
            phoneNumbers: [
                '', ''
            ],
            // динамические поля
            phNumbers: [{ number: '' }]
        }
        // в том числе, мы можем сразу сделать запрос на дефолтные поля к беку, пример ниже, раcкоментируй, 
        // не работает, при первом рендеере используй кнопку
        // defaultValues: async () => {
        //     const response = await fetch('https://jsonplaceholder.typicode.com/users/1')
        //     const data = await response.json();
        //     return {
        //         name: 'Валентин',
        //         lastName: data.username
        //     }
        // }
    })
    const { register, control, handleSubmit, formState } = form;
    const onSubmit = (data: IData) => {
        console.log(data)
    }
    // !!!!! ВАЖНО !!!! БЕЗ formState АСИНХРОННЫЕ ДЕФОЛТНОЕ ЗНАЧЕНИЕ НЕ БУДЕТ РАБОТАТЬ !!!!! ВАЖНО ЕГО ДОСТАТЬ И ЧТО ТО ИЗ НЕГО ВТАЩИТЬ, ДАЖЕ НЕ ИСПОЛЬЗУЯ
    const { errors } = formState
    const { fields } = useFieldArray({
        name: "phNumbers",
        control
    })
    // console.log("ошибки ", errors)
    return (
        <div className={styles.container}>
            <Left>FormState</Left>
            <Right>
                <form className={styles.form} onSubmit={handleSubmit(onSubmit)} noValidate>
                    <label htmlFor="name">Имя</label>
                    <input id="name" {...register('name', { required: "Обязательное поле" })} type='text' />
                    {errors.name?.message && <p style={{ color: "red" }}>{errors.name?.message}</p>}

                    <label htmlFor="lastName">Фамилия</label>
                    <input id="lastName" {...register('lastName', { required: "Обязательное поле" })} type='text' />
                    {errors.lastName?.message && <p style={{ color: "red" }}>{errors.lastName?.message}</p>}

                    {/* ниже пример взаимодействия с двумя вложенными объектами */}
                    <label htmlFor="vk">BK</label>
                    <input id="vk" {...register('social.vk', { required: "Обязательное поле" })} type='text' />
                    {errors.social?.vk?.message && <p style={{ color: "red" }}>{errors.social?.vk?.message}</p>}


                    <label htmlFor="tg">TG</label>
                    <input id="tg" {...register('social.tg', { required: "Обязательное поле" })} type='text' />
                    {errors.social?.tg?.message && <p style={{ color: "red" }}>{errors.social?.tg?.message}</p>}

                    {/* ниже пример взаимодействия с вложенным массивом */}
                    <label htmlFor="primary-phone">Основной телефон</label>
                    <input id="primary-phone" {...register('phoneNumbers.0', { required: "Обязательное поле" })} type='text' />
                    {/* обрати внимание на обработку ошибок */}
                    {errors.phoneNumbers && <p style={{ color: "red" }}>{errors.phoneNumbers[0]?.message}</p>}

                    <label htmlFor="secondary-phone">Дополнительный телефон</label>
                    <input id="secondary-phone" {...register('phoneNumbers.1', { required: "Обязательное поле" })} type='text' />

                    <div>
                        <label>List of phone numbers</label>
                    </div>


                    <button type='submit'>Отправить</button>
                </form>
                <DevTool control={control} />
            </Right>
        </div>
    )

}





