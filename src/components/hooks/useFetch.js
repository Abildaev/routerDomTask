import {useState, useRef} from 'react'


export function useFetch(url) {

    let urlRef = useRef(url);
    let iteration = useRef(0)

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [data, setData] = useState([]);

    const getData = async (params) => {
        setData([])
        iteration.current = 0
        setIsLoading(true);
        setError('')
        try {
            if (params) {
                [...params].forEach(elem => {
                    const [key, value] = elem
                    iteration.current === 0
                        ?
                        urlRef.current += `?${key}=${value}`
                        :
                        urlRef.current += `&${key}=${value}`
                    iteration.current += 1;
                })
            }
            const response = await fetch(`${urlRef.current}`);
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
            urlRef.current = url;
            iteration.current = 0;
        }
    }
    return {getData, isLoading, error, data}
}