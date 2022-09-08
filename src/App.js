import './App.css';
import Header from './components/Header';
import PhotosDirectoryPage from './pages/PhotosDirectoryPage.js';
import Footer from './components/Footer';

function App() {
  return (
    <div className='App'>
    <Header />
      <PhotosDirectoryPage />
    <Footer />
    </div>
  );
}

export default App;
