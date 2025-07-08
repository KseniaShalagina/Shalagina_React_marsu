import './FifthBlock.css'
import Camp from '../../../assets/image/лагерь.jpg'
import ButtonJoin from '../../ButtonJoin/ButtonJoin';
import { useState } from 'react'
import Form from '../../Form/Form';

function FifthBlock() {
    const [open, setOpen] = useState(false);
    const [formName, setFormName] = useState<'entrance' | 'registration'>('registration');
    const clickOpenReg = () => {
        setOpen(true);
        setFormName('registration');
    }
    return (
        <>
            <section className=" fifth_block">
                <div className="prifile">
                    <div className="blok_prifile">
                        <div className="blok_prifile_min">
                            <h2 className="fifth_name">Детский университет МарГУ ждет именно Вашего ребёнка</h2>
                            <div className="button-wrapper left">
                                <ButtonJoin onClick={clickOpenReg} />
                            </div>
                        </div>
                    </div>
                    <img src={Camp} className="fifth_img" />
                </div>
            </section>
            <Form active={open} setActive={setOpen} formName={formName} />
        </>
    );
}
export default FifthBlock;