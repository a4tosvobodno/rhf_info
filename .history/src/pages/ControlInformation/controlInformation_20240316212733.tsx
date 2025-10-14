
import { FieldErrors, useForm } from "react-hook-form"
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
    const { register, control, handleSubmit, watch, getValues, setValue, formState } = form;
    // из formState, мы можем достать методы, которые отвечают за первое касание инпутов и их изменение от начального состояния.
    const { dirtyFields, touchedFields, isDirty, isValid, errors } = formState
    // метод isDirty похоже следит за всей формой
    console.log("isDirty", isDirty)
    const onSubmit = (data: IData) => {
        console.log(data)
    }
    // посмотреть все ошибки в форме, можно способом ниже
    const onErrors = (errors: FieldErrors<FormValues>) => {
        console.log("ошибки всей формы", errors)
    }
    // получение всех данных по клику
    const getAllValues = () => {
        console.log("Данные по клику", getValues())
    }
    // получение только имени
    const getName = () => {
        console.log(getValues("name"))
    }
    // получение данных, что в массиве 
    const getSomeData = () => {
        console.log(getValues(['name', 'lastName']))
    }
    // изменение только имени в форме при этом поля валидации (touch, dirty), не тригерятся в форме
    const setName = () => {
        setValue('name', 'ВалерААААА')
    }
    // изменение lastName в форме при этом поля валидации (touch, dirty),  тригерятся в форме 
    const setTriggerLastName = () => {
        setValue('lastName', 'Афанасьев', {
            shouldDirty: true,
            shouldTouch: true,
            shouldValidate: true,
        })
    }
    // следим только за полем имя
    const nameWatch = watch("name");
    // следим и выводим все поля из массива, переданного в зависимости
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

                <form className={styles.form} onSubmit={handleSubmit(onSubmit, onErrors)}>
                    <p>счетчик рендера {renderCount / 2}</p>
                    <div>ВСЕ ПОЛЯ: {watchAll}</div>
                    <div>JSON :{JSON.stringify(watchJSON)}</div>
                    <label htmlFor="name">Имя</label>
                    <input id="name" {...register('name', {
                        required: {
                            value: true,
                            message: "Обязательное поле"
                        }
                    })} type='text' />
                    {<p>ИМЯ: {nameWatch}</p>}
                    {errors.name?.message && <p style={{ color: 'red' }}>{errors.name?.message}</p>}
                    {/* инпут ниже зависим от наличия значения в поле имени, если оно пустое, то поле фамилии не активно, и наоборот */}
                    <label htmlFor="lastName">Фамилия</label>
                    <input id="lastName" {...register('lastName', {
                        disabled: nameWatch === ""
                    })} type='text' />


                    <button type='submit'>Отправить</button>
                    <button type="button" onClick={getAllValues}>Получить данные</button>
                    <button type="button" onClick={getName}>Получить имя</button>
                    <button type="button" onClick={setName}>Изменить имя</button>
                    <button type="button" onClick={setTriggerLastName}>Изменить фамилию</button>
                </form>
                <DevTool control={control} />
            </Right>
        </div>

    )
}
