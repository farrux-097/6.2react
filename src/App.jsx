import './App.css'
import Footer from './components/footer/footer'
import Header from './components/header/header'
import Hero from './components/hero/hero'
import Elements from './components/item/elements'
import Posts from './components/postlar/posts'
import Recent from './components/recent/recent'

function App() {

  return (
    <>
    <div className="app  w-[300px] h-[100px] bg-amber-100">
      <Header/>
      <Hero/>
    </div>
      <Elements/>
      <div className='bg-[#F7F7F7]'>
        <Posts/>
        <Recent/>
      </div>
        <Footer/>
    </>
  )
}

export default App
