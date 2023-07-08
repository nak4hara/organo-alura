import Contributor from '../Contributor/Contributor';
import './Team.css'

const Team = (props) => {
    return (
        <section className='team' style={{ backgroundColor: props.backgroundColor }}>
            <h3 style={{ borderColor: props.primaryColor }}>{props.title}</h3>
            <div className='contributors'>
                {props.contributors.map(contributor => <Contributor name={contributor.name} position={contributor.position} image={contributor.image}/>)}
            </div>
        </section>
    )
}

export default Team;