import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import AppLayout from './ui/AppLayout';
import Logo from './ui/Logo';

function App() {


  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<AppLayout />} />
            
        </Routes>
    </BrowserRouter>
  )
}

export default App
