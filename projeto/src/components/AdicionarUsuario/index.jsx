import './style.css'
import { useState } from 'react'

export default function AdicionarUsuario() {
    const [nome, setNome] = useState('')
    const [caracteristica, setCaracteristica] = useState('') 
    const [listaDeUsuarios, setListaDeUsuarios] = useState([])

    const handleAdicionarUsuario = (event) => {
        event.preventDefault()
        
        // Agora verifica apenas se nome e característica foram preenchidos
        if (nome && caracteristica) {
            setListaDeUsuarios([...listaDeUsuarios, { nome, caracteristica }])
            setNome('')
            setCaracteristica('') // Limpa os campos
        } else {
            alert("Preencha o nome e a característica do personagem!")
        }
    }

    return (
        <div className='formulario'>
            <h2>Adicionar Personagem</h2>
            <form onSubmit={handleAdicionarUsuario}>
                <input
                    type='text'
                    value={nome}
                    placeholder='Nome'
                    onChange={(e) => setNome(e.target.value)}
                />
                
                <input
                    type='text'
                    placeholder='Característica (ex: Sentidos Aguçados, Rei do Crime)'
                    value={caracteristica}
                    onChange={(e) => setCaracteristica(e.target.value)}
                />
                <button type='submit'>Adicionar</button>
            </form>
            
            <hr />

            <h2>Personagens Adicionados</h2>
            <ul>
                {listaDeUsuarios.map((usuario, index) => (
                    <li key={index}>
                        <strong>{usuario.nome}</strong> - Característica: {usuario.caracteristica}
                    </li>
                ))}
            </ul>
        </div>
    )
}