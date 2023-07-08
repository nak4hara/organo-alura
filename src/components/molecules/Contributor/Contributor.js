import './Contributor.css'

const Contributor = ({name, position, image}) => {
    return (
        <div className='contributor'>
            <div className='header'>
                <img src={image} alt={name} /> 
            </div>
            <div className='footer'>
                <h4>{name}</h4>
                <h5>{position}</h5>
            </div>
        </div>
    )
}

export default Contributor