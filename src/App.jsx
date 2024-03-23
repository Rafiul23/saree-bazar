import './App.css'
import Banner from './Components/Banner/Banner'
import ChooseUs from './Components/ChooseUs/ChooseUs'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import Products from './Components/Products/Products'

function App() {

  return (
    <div className='mx-auto container'>
      <Header></Header>
      <Banner></Banner>
      <Products></Products>
      <ChooseUs></ChooseUs>
      <Footer></Footer>
    </div>
  )
}

export default App
