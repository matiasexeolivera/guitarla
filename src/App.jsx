import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Guitar from './components/Guitar'

function App() {
  
  const [auth, setAuth] = useState(false)

  
  return (
    <>
      <Header />
      <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>
        <div className="row mt-5">
          <Guitar />
        </div>
      </main>
      <Footer />
    </>
  )
}

export default App
