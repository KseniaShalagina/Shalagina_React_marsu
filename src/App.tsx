import { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Layout from './components/Layout'
import Preloader from './components/Preloader/Preloader'
import HomePage from '../src/pages/HomePage'
import CardsPage from '../src/pages/CardsPage'
import NotFoundPage from '../src/pages/NotFoundPage'

function App() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000)
  }, []);
  
  return (
    <BrowserRouter>
      {
        isLoading ? <Preloader /> :
          <Routes>
            <Route element={<Layout />} >
              <Route index element={<HomePage />} />
              <Route path="/cards" element={<CardsPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Routes>
      }
    </BrowserRouter>
  )
}
export default App;