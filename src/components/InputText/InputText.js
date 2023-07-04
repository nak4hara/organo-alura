import './InputText.css'

const InputText = (props) => {

    const toType = (event) => {
        props.toChange(event.target.value)
    }

    return (
        <div className="input-text">
            <label>{props.label}</label>
            <input
                onChange={toType}
                value={props.value}
                required={props.mandatory}
                placeholder={props.placeholder} />
        </div>
    )
}

export default InputText