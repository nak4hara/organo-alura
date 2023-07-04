import './InputText.css'

const InputText = (props) => {
    return (
        <div className="input-text">
            <label>{props.label}</label>
            <input required={props.mandatory} placeholder={props.placeholder} />
        </div>
    )
}

export default InputText