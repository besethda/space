import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Home from './pages/Home'
import Mars from './pages/Mars'
import Asteroids from './pages/Asteroids'
import Layout from './pages/Layout'
import Display from './pages/Display'
import Gallery from './pages/Gallery'
import './App.css'

function App() {

  const [searchData, setSearchData] = useState(null)

  return (
    <>
        <Routes>
          <Route element={<Layout setSearchData={setSearchData}/>} >
            <Route path="/" element={<Home />}/>
            <Route path="/mars" element={<Mars />}/>
            <Route path="/asteroids" element={<Asteroids />}/>
            <Route path="/display" element={<Display searchData={searchData}/>} />
            <Route path="/gallery" element={<Gallery searchData={searchData}/>} />
          </Route>
        </Routes>
    </>
  )
}

export default App
