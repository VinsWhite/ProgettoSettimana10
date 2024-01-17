import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage';
import WeatherInfoPage from './pages/WeatherInfoPage';
import NotFoundPage from './pages/NotFoundPage';
import WeatherDetail from './pages/WeatherDetail';
import NavBarComponent from './components/NavBarComponent';
import { Container } from 'react-bootstrap';
import NewsPage from './pages/NewsPage';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
    <NavBarComponent />
      <Container>
        <Routes>
          <Route path='/' element={<HomePage />}/>
          <Route path='/weather' element={<WeatherInfoPage />}/>
          <Route path='/weather/:location' element={<WeatherDetail />}/>
          <Route path='/news' element={<NewsPage />}/>
          <Route path='*' element={<NotFoundPage />}/>
        </Routes>
      </Container>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
