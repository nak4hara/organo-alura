import Contributor from '../Contributor/Contributor';
import './Team.css'

const Team = (props) => {
    return (
        props.contributors.length > 0 ? <section className='team' style={{ backgroundColor: props.backgroundColor }}>
            <h3 style={{ borderColor: props.primaryColor }} >{props.title}</h3>
            <div className='contributors'>
                {props.contributors.map(contributor => <Contributor key={contributor.name} name={contributor.name} position={contributor.position} image={contributor.image} backgroundColor={props.primaryColor} />)}
            </div>
        </section>
        : ''
    )
}

export default Team;