import './App.css';
import Home from "./components/home/home.component";
import Header from "./components/header/header.component";
import Footer from "./components/footer/footer.component";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;