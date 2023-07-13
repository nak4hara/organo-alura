import './DropdownList.css'

const DropdownList = (props) => {
    return (
        <div className='dropdown-list'>
            <label>{props.label}</label>
            <select
                required={props.mandatory}
                value={props.value}
                onChange={event => props.toChange(event.target.value)}>
                <option value='' disabled></option>
                {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}

export default DropdownList