import { useState } from 'react'
import { Link ,Route,Routes} from 'react-router-dom'
import Navbar from './components/Navbar'

function App() {
  const [user,setUser]=useState({})
  function assignUser(newUser){
    setUser(newUser)
    console.log(user)
  }
  return (
    <div className='app'>
      <Routes>
      <Route path="/" element={<Navbar />} />
      </Routes>
    </div>
  )
}

export default App
