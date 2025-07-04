import FirstBlock from '../components/Section/FirstBlock/FirstBlock'
import Image from '../components/Section/Image/Image'
import Fon from '../components/Section/Fon/Fon'
import SecondBlock from '../components/Section/SecondBlock/SecondBlock'
import ThirdBlock from '../components/Section/ThirdBlock/ThirdBlock'
import CardList from '../components/CardList/CardList'
import FourthBlock from '../components/Section/FourthBlock/FourthBlock'
import FifthBlock from '../components/Section/FifthBlock/FifthBlock'
function HomePage() {
    return (
        <>
            <FirstBlock />
            <Image><Fon /></Image>
            <SecondBlock />
            <ThirdBlock><CardList limit={3}/></ThirdBlock>
            <FourthBlock />
            <FifthBlock />
        </>
    );
}
export default HomePage;