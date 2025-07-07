import Card from "../Card/Card";
import useFetchData from "../../hooks/useFetch";
import { CardData } from '../../types/card'
interface CardsProps {
    limit: number;
}

function CardList({ limit }: CardsProps) {
    const url = `https://jsonplaceholder.typicode.com/posts?_limit=${limit}`
    const { cards, error, loading } = useFetchData<CardData>(url);
    if (loading) {
        return <p>Loading.....</p>;
    }
    if (error) {
        return <p>Error:{error}</p>
    }
    return (
        <div className="cards">
            {cards.map((card) => (
                <Card
                    key={card.id}
                    card_name={card.title}
                    card_text={card.body}
                />
            ))}
        </div>
    );
}
export default CardList;