import './App.css';
import Header from './components/Header';
import PhotosList from './features/photos/PhotosList.js';
import Footer from './components/Footer';

function App() {
  return (
    <div className='App'>
    <Header />
      <PhotosList />
    <Footer />
    </div>
  );
}

export default App;
