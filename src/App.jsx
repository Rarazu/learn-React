import logo from './logo.svg';
import './App.css';
import { Link, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='flex justify-center p-6 w-screen h-screen bg-indigo-300 overflow-y-auto'>
      <div className='max-w-md'>
        <div className='flex items-center justify-center mb-4 text-xs 
        text-white-600 font-semibold uppercase tracking-wide'>
          <Link className='mx-2 px-4 py-2 rounded-x1 hover:bg-pink-200 transition-all ease-in-out'
          to="/home">
            Home
          </Link>
          <Link className='mx-2 px-4 py-2 rounded-x1 hover:bg-pink-200 transition-all ease-in-out'
          to="/about">
            About
          </Link>
        </div>
      </div>
      <Routes>
        <Route path='/home' element={<home />}></Route>
      </Routes>
    </div>
  );
}

export default App;
