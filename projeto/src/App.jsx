
import './App.css'
import AdicionarUsuario from './components/AdicionarUsuario'
import Footer from './components/footer'
import Header from './components/Header'

function App() {
  
  return (
    <>
    <div className="app">
      <h1>Daredevil</h1>
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