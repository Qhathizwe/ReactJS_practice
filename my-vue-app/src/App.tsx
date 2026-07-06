
import './App.css'
import { Text } from './components/Text/Text'
import { Navbar } from './components/Text/Navbar/Navbar'
import { Footer } from './components/Text/Footer/Footer'
import Hero  from './components/Text/hero/hero'


function App() {

  return (
    <>
    <div id='app-container'>
    <div id='Scrollable'>
      <Navbar /> <br />  <br />
      <Text varient='h1'>Hi There</Text>
      <Text varient='h2'>Hi There</Text>
      <Text varient='p'>Hi There</Text>
      <Text varient='span'>Hi There</Text>
    </div>
    <Hero />
    <footer />
    </div>
      </>
  )
}

export default App
