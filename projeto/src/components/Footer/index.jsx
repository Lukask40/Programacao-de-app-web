import './style.css'

function Footer() {
    return (
        <footer className='footer'>
            <p>
                &copy; {new Date().getFullYear()} Deredevil.Marvel Studios.Todos os direitos reservados.
                <br />
                Senai--BAHIA
            </p>
        </footer>
    )
}

export default Footer