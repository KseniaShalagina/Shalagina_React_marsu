import './FourthBlock.css'
import People from '../../../assets/image/фото_вожатый.jpg'

function FourthBlock() {
    return (
        <section className="fourth_block">
            <div className="connect">
                <img src={People} className="fourth_img" />
                <div className="fourth_txt">
                    <h2 className="name_block">Отправь своё резюме</h2>
                    <p className="cardtxt">Попади в лучший творческий и яркий коллектив талантов, 
                        активно ищущих своих коллег. Найдите работу для души! Вожатый — это не профессия, это призвание!</p>
                </div>
            </div>
        </section>
    );
}

export default FourthBlock;