import './App.css'
import Banner from './Components/Banner/Banner'
import ChooseUs from './Components/ChooseUs/ChooseUs'
import Header from './Components/Header/Header'
import Products from './Components/Products/Products'

function App() {

  return (
    <div className='mx-auto container'>
      <Header></Header>
      <Banner></Banner>
      <Products></Products>
      <ChooseUs></ChooseUs>
    </div>
  )
}

export default App
