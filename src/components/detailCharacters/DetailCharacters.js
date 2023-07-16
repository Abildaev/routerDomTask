import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useFetch} from "../hooks/useFetch";

function DetailCharacters(props) {
    const {id} = useParams();

    const {getData, error, data, isLoading} = useFetch(`http://localhost:3030/characters/${id}`)


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
                    <img src={data.image} alt=""/>
                    <ul>
                        <li>species: {data.species}</li>
                        <li>gender: {data.gender}</li>
                        <li>status: {data.species}</li>
                        <li>type: {data.type}</li>
                        <li>created: {data.created}</li>

                    </ul>
                </>


            }


        </div>
    );
}

export default DetailCharacters;