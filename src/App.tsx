import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Experience from './pages/Experience';
import Home from './pages/Home';
import Projects from './pages/Projects';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <main className="container mx-auto text-white  my-4 p-8 h-full ">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/experience" element={<Experience />}/>
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
