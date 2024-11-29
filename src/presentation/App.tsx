import { Routes, Route, Navigate, BrowserRouter } from 'react-router-dom'
import { PrivateRoute } from '@/infraestructure/routes'
import { LoginPage, CatalogPage, BookPage } from './pages'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route element={<PrivateRoute />}>
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/book/:id" element={<BookPage />} />
        </Route>
        <Route path="/" element={<Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
