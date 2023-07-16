import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useFetch} from "../hooks/useFetch";

function DetailEpisodes(props) {
    const {id} = useParams();
    const {getData, error, data, isLoading} = useFetch(`http://localhost:3030/episode/${id}`)

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
                        <li>air date: {data.air_date}</li>
                        <li>episode: {data.episode}</li>
                        <li>created: {data.created}</li>
                    </ul>
                </>
            }
        </div>
    );
}

export default DetailEpisodes;