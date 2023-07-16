import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useFetch} from "../hooks/useFetch";

function DetailLocation(props) {
    const {id} = useParams();
    const {getData, error, data, isLoading} = useFetch(`http://localhost:3030/location/${id}`)

    useEffect(() => {
        getData()
    },[])

    return (
        <div>

            {isLoading && 'Загрузка...'}
            {error && error}
            {data && !isLoading &&
                <>
                    <h1>{data.name}</h1>

                    <ul>
                        <li>dimension: {data.dimension}</li>
                        <li>type: {data.type}</li>
                        <li>created: {data.created}</li>
                    </ul>
                </>
            }
        </div>
    );
}

export default DetailLocation;