
import { useForm } from "react-hook-form"
import { Left } from "../../components/layout/left/left"
import { Right } from "../../components/layout/right/right"
import styles from "./controlInformation.module.css"
import { DevTool } from "@hookform/devtools";
// import { useEffect } from "react";

let renderCount = 0;
export const Control = () => {

    interface IData {
        name: string,
        lastName: string,
    }
    const form = useForm<IData>()
    const { register, control, handleSubmit, watch, getValues } = form;
    const onSubmit = (data: IData) => {
        console.log(data)
    }

    const getAllValues = () => {
        console.log("Данные по клику", getValues())
    }
    // следим только имя
    const nameWatch = watch("name");
    // следим и выводим се поля
    const watchAll = watch(['name', 'lastName'])
    // также следим за всем
    const watchJSON = watch()


    // при использовании юз еффекта, способом ниже, не происходит рерентдер компонента, в другом случае ререндер происходит.
    // useEffect(() => {
    //     const subscription = watch((value) => {
    //         console.log(value)
    //     })
    //     return () => {
    //         subscription.unsubscribe()
    //     }
    // }, [watch])

    renderCount++
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
                    <p>счетчик рендера {renderCount / 2}</p>
                    <div>ВСЕ ПОЛЯ: {watchAll}</div>
                    <div>JSON :{JSON.stringify(watchJSON)}</div>
                    <label htmlFor="name">Имя</label>
                    <input id="name" {...register('name')} type='text' />
                    {<p>ИМЯ: {nameWatch}</p>}

                    <label htmlFor="lastName">Фамилия</label>
                    <input id="lastName" {...register('lastName')} type='text' />


                    <button type='submit'>Отправить</button>
                    <button type="button" onClick={getAllValues}>Получить данные</button>
                </form>
                <DevTool control={control} />
            </Right>
        </div>

    )
}
