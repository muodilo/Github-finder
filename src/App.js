import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Header from "./components/layout/Header";
import Home from './components/pages/Home';
import About from './components/pages/About';
import Footer from './components/layout/Footer';
import NotFound from './components/pages/NotFound';
import UserProfile from './components/pages/UserProfile';
import { GithubProvider } from './context/github/GithubContext'




function App() {
  return (
    <GithubProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={ <Home/>} />
          <Route path="/about" element={<About />} />
          <Route path="/user/:login" element={<UserProfile />} />
          <Route path='/notfound' element={<NotFound/> } />
          <Route path='/*' element={<NotFound/> } />
        </Routes>
        <Footer/>
        </Router>
    </GithubProvider>
  );
}

export default App;
