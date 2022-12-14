import { Routes, Route } from 'react-router-dom';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import Header from './components/Header';
import Footer from './components/Footer';
import PhotosDirectoryPage from './pages/PhotosDirectoryPage.js';
import PhotoDetailPage from './pages/PhotoDetailPage';
import './App.css';

function App() {
  return (
    <div className='App'>
    <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='about' element={<AboutPage />} />
        <Route path='contact' element={<ContactPage />} />
        <Route path='directory' element={<PhotosDirectoryPage />} />
        <Route path='directory/:photoId' element={<PhotoDetailPage />} />
      </Routes>
    <Footer />
    </div>
  );
}

export default App;
