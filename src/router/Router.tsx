import { Routes, Route } from 'react-router-dom'
import { Home } from '../pages/Home'
import { Page1Layout } from '../pages/Page1'
import { Page1DetailA } from '../pages/Page1DetailA'
import { Page1DetailB } from '../pages/Page1DetailB'
import { Page2 } from '../pages/Page2'
import { Page404 } from '../pages/Page404'

export const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/page1' element={<Page1Layout />} />
      <Route path='/page1/detailA' element={<Page1DetailA />} />
      <Route path='/page1/detailB' element={<Page1DetailB />} />
      <Route path='/page2' element={<Page2 />} />
      <Route path='*' element={<Page404 />} />
    </Routes>
  )
} 