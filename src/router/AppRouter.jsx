import React from 'react'
import {Route, BrowserRouter as Router, Routes} from "react-router-dom"
import Navbar from '../components/Navbar'
import About from '../pages/About';
import NewQuestion from '../pages/NewQuestion';
import  QuestionList from '../pages/QuestionList';
import Contact from '../pages/Contact';
import UpdateQuestion from '../pages/UpdateQuestion';
// import { Footer } from '../components/Footer';
const AppRouter = () => {
  return (
    <Router>
    <Navbar/>
    <Routes>
    <Route path ="/" element={<QuestionList/>}/>
<Route path ="/about" element={<About/>}/>
<Route path ="new-question" element={<NewQuestion/>}/>
<Route path ="/contact" element={<Contact/>}/>
<Route path ="/update-question" element={<UpdateQuestion/>}/>
<Route path ="*" element={<QuestionList/>}/>

    </Routes>
 
    </Router>
  )
}

export default AppRouter