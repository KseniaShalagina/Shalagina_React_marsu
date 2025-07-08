import { useEffect } from 'react';
import './Form.css'
import { useForm, SubmitHandler } from 'react-hook-form';
import isEmail from "validator/lib/isEmail";

interface propsForm {
    active: boolean;
    setActive: (value: boolean) => void;
    formName: 'registration' | 'entrance';
}

interface formInput {
    childName: string;
    email: string;
    password: string;
}

function Form({ active, setActive, formName }: propsForm) {
    useEffect(() => {
        if (active) {
            document.body.style.overflow = 'hidden';
        }
        else {
            document.body.style.overflow = 'auto';
        }
    }, [active]);
    const clickClose = () => {
        setActive(false);
    }
    const stopForm = (event: React.MouseEvent<HTMLElement>) => {
        event.stopPropagation()
    }

    const { register, handleSubmit } = useForm<formInput>();
    const onSubmit: SubmitHandler<formInput> = async (data) => {
        console.log('Данные формы:', data);
        setActive(false);
    };
    return (
        <div className={active ? "backdrop activ" : "backdrop"} onClick={clickClose}>
            <form className="form_click" onClick={stopForm} onSubmit={handleSubmit(onSubmit)}>
                <h1 className="form_name">
                    {formName == 'entrance' ? 'Форма входа' : 'Форма регистрации'}
                </h1>
                <div className="field-area">
                    <input className="input-area" type="text" placeholder="Имя ребёнка"
                        {...register('childName', {
                            required: 'Обязательно',
                            minLength: {
                                value: 2,
                                message: 'Минимум 2 символа',
                            },
                            pattern: /^[А-Яа-яЁё\s\-]+$/
                        })} />
                    {formName == 'registration' && (
                        <input className="input-area" type="email" placeholder="Почтовый адрес"
                            {...register('email', {
                                required: 'Обязательно!',
                                validate: (input) => isEmail(input),
                            })} />
                    )}
                    {formName == 'entrance' && (
                        <input className="input-area" type="password" placeholder="Пароль"
                            {...register('password', {
                                required: 'Обязательно!',
                                minLength: {
                                    value: 6,
                                    message: 'Минимум 6 символа',
                                },pattern:  /^[A-Za-z]+$/,
                            })} />
                    )}

                </div>
                <div className="form_buttons">
                    <button className="form_button">Отправить</button>
                    <button className="form_button" onClick={clickClose}>Закрыть</button>
                </div>
            </form>
        </div>
    );
}
export default Form;
