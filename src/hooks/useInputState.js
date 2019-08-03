import { useState } from "react";

function useInputState(initVal) {
const [value, setValue] = useState(initVal);
const updateValue = (e) => {
    setValue(e.target.value);
}
const resetValue = () => {
    setValue('')
}
    return [value, updateValue, resetValue]
}

export default useInputState;