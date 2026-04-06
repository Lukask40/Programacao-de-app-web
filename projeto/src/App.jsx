
import './App.css'
import AdicionarUsuario from './assets/components/AdicionarUauario'
import Footer from './assets/components/Footer'
import Header from './assets/components/Header'

function App() {
  
  return (
    <>
    <div className="app">
      <h1> Meu Projeto</h1>
      <Header />
      <main>
        <AdicionarUsuario/>
      </main>
      <Footer />
    </div>
    </>
  )
}

export default App
