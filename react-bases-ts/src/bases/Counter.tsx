import { useState } from 'react'
import { useLocation } from "react-router-dom";

interface Props {
    initialValue?: number
}

export const Counter = ({ initialValue = 0 }: Props) => {

    const [counter, setCounter] = useState(initialValue)
    const location = useLocation();

    console.log(location);

    const handleClick = () => {
        setCounter( prev => prev + 1 );
    }

    return (
        <>
            <h1>Counter: { counter }</h1>   

            <button onClick={ handleClick }>
                +1
            </button>
        </>
    )
}
