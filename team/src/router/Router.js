import React from 'react'
import {Routes, Route} from 'react-router-dom';
import Home from '../pages/Home';
import Tour from '../pages/Tour';
import TourDetails from '../pages/TourDetails';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import SearchResult from '../pages/SearchResult';
import Gallery from '../pages/Gallery';
import Review from '../pages/Review';
import About from '../pages/About';
const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/home' element={<Home />}/>
      <Route path='/tour' element={<Tour/>}/>
      <Route path='/gallery' element={<Gallery/>}/>
      <Route path='/tours/:id' element={<TourDetails/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup />}/>
      <Route path='/review' element={<Review />}/>
      <Route path='tour/search' element={<SearchResult/>}/>
    </Routes>
  )
}

export default Router
