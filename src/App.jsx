import React from 'react'
import Navbar from './components/Navbar'
import Content from './components/Content'
import Page2 from './components/Page2'
import Page3 from './components/Page3'

function App() {
  return (
    <div>
      <Navbar/>
      <div>
        <Content/>
      </div >
      <div className='mt-8'> 
          <Page2/>
      </div>
      <div>
        <Page3/>
      </div>
    </div>
  )
}

export default App