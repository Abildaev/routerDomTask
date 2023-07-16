import {useState, useRef} from 'react'


export function useFetch(url) {

    const urlRef = useRef(url);
    const iteration = useRef(0)
    const keysRef = useRef('');

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
                for (let key in params) {
                    iteration.current === 0
                        ?
                        keysRef.current += `?${key}=${params[key]}`
                        :
                        keysRef.current += `&${key}=${params[key]}`
                    iteration.current += 1;
                }

                urlRef.current += keysRef.current
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
            keysRef.current = ''
        }
    }
    return {getData, isLoading, error, data}
}