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
import PhdStudentsLists from './components/Lists/phdStudents';
import PgStudentsLists from './components/Lists/pgStudents';
import BtechStudentsLists from './components/Lists/btechStudents';
import AlumniStudentsLists from './components/Lists/alumniStudents';

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
          <Route path="/phdstudentsList" element={<PhdStudentsLists />} />
          <Route path="/pgstudentsList" element={<PgStudentsLists />} />
          <Route path="/btechstudentsList" element={<BtechStudentsLists />} />
          <Route path="/alumnistudentsList" element={<AlumniStudentsLists />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
