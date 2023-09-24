import '/Users/swetr/React projects/personal-details-form/src/Components/todo-button/button.styles.css'

const ButtonComponent = ({ type, className,btntext}) => {
    return (
        <button
            type={type}
            className={`${className} button`}>{btntext}
        </button>
    )
}

export default ButtonComponent;