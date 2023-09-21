import '/Users/swetr/React projects/personal-details-form/src/Components/Input-box/input-box.styles.css'

const InputBox = ({ placeholder, onChangeHandler, className, type, pattern }) => {
    return (
        <input
            placeholder={placeholder}
            onChange={onChangeHandler}
            className={`input-box ${className}`}
            type={type}
            pattern={pattern}
        />
    )
}

export default InputBox;