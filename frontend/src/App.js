import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import HomeBody from './components/HomeBody';
import PeopleBody from './components/PeopleBody';
import Publications from './components/Publications';
import Awards from './components/Awards';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        {/* <HomeBody /> */}

        <Routes>
          <Route path="/" element={<HomeBody />} />
          <Route path="/people" element={<PeopleBody />} />
          <Route path='/publications' element={<Publications />} />
          <Route path="/awards" element={<Awards />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
