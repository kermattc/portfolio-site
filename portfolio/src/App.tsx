import { Routes, Route, Outlet, Link } from 'react-router-dom';

import About from './components/about';
import Projects from './components/projects';
import Contact from './components/contact';

export default function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/contact' element={<Contact/>}/>
        
        {/* For routes that isn't defined */ }
        <Route path="*" element={<NoMatch />}/>
        
        </Route>
        
      </Routes>
    </>
  );
}

function Layout() {
  return (
    <div>      
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/projects'>Projects</Link>
          </li>
          <li>
            <Link to='/contact'>Contact</Link>
          </li>
        </ul>
      </nav>

      {/* <hr/> */}
      <Outlet/>

    </div>
  )
}

function Home() {
  return (
    <div>
      Home page
    </div>
  )
}

function NoMatch() {
  return (
    <div>
      Sorry, nothing to see here!
      <div>
        <Link to='/'>Go back to home page</Link>
      </div>
    </div>
  )
}