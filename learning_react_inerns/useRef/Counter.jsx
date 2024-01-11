
import React, { useRef } from 'react';
import Stopwatch from './Stopwatch';

function Counter() {
    const inputRef = useRef(0);

    const handleClick = () => {
        inputRef.current.value = parseInt(inputRef.current.value) + 1
    };

    return (
        <div>
            <input ref={inputRef} value={inputRef.current} />
            <button onClick={handleClick}>Focus Input</button>
            <Stopwatch/>
        </div>

    );
}
export default Counter;