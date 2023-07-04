import InputText from '../../InputText/InputText'
import DropdownList from '../../DropdownList/DropdownList'
import './Forms.css'
import Button from '../../Button/Button'

export default function Forms() {
    const teams = [
        'Programação',
        'Front-End',
        'Data Science',
        'UX e Design',
        'Mobile',
        'Inovação e Gestão'
    ]

    const toSave = (event) => {
        event.preventDefault()
        /* gives the control of the button to me, prevent the default behaviour*/
        console.log('Form foi submetido')
    }

    return (
        <section className='forms'>
            <form onSubmit={toSave}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <InputText mandatory={true} label="Nome" placeholder="Digite seu nome" />
                <InputText mandatory={true} label="Cargo" placeholder="Digite seu cargo" />
                <InputText label="Imagem" placeholder="Informe o endereço de imagem" />
                <DropdownList mandatory={true} label="Time" itens={teams} />
                <Button>
                    Criar card
                </Button>
            </form>
        </section>
    )
}