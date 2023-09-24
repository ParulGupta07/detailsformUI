import '/Users/swetr/React projects/personal-details-form/src/Components/Input-box/input-box.styles.css'

const InputBox = ({ placeholder, onChangeHandler, className, type, pattern,name }) => {
    return (
        <input
            placeholder={placeholder}
            onChange={onChangeHandler}
            className={`input-box ${className}`}
            type={type}
            pattern={pattern}
            name={name}
        />
    )
}

export default InputBox;