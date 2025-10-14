
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
    // isSubmitting проверяет перед отправкой форму, если всё хорошо, то метод при отправке тру, в противном случае, он фолс, 
    // отрабатыввает моментально, почти на клик и обратно возвращает свое значение.
    // **
    // isSubmitted похож на метод isSubmitting, но при успешной отправке формы он меняет свое значение с фолс на тру, в не зависимости от ошибок.
    // метод isSubmitSuccessful, делает тоже самое что и метод isSubmitted, но реагирует на ошибки
    //** 
    // метод submitCount отвечает за количество отправок формы
    const { isDirty, isSubmitting, isSubmitted, isSubmitSuccessful, submitCount } = formState
    console.log('isDirty', isDirty, { isSubmitting, isSubmitted, isSubmitSuccessful, submitCount })
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

                    {isSubmitting === true ? <p>ТРУ</p> : <p>false</p>}

                    <label htmlFor="name">Имя</label>
                    <input id="name" {...register('name', { required: true })} type='text' />

                    <label htmlFor="lastName">Фамилия</label>
                    <input id="lastName" {...register('lastName')} type='text' />

                    <button type='submit'>Отправить</button>
                </form>
                <DevTool control={control} />
            </Right>
        </div>
    )
}
