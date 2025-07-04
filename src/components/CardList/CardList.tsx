import { useState, useEffect } from "react";
import Card from "../Card/Card";

interface PropsCards {
    id: number;
    title: string;
    body: string;
}
interface CardsProps {
    limit: number;
}
function CardList({ limit }: CardsProps) {
    const [cards, setCards] = useState<PropsCards[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setError(null);
            try {
                const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`)
                if (!response.ok) {
                    throw new Error("Ошибка загрузки!!!");
                }
                const data = await response.json();
                setCards(data);
            }
            catch (error) {
                setError("Ошибка загрузки!!!");
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [limit]);
    if (loading) {
        return <p>Loading.....</p>;
    }
    if (error) {
        return <p>Error:{error}</p>
    }
    return (
        <div className="cards">
            {cards.map((card, index) => (
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