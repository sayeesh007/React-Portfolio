import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header'
import Banner from './components/Banner'
import Nav from './components/Nav'
import About from './components/About'
import Work from './components/Work'
import Contact from './components/Contact'

function App() {
  return (
    <div className='bg-site bg-no-repeat bg-cover overflow-hidden'>
        <Header/>
        <Banner/>
        <Nav/>
        <About/>
        <Work/>
        <Contact/>
    </div>
  )
}

export default App
