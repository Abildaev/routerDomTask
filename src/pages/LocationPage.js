import React, {useEffect} from 'react';
import {useFetch} from "../components/hooks/useFetch";
import {Link, useLocation} from "react-router-dom";
import Filter from "../components/filter/Filter";

function LocationPage(props) {
    const {getData, isLoading, data, error} = useFetch('http://localhost:3030/location');
    useEffect(() => {
        getData()
    }, []);

    const filterFn = (params) => {
        getData(params)
    }

    const refetch = () => {
        getData()
    }

    const {pathname} = useLocation();

    return (
        <div>
            <h1>Locations</h1>
            <Filter filterFn={filterFn} refetch={refetch}/>
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