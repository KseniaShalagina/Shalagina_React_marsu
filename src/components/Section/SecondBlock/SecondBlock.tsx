import Marks from '../../../assets/image/Mask.svg'
import './SecondBlock.css'
import Ava2 from '../../../assets/image/Shvetsov_Mikhail1.jpg'

function SecondBlock() {
    return (
        <section className="second_block">
            <img src={Ava2} className="ava" />
            <img src={Marks} className=" marks" />
            <h2 className="name_blok1">Марийский государственный университет - это не только место обучения студентов, но ещё и детей.
            </h2>
            <p className="text_blok">Швецов М.Н.</p>
            <p className="text_min">ректор МарГУ</p>
        </section>
    );
}

export default SecondBlock;