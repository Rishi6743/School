import { Route, Routes } from 'react-router-dom';
import './App.css';
import CardComponent from './components/CardComponent';
import CarouselComponent from './components/Carousel';
import Footer from './components/Footer';
import ImportantMessage from './components/ImportantMessage';
import LogoOnlyNavBar from './components/Logo';
import NavBarComponent from './components/Navbar';
import NoticeBoard from './components/NoticeBoard';
import HomePage from './pages/HomePage';
import About from './pages/About';
import SchoolFeeStructure from './pages/FeeStructure';
import Home from './pages/Home';
import PhotoGallery from './pages/PhotoGallery';
import Faculty from './pages/Faculty';
import TeachingFaculty from './pages/TeachingFaculty';


function App() {
  
  return (
    <div className="App">
      <LogoOnlyNavBar/>
       <NavBarComponent/>
       {/* <CardComponent/> */}
       <Routes>
        
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/about" element={<About/>}/>
        <Route exact path="/schoolfeeStructure" element={<SchoolFeeStructure/>}/>
        <Route exact path="/photogallery" element={<PhotoGallery/>}/>
        <Route exact path="/faculty" element={<Faculty/>}/>
        <Route exact path="/teachingfaculty" element={<TeachingFaculty/>}/>
       </Routes>
       
      
    
       <Footer/>

    </div>
  );
}

export default App;
