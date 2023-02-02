import './App.css'
import CreateCard from './components/CreateCard'
import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {

  return (
    <Router>
        <div className="App">
            <h1 className="heading">Quotes</h1>
            <div>
                <CreateCard />
            </div>
        </div>
    </Router>
  );
}

export default App
