import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import SearchPage from './components/SearchPage';
import RecommendedVideos from './components/RecommendedVideos';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div className="app">
        <Router>
        <Header />
        <div className='appPage'>
            <Routes>
                <Route path="/search/:searchTerm" element={<><Sidebar/><SearchPage/></>}/>              
                <Route path="/" element={<><Sidebar/><RecommendedVideos/></>} />
            </Routes>
        </div>          
        </Router>
    </div>
  );
}

export default App;
