import { useState } from "react"


export const AddCategory = ({ onNewCategory }) => {

    const [InputValue, setInputValue] = useState('')

    const onInputChange = ({ target }) => {
        setInputValue(target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault();
        const newValue = InputValue.trim()
        if (newValue.length <= 1) return;
        onNewCategory(newValue);
        setInputValue('')
    }

    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                placeholder="Search gif"
                value={InputValue}
                onChange={onInputChange}
            />
        </form>

    )
}
