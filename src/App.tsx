import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/main/Home'
import GetStartedPage from './pages/main/GetStarted'
import SignupPage from './pages/auth/Signup'

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/getstarted" element={<GetStartedPage />}></Route>
        <Route path="/registration" element={<SignupPage />}></Route>
      </Routes>
    </>
  )
}

export default App
