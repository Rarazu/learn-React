import logo from './logo.svg';
import './App.css';
import { Link , Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './pages/Navbar';
import Picture from './pages/Picture';
import List from './pages/List';
import Gallery from './pages/Gallery';

function App() { 
  return (
    <div className='flex justify-left p-6 w-screen h-screen bg-indigo-300 overflow-y-auto'>
      <div className='max-w-md'>
        <div className='flex items-left justify-center mb-4 text-xs 
        text-white-600 font-semibold uppercase tracking-wide'>
          <Link className='mx-2 px-4 py-2 rounded-x1 hover:bg-pink-200 transition-all ease-in-out'
          to="/Home">
            Home
          </Link>
        </div>

        <div className='flex items-left justify-center mb-4 text-xs 
        text-white-600 font-semibold uppercase tracking-wide'>
          <Link className='mx-2 px-4 py-2 rounded-x1 hover:bg-teal-200 transition-all ease-in-out'
          to="/Program">
            Program
          </Link>
        </div>

        <div className='flex items-left justify-center mb-4 text-xs 
        text-white-600 font-semibold uppercase tracking-wide'>
          <Link className='mx-2 px-4 py-2 rounded-x1 hover:bg-pink-200 transition-all ease-in-out'
          to="/Gallery">
            Gallery
          </Link>
        </div>

        <div className='flex items-left justify-center mb-4 text-xs 
        text-white-600 font-semibold uppercase tracking-wide'>
          <Link className='mx-2 px-4 py-2 rounded-x1 hover:bg-teal-200 transition-all ease-in-out'
          to="/List">
            List
          </Link>
        </div>
      </div>
      <Routes>
        <Route path='/Home' element={<Home />}></Route>
        <Route path='/Program' element={<Picture />}></Route>
        <Route path='/Gallery' element={<Gallery />}></Route>
        <Route path='/List' element={<List />}></Route>
      </Routes>
    </div>
  );
}

export default App;
