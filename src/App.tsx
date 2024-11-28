import { Routes, Route, Navigate, BrowserRouter } from 'react-router-dom'
import { PrivateRoute } from './routes'
import { Login, BookList, BookPage } from './pages'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<PrivateRoute />}>
          <Route path="/books" element={<BookList />} />
          <Route path="/books/:id" element={<BookPage />} />
        </Route>
        <Route path="/" element={<Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
