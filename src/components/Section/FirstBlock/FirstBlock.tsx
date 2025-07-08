import { useState } from 'react'
import './FirstBlock.css'
import Form from '../../Form/Form';
import { Link } from 'react-router-dom'
import ButtonJoin from '../../ButtonJoin/ButtonJoin';

function FirstBlock() {
    const [open, setOpen] = useState(false);
    const [formName, setFormName] = useState<'entrance' | 'registration'>('registration');
    const clickOpenReg = () => {
        setOpen(true);
        setFormName('registration');
    }
    return (
        <>
            <section className="first_block">
                <h1 className="main_name">Детский университет МарГУ</h1>
                <p className="main_description"> Это место для школьников, которые хотят расширить свои знания, развить интеллектуальные способности и познакомиться с университетской средой еще до поступления в ВУЗ.</p>
                <div className="button-wrapper right">
                    <ButtonJoin onClick={clickOpenReg} />
                </div>
                <p className="text_button"> Все про смены! <Link to="/cards"><span className="blue"><b> Здесь </b></span></Link></p>
            </section>
            <Form active={open} setActive={setOpen} formName={formName} />
        </>
    );
}
export default FirstBlock;