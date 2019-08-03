import {useState} from 'react';

function useToggle(initVal = false) {
    const [state, setState] = useState(initVal);
    const setToggle = () => {
        setState(!state);
    }

    return [state, setToggle]
}

export default useToggle;