import React, {useEffect} from 'react';
import {useFetch} from "../components/hooks/useFetch";
import {Link, useLocation, useSearchParams} from "react-router-dom";
import Filter from "../components/filter/Filter";

function LocationPage(props) {

    let [searchParams] = useSearchParams();
    const {pathname,search} = useLocation();

    const {getData, isLoading, data, error} = useFetch('http://localhost:3030/location');
    useEffect(() => {
        getData(search)
    }, [searchParams]);


    return (
        <div>
            <h1>Locations</h1>
            <Filter/>
            {isLoading && 'Загрузка...'}
            {error && error}
            <ul>
                {data.length > 0
                    ?
                    data.map(item => (
                        <li key={item.id}>
                            <Link to={`${pathname}/${item.id}`}>{item.name}</Link>
                        </li>
                    ))
                    :
                    !isLoading && <li>data empty</li>
                }
            </ul>

        </div>
    );
}

export default LocationPage;