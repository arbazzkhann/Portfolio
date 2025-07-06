import './App.css'

//import form react-router-dom
import { Routes, Route } from 'react-router-dom';

//import pages
import Home from '../src/Containers/Home/index'
import About from '../src/Containers/About/index'
import Contact from '../src/Containers/Contact/index'
import Portfolio from '../src/Containers/Portfolio/index'
import Resume from '../src/Containers/Resume/index'
import Skills from '../src/Containers/Skills/index'


function App() {

  return (
    <>
      
      <Routes>
        <Route index element={<Home />} />
        <Route path='/about' element={<About />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/portfolio' element={<Portfolio />}/>
        <Route path='/resume' element={<Resume />}/>
        <Route path='/skills' element={<Skills />}/>
      </Routes>

    </>
  )
}

export default App
