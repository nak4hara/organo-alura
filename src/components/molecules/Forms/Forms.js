import InputText from '../../InputText/InputText'
import './Forms.css'

export default function Forms() {
    return (
        <section>
            <form>
                <InputText label="Nome" placeholder="Digite seu nome" />
                <InputText label="Cargo" placeholder="Digite seu cargo" />
                <InputText label="Imagem" placeholder="Informe o endereço de imagem" />
            </form>
        </section>
    )
}