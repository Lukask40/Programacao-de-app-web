import { useState } from 'react'
import './App.css'
import Mensagem from './components/Mensagem'
import InfoAluno from './components/InfoAluno'
import InfoCurso from './components/InfoCurso/index,'

function App() {
  
  return (
    <>
      <h1>Bem-vindo ao meu projeto</h1>
      <Mensagem />
      <InfoAluno />
      <hr />
      <InfoCurso />
    
    </>
  )
}

export default App
