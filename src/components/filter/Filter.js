import React, {useRef, useState} from 'react';

function Filter({filterFn, refetch}) {
    const formRef = useRef(null)
    const [inputs, setInputs] = useState(null)

    const onChange = (e) => {
        if(e.target.name === "name") {
            setInputs(prevState => ({
                ...prevState,
                [e.target.name]: e.target.value
            }))

            return;
        }

        setInputs(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const reset = () => {
        formRef.current.reset();

        refetch()
    }


    const onSubmit = (e) => {
        e.preventDefault()
        if (inputs) {
            filterFn(inputs)
            return
        }
        alert('поля пустые1')
    }

    return (
        <form ref={formRef} onChange={onChange} onSubmit={onSubmit} onReset={reset}>
            <input type="datetime-local" name="created"/>
            <input type="text" name="name" placeholder="name"/>
            <button type="submit">filter</button>
            <button type="reset">cancel</button>
        </form>
    );
}

export default Filter;