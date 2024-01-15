import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './icons/style.css';
import { Layout } from './Componant/Layout';
import { Home } from './Pages/Home/Home';
import Service from './Pages/Service-Detail/Service';
import AboutUs from './Pages/About/AboutUs';
import Contact from './Pages/ContactUs/Contact';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='/service-detail' element={<Service/>}/>
          <Route path='/about-us' element={<AboutUs/>}/>
          <Route path='/contact-us' element={<Contact/>}/>
        </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
