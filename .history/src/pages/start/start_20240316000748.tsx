import { useForm } from "react-hook-form"
import { Left } from "../../components/layout/left/left"
import { Right } from "../../components/layout/right/right"
import styles from "./start.module.css"

export const Start = () => {

    const form = useForm()
    const { register } = form;
    const { ref, name, onBlur, onChange } = register('username')

    return (
        <div className={styles.container}>
            <Left>Описание формы</Left>
            <Right>
                <form>
                    <label id="name">Имя</label>
                    {/* мы можем не деструктурировать данные из  register, как в примере ниже*/}
                    <input name={name} onBlur={onBlur} onChange={onChange} ref={ref} type='text' />
                    {/* а можем деструктурировать */}
                    <input {...register('lastName')} type='text' />
                    <button type='submit'>ОТправить</button>
                </form>
            </Right>
        </div>
    )
}
