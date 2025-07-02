import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Header from '../components/Header';
import './App.css';
import Home from './pages/Home';

function App() {
    return (
        <div className="App">
            <Header />
            <Home />
        </div>
    );
}

export default App;
