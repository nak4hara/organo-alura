import { useState } from 'react'
import InputText from '../../InputText/InputText'
import DropdownList from '../../DropdownList/DropdownList'
import './Forms.css'
import Button from '../../Button/Button'

export default function Forms(props) {
    const [name, setName] = useState('')
    const [position, setPosition] = useState('')
    const [image, setImage] = useState('')
    const [team, setTeam] = useState('')

    const toSave = (event) => {
        event.preventDefault()
        /* gives the control of the button to me, prevent the default behaviour*/
        props.toEachRegisteredContributor({
            name,
            position,
            image,
            team
        })
        setName('')
        setPosition('')
        setImage('')
        setTeam('')
    }

    return (
        <section className='forms'>
            <form onSubmit={toSave}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <InputText
                    value={name}
                    toChange={value => setName(value)}
                    mandatory={true}
                    label="Nome"
                    placeholder="Digite seu nome"
                />
                <InputText
                    value={position}
                    toChange={value => setPosition(value)}
                    mandatory={true}
                    label="Cargo"
                    placeholder="Digite seu cargo"
                />
                <InputText
                    value={image}
                    toChange={value => setImage(value)}
                    label="Imagem"
                    placeholder="Informe o endereço de imagem"
                />
                <DropdownList
                    value={team}
                    toChange={value => setTeam(value)}
                    mandatory={true}
                    label="Time"
                    itens={props.teams}
                />
                <Button>
                    Criar card
                </Button>
            </form>
        </section>
    )
}