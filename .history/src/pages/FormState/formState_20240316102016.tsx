import { useForm } from "react-hook-form"
import { Left } from "../../components/layout/left/left"
import { Right } from "../../components/layout/right/right"
import styles from "./formState.module.css"
import { DevTool } from "@hookform/devtools";
import React from "react";

export const FormState = () => {

    interface IData {
        name: string,
        lastName: string,

    }
    const form = useForm<IData>({
        // в данном поле мы можем задать дефолтные значения для полей, и можем убрать дженерик <IData>
        // defaultValues: {
        //     name: 'Валентин',
        //     lastName: '',
        // }
        // в том числе, мы можем сразу сделать запрос на дефолтные поля к беку, пример ниже, раcкоментируй
        defaultValues: async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/users/1')
            const data = await response.json();
            return {
                name: 'Валентин',
                lastName: data.username
            }
        }
    })
    React.useEffect(() => {

    }, [form])
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





