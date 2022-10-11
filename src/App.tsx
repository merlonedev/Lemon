import './App.sass'
import Dialog from './components/Dialog'

function App() {

  return (
    <main>
      <h1 className='title'>Lemon</h1>
      <button className="open-dialog">Abrir Dialog</button>
      <Dialog title='Dialog with overlay click'/>
    </main>
  )
}

export default App
