
import './App.css'
import ImageToggler from './components/ImageToggler'
import NumberButtons from './components/NumberButtons'
import RandomBUtton from './components/RandomButton'
import RandomColorBox from './components/RandomColorBox'
import SayHelloComponent from './components/SayHelloComponent'
import Widthbox from './components/WidthBox'

function App() {
  

  return (
    <>
      <Widthbox/>
      <NumberButtons/>
      <RandomBUtton/>
      <RandomColorBox/>
      <ImageToggler/>
      <SayHelloComponent/>
     
      
      <SayHelloComponent name="nika" age={22} />
      <SayHelloComponent name="giorgi" age={25} />
    
    </>
  )
}

export default App
