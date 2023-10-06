import "./App.css";
import Header from "./components/Header/Header";
import Body from './components/Body/Body'
import BodyFooter from "./components/BodyFooter/BodyFooter";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="container">
      <Header />
      <Body />
      <BodyFooter/>
      <Footer/>
    </div>
  );
}

export default App;
