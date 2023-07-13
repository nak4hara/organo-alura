import './Footer.css'

const Footer = () => {
    return(
        <footer className='footer__page'>
            <ul className='social-media'>
                <li><a href="https://fb.com"><img src='/images/fb.png'></img></a></li>
                <li><a href="https://twitter.com"><img src='/images/tw.png'></img></a></li>
                <li><a href="https://instagram.com"><img src='/images/ig.png'></img></a></li>
            </ul>
            <img src='/images/logo.png' />
            <p>Desenvolvido por Alura.</p>
        </footer>
    )
}

export default Footer