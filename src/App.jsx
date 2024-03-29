// App.jsx
import Buscador from './components/Buscador'
import MiApi from './components/MiApi'
import Header from './components/Header'
import Footer from './components/Footer'

const App = ({ api, setApi }) => {
  return (
    <>
      <Header />
      <Buscador api={api} setApi={setApi} />
      <MiApi setApi={setApi} />
      <Footer />

    </>
  )
}

export default App
