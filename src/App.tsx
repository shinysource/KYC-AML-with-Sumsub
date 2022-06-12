import { Routes, Route } from 'react-router-dom'
import SignupPage from './pages/auth/Signup'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SignupPage />}></Route>
      <Route path="/registration" element={<SignupPage />}></Route>
    </Routes>
  )
}

export default App
