
import { BrowserRouter, Link, Outlet, Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import './App.css'
import { Characters } from './pages/Characters'


function App() {

  return (
    <div className='App'>

      <BrowserRouter>

        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='/' element={<Home />} />
            <Route path='/characters' element={<Characters />} />
          </Route>
        </Routes>

      </BrowserRouter>



    </div>
  )
}

function Layout() {
  return (
    <>
      <nav>

        <Link to='/' >Home</Link>
        <Link to='/characters' >Characters</Link>

      </nav>
      <Outlet/>
    </>
  )
}

export default App
