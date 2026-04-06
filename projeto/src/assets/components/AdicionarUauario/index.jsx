import './style.css'

export default function AdicionarUsuario() {
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [listaDeUsuarios, setListaDeUsuarios] = useState([])

    const handleAdicionarUsuario = (event) => {
        event.preventDefault()
        if (nome && email) {
            setListaDeUsuarios([...listaDeUsuarios, { nome, email }])
            setNome('')
            setEmail('')
        }
    }

    return (
        <div className='formulario'>
            <h2>Adicionar Usuário</h2>
            <form onSubmit={handleAdicionarUsuario}>
                <input
                    type='text'
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    />
                    <button type='submit'>Adicionar</button>
            </form>
            
            <hr />

            <h2>Usuarios Adicionados</h2>
            <ul>
                {listaDeUsuarios.map((usuario, index) => (
                    <li key={index}>
                        (usuario.nome) - (usuario.email)
                    </li>
                ))}
            </ul>
    </div>
        
  )
}