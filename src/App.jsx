import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Home from './pages/Home'
import Mars from './pages/Mars'
import Asteroids from './pages/Asteroids'
import Layout from './pages/Layout'
import Gallery from './pages/Gallery'
import './App.css'

function App() {

  const [searchData, setSearchData] = useState(null)
  const [photoDisplay, setPhotoDisplay] = useState(null)

  return (
    <>
        <Routes>
          <Route element={<Layout setSearchData={setSearchData} setPhotoDisplay={setPhotoDisplay}/>} >
            <Route path="/" element={<Home photoDisplay={photoDisplay} setPhotoDisplay={setPhotoDisplay}/>}/>
            <Route path="/mars" element={<Mars photoDisplay={photoDisplay} setPhotoDisplay={setPhotoDisplay}/>}/>
            <Route path="/asteroids" element={<Asteroids photoDisplay={photoDisplay} setPhotoDisplay={setPhotoDisplay}/>}/>
            <Route path="/gallery" element={<Gallery searchData={searchData} setPhotoDisplay={setPhotoDisplay} photoDisplay={photoDisplay}/>} />
          </Route>
        </Routes>
    </>
  )
}

export default App
