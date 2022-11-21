import './App.css'
import Navbar from './components/Navbar/Nabbar'

import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
    </div>
  )
}
export default App
