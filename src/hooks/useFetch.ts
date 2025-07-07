import { useState, useEffect } from 'react';

function useFetchData<T>(url: string) {
    const [cards, setCards] = useState<T[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setError(null);
            try {
                const response = await fetch(url)
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
    }, [url]);
    return { cards, error, loading };
}

export default useFetchData;