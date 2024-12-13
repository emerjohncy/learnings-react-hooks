import './App.css'
import UseCallback from './useCallback/UseCallback'
import UseContext from './useContext/UseContext'
import UseEffect from './useEffect/UseEffect'
import UseMemo from './useMemo/UseMemo'
import UseRef from './useRef/UseRef'
import UseRef2 from './useRef/UseRef2'
import UseState from './useState/UseState'

function App() {
  return (
    <div>
      <UseState />
      <UseEffect />
      <UseMemo />
      <UseCallback />
      <UseContext />
      <UseRef />
      <UseRef2 />
    </div>
  )
}

export default App
