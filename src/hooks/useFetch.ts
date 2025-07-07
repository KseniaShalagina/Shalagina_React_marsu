import { useState, useEffect } from 'react';

interface PropsCards {
    id: number;
    title: string;
    body: string;
}

function useFetchData(limit: number) {
    const [cards, setCards] = useState<PropsCards[]>([]);
    const [loading, setLoading] = useState(true);
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
    return { cards, error, loading };
}

export default useFetchData;