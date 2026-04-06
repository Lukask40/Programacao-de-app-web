import './style.css'

function Footer() {
    return (
        <footer className='footer'>
            <p>
                &copy; {new Date().getFullYear()} Meu Projeto. Todos os direitos reservados.
                <br />
                Senai--BAHIA
            </p>
        </footer>
    )
}

