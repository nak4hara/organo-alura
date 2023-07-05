import './Team.css'

const Team = (props) => {
    return(
        <section className='team' style={{backgroundColor: props.backgroundColor}}>
            <h3 style={{borderColor: props.primaryColor}}>{props.title}</h3>
        </section>
    )
}

export default Team;