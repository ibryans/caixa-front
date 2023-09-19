import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'


function App() {
  const [count, setCount] = useState(0)

  // Função para atualizar a variável 'count'
  function atualizaContador(): void {
    setCount(count + 1)
  }


  return (
    <>
      <Header titulo={'Primeiro projeto em React'}/>

      <div className="card">
        <button onClick={atualizaContador}>
          Contador: {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
