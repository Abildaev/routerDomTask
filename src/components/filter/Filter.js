import React, {useRef, useState} from 'react';
import {useSearchParams} from "react-router-dom";


function Filter() {

    let [searchParams, setSearchParams] = useSearchParams();


    const [inputs, setInputs] = useState(null)

    const onChange = (e) => {
        setInputs(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const reset = () => {
        for (let entry of searchParams.entries()) {
            const [param, value] = entry;
            setSearchParams(searchParams => {
                searchParams.delete(param)
            })
        }
        setInputs(null)
    }

    const onSubmit = (e) => {
        e.preventDefault()
        if (inputs) {
            for (let key in inputs) {
                setSearchParams(searchParams => {
                    searchParams.set(key, inputs[key])
                    return searchParams
                })
            }
            return
        }
        alert('поля пустые')
    }

    return (
        <form onSubmit={onSubmit} onReset={reset}>
            <input
                type="datetime-local"
                name="created"
                value={inputs?.created ?  inputs.created  :""}
                onChange={onChange}
            />
            <input
                type="text"
                name="name"
                placeholder="name"
                value={inputs?.name ? inputs.name : ""}
                onChange={onChange}
            />

            <button type="submit">filter</button>
            <button type="reset">cancel</button>
        </form>
    );
}

export default Filter;