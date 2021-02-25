import './App.css';
import Routes from "./routes"
import Navbar from './components/Navbar'
import Footer from "./components/Footer"
import { BrowserRouter } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="App">
        <div className="container">
          <Routes />
        </div>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
