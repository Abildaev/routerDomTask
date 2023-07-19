import {useState, useRef} from 'react'


export function useFetch(url) {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [data, setData] = useState([]);

    const getData = async (search) => {
        setData([])
        setIsLoading(true);
        setError('')
        try {
            if (search) {
                url += search
            }
            const response = await fetch(`${url}`);
            if (response.status >= 200 && response.status <= 204) {
                const data = await response.json()
                setData(data)
            } else {
                throw Error('Произошла ошибка')
            }
        } catch (e) {
            setError(e.message)
        } finally {
            setIsLoading(false)
        }
    }
    return {getData, isLoading, error, data}
}