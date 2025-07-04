import React from 'react'
import Ava from '../../../assets/image/Ellipse 512(1).svg'
import Fon from '../../../assets/image/Bitmap.svg'
import './ThirdBlock.css'
import { Link } from 'react-router-dom'
import Foto4 from '../../../assets/image/вожатый.jpg'
import Foto1 from '../../../assets/image/вожатый1.jpg'
import Foto2 from '../../../assets/image/вожатый2.jpg'

interface PropsCards {
    children: React.ReactNode;
}

function ThirdBlock({ children }: PropsCards) {
    return (
        <section className="third_blok">
            <Link to="/cards" className="name_link"><h2 className="name_blok">Дополнительная общеразвивающая программа "Детский университет" для детей от 5 до 12 лет</h2></Link>
            <div className="backgroundd">
                <img src={Fon} className="background" />
                <div className="big_card_inf">
                    <div className="card_girl">
                        <img src={Ava} className="avas" />
                        <p className="name_girl">Краснова Анна</p>
                        <p className="work">Вожатый</p>
                        <div className="about_girl">
                            <div className="about">
                                <li className="maps"> Йошкар-ола, Россия</li>
                                <li className="works"> Полный рабочий день</li>
                            </div>
                            <div className="design">
                                <ul className="design_li">
                                    <li className="des">Креативная</li>
                                    <li className="des">Творческая</li>
                                    <li className="des">Яркая</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="main_about">
                        <div className="with_form">
                            <div className="inf_about">
                                <h2 className="inf_header"> Обо мне</h2>
                                <p className="text_my">Я — энергичный и ответственный человек с опытом работы с детьми, умею находить общий язык с разными возрастными группами и создавать дружелюбную атмосферу. Люблю организовывать творческие и спортивные мероприятия, помогая детям раскрывать свои таланты и чувствовать себя частью команды.</p>
                            </div>
                            <div className="portfolio">
                                <h2 className="inf_header">Портфолио</h2>
                                <div className="photo">
                                    <img src={Foto4} className="imgs" />
                                    <img src={Foto1} className="imgs" />
                                    <img src={Foto2} className="imgs" />
                                </div>
                            </div>
                            <div className="work_ex">
                                <h2 className="inf_header">Опыт работы</h2>
                            </div>
                        </div>
                        <div className="form">
                            <form action="">
                                <label className="form_input_em"> <span className="em">Email</span>
                                    <input type="email" name="name" required />
                                </label>
                                <label className="form_input_tel">
                                    <span className="tel">Номер телефона</span>
                                    <input type="phone" name="tel" />
                                </label>
                                <button className="buttRes"><b>Скачать резюме</b></button>
                                <button className="buttMes"><b>Сообщение</b></button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {children}
        </section>
    );
}
export default ThirdBlock;