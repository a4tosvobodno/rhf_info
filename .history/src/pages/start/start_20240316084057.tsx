import { useForm } from "react-hook-form"
import { Left } from "../../components/layout/left/left"
import { Right } from "../../components/layout/right/right"
import styles from "./start.module.css"
import { DevTool } from "@hookform/devtools";

export const Start = () => {

    interface IData {
        name: string,
        lastName: string,

    }

    const form = useForm<IData>()
    /* для  DevTool зависимостью является control*/
    const { register, control, handleSubmit } = form;
    const { ref, name, onBlur, onChange } = register('name')
    const onSubmit = (data: IData) => {
        console.log(data)
    }
    return (
        <div className={styles.container}>
            <Left>Описание формы</Left>
            <Right>
                <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                    <label htmlFor="name">Имя</label>
                    {/* мы можем не деструктурировать данные из  register, как в примере ниже*/}
                    <input id="name" name={name} onBlur={onBlur} onChange={onChange} ref={ref} type='text' />
                    {/* а можем деструктурировать */}
                    <label htmlFor="lastName">Фамилия</label>
                    <input id="lastName" {...register('lastName')} type='text' />
                    <button type='submit'>Отправить</button>
                </form>
                {/* мы можем дополнительно установить DevTool для разработки */}
                <DevTool control={control} />
            </Right>
        </div>
    )
}
