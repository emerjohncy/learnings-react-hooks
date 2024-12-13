import './App.css'
import UseCallback from './useCallback/UseCallback'
import UseContext from './useContext/UseContext'
import UseEffect from './useEffect/UseEffect'
import UseMemo from './useMemo/UseMemo'
import UseState from './useState/UseState'

function App() {
  return (
    <div>
      <UseState />
      <UseEffect />
      <UseMemo />
      <UseCallback />
      <UseContext />
    </div>
  )
}

export default App
